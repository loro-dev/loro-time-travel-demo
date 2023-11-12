import { useEffect, useRef, useState } from "react";
import { Slider, Text, Theme } from "@radix-ui/themes";
// @ts-ignore
import encodedBase64 from "/seph-blog1.txt?url&raw";
import { Loro, OpId, setPanicHook } from "loro-crdt";
import "./App.css";
import "@radix-ui/themes/styles.css";
import { base64ToBinary } from "./utils";

function App() {
  const [text, setText] = useState("");
  const [version, setVersion] = useState(0);
  const loro = useRef(new Loro());
  const lastId = useRef<undefined | OpId>();

  useEffect(() => {
    setPanicHook();
    const bytes = base64ToBinary(encodedBase64);
    loro.current.import(bytes);
    loro.current.subscribe((event) => {
      console.log(event);
    });
    for (let [_, changes] of loro.current.getAllChanges().entries()) {
      console.log(changes);
      const lastChange = changes[changes.length - 1];
      lastId.current = {
        peer:  lastChange.peer.valueOf(),
        counter: lastChange.counter + lastChange.length - 1,
      };
    }
    const text = loro.current.getText("text").toString();
    setVersion(lastId.current!.counter);
    setText(text);
  }, []);

  const checkout = (version: number)=>{
    console.log(loro.current.getAllChanges());
    console.log(loro.current.frontiers());
    loro.current.checkout([{
      peer: lastId.current?.peer ?? 0n,
      counter: version
    }])
  }

  return (
    <>
      <Theme>
        <Slider
          value={[version]}
          max={lastId.current?.counter ?? 0}
          onValueChange={(v) => {
            setVersion(v[0]);
            checkout(v[0]);
          }}
        />
        <Text>{text}</Text>
      </Theme>
    </>
  );
}

export default App;
