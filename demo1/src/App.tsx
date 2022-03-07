import React from "react";

type Props = {};

export default function App({}: Props) {
  return (
    <>
      <div>App</div>
      <Header />
    </>
  );
}

const Header = () => {
  return (
    <>
      <h1>Header</h1>
      <span>version {Math.random()}</span>
    </>
  );
};
