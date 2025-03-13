import React from "react";
export default function Header(props) {
  console.log(props);
  return (
    <div>
      <header>
        <h1>Welcom to {props.myAppName}</h1>
      </header>
    </div>
  );
}
