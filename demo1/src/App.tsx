import React, { useState } from "react";
import Header from "./widgets/Header";
type Props = {};

export default function App({}: Props) {
  return (
    <>
      <div>App</div>
      <Header />
      <Body title="Click" version="1234"/>
    </>
  );
}


type BodyProps = {
  title:String
  version:String
}
const Body = (props:BodyProps) => {
  let count = 0
  const [countX, setCountX] = useState<number>(0)

  return (
    <>
      <button onClick={()=>{
        count++
        console.log("count: " + count)
        }}>{props.title}: {count}</button>
    </>
  );
};
