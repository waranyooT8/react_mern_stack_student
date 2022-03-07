import React from "react";
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
  return (
    <>
      <button onClick={()=>count++}>{props.title}: {count}</button>
    </>
  );
};
