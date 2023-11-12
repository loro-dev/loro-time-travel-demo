import { useCallback, useEffect, useRef, useState } from "react";
import { Slider, Theme } from "@radix-ui/themes";
// @ts-ignore
import encodedBase64 from "/seph-blog1.txt?url&raw";
import { Loro, OpId, setPanicHook } from "loro-crdt";
import "./App.css";
import "@radix-ui/themes/styles.css";
import { throttle } from "throttle-debounce";
import { base64ToBinary } from "./utils";

setPanicHook();
function App() {
  const [checkoutTime, setCheckoutTime] = useState(0);
  const text = useRef("");
  const view = useRef(null);
  const [version, setVersion] = useState(0);
  const loro = useRef(new Loro());
  const lastId = useRef<undefined | OpId>();

  useEffect(() => {
    const bytes = base64ToBinary(encodedBase64);
    loro.current.import(bytes);
    lastId.current = loro.current.frontiers()[0];
    lastId.current.counter -= 10;
    const textString = loro.current.getText("text").toString();
    setVersion(lastId.current!.counter);
    text.current = textString;
  }, []);

  return (
    <div style={{ width: "100%" }} ref={view}>
      <Theme>
        <Slider
          value={[version]}
          max={lastId.current?.counter ?? 0}
          min={-1}
          onValueChange={useCallback((v: number[]) => {
            const checkout = throttle(100, (version: number) => {
              const start = performance.now();
              if (version === -1) {
                loro.current.checkout([]);
              } else {
                loro.current.checkout([{
                  peer: lastId.current?.peer ?? 0n,
                  counter: version,
                }]);
              }
              setCheckoutTime(performance.now() - start);
              text.current = loro.current.getText("text").toString();
            });
            console.log(v[0]);
            setVersion(v[0]);
            checkout(v[0]);
          }, [])}
        />
        <div style={{ display: "flex" }}>
          <span style={{ width: "200px" }}>Current Version {version}</span>{" "}
          <span style={{ width: "200px" }}>Max Version {lastId.current?.counter ?? 0}</span>
          <span>Checkout duration: {checkoutTime.toFixed(2)} ms</span>
        </div>
        <div>Current Document Text length: {text.current.length}</div>
        <div style={{ position: "relative" }}>
          <div
            style={{
              width: "100%",
              whiteSpace: "pre-wrap",
              transform: "scale(0.8)",
              transformOrigin: "0 0",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            {text.current}
          </div>
          <div
            style={{
              width: "100%",
              whiteSpace: "pre-wrap",
              transform: "scale(0.1) translateX(800%)",
              transformOrigin: "0 0",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            {text.current}
          </div>
          <div
            style={{
              width: "100%",
              whiteSpace: "pre-wrap",
              transform: "scale(0.02) translateX(4500%)",
              transformOrigin: "0 0",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            {text.current}
          </div>
        </div>
      </Theme>
    </div>
  );
}

export default App;
