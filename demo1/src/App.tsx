import React from "react";

type Props = {};

export default function App({}: Props) {
  return (
    <>
      <div>App</div>
      <Header/>
    </>
  );
}

const Header = () => <h1>Header</h1>;
