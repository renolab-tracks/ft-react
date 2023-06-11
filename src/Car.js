import React from "react";
export default function Car(props) {
  return (
    <>
      <button
        onClick={function () {
          props.setMake("Nissan");
        }}
      >
        Click
      </button>
      <h2>I am a {props.data.car.make} Car! Vroom Vroom </h2>

      {props.data.cars.map((item) => (
        <li key={item.id}>
          {item.make} - {item.model}
        </li>
      ))}
    </>
  );
}
