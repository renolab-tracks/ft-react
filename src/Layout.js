import React from "react";
import { Link } from "react-router-dom";
export default function Layout(props) {
  return (
    <>
      <div>Header for Logged In Users</div>
      <div>
        <Link to="/"> Home </Link> <br />
        <Link to="/bike"> Bike </Link>
        <br />
        <Link to="/truck">Truck</Link>
        <br />
      </div>
      <hr />
      {props.children}
      <div>Footer Users</div>
    </>
  );
}
