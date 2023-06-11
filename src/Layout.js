import React from "react";
export default function Layout(props) {
  return (
    <>
      <div>Header for Logged In Users</div>
      {props.children}
      <div>Footer Users</div>
    </>
  );
}
