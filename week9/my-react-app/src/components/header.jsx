import React from "react";
export default function Header({ myAppName }) {
  console.log(myAppName);
  return (
    <div>
      <header>
        <h1>Welcom to {myAppName}</h1>
      </header>
    </div>
  );
}
