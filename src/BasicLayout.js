import React from "react";
export default function BasicLayout(props) {
  return (
    <>
      <div>Header for Non Logged In Users</div>
      {props.children}
      <div>Footer for Visitors</div>
    </>
  );
}
