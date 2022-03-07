import React, { useState } from "react";
import Header from "./widgets/Header";
type Props = {};

export default function App({}: Props) {
  return (
    <>
      <div>App</div>
      <Header />
      <br />
      <Body title="Click" version="1234" />
    </>
  );
}

type BodyProps = {
  title: String;
  version: String;
};
const Body = (props: BodyProps) => {
  let count = 0;
  const [countX, setCountX] = useState<number>(0);
  const [username, setUsername] = useState<String>("")

  return (
    <>
      {/* demo button */}
      <button
        onClick={() => {
          setCountX((pre) => pre + 1);
        }}
      >
        {props.title}: {countX}
      </button>

      {/* demo input */}
      <br />
      <input type="text" name="username" onChange={e=>setUsername(e.target.value)}/>
      {/* spy */}
      <br />
      <span>Debug: {username}</span>
    </>
  );
};
