import { useCallback, useEffect, useRef, useState } from "react";
import { Slider, Theme } from "@radix-ui/themes";
// @ts-ignore
import jsonUpdates from "/seph-blog-updates.json?url&raw";
import { Loro, OpId } from "loro-crdt";
import "./App.css";
import "@radix-ui/themes/styles.css";
import { throttle } from "throttle-debounce";

function App() {
  const [checkoutTime, setCheckoutTime] = useState(0);
  const text = useRef("");
  const view = useRef(null);
  const [version, setVersion] = useState(-1);
  const [maxVersion, setMaxVersion] = useState(0);
  const loro = useRef(new Loro());
  const lastId = useRef<undefined | OpId>();
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) { return }
    ran.current = true;
    console.log(jsonUpdates);
    loro.current.importJsonUpdates(jsonUpdates);
    lastId.current = loro.current.frontiers()[0];
    setMaxVersion(lastId.current.counter);
    loro.current.checkout([]);
    text.current = "";
  }, []);

  return (
    <div style={{ width: "calc(100% - 32)", padding: 16 }} ref={view}>
      <Theme style={{ fontFamily: "monospace" }}>
        <Slider
          value={[version]}
          max={maxVersion}
          min={-1}
          onValueChange={useCallback((v: number[]) => {
            const checkout = throttle(100, (version: number) => {
              const start = performance.now();
              if (version === -1) {
                loro.current.checkout([]);
              } else {
                loro.current.checkout([{
                  peer: lastId.current?.peer ?? "0",
                  counter: version,
                }]);
              }
              setCheckoutTime(performance.now() - start);
              text.current = loro.current.getText("text").toString();
            });
            setVersion(v[0]);
            checkout(v[0]);
          }, [])}
        />
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
          <span style={{}}>Current Version {version}</span>{" "}
          <span style={{}}>Max Version {maxVersion}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "monospace" }}>
          <span style={{ marginRight: "2em" }}>Checkout duration: {checkoutTime.toFixed(2)} ms</span>
          <span>Text length: {text.current.length}</span>
        </div>
        <div style={{ position: "relative", marginTop: 8, transform: "scale(1.075)", transformOrigin: "0 0" }}>
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
              transform: "scale(0.025) translateX(3600%)",
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
