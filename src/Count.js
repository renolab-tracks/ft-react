import React from "react";
export default function Counter() {
  const initialValue = () => {
    console.log("initialValue");
    return Math.random() * 100;
  };
  const [count, setCount] = React.useState(initialValue);
  const [theme, setTheme] = React.useState("blue");
  const [user, setUser] = React.useState({ name: "", car: {} });

  setUser({ ...user, name: test });

  this.setState({ name: "test" });

  console.log("component after init", count, theme, user);

  const increment = () => {
    // setCount((currentCount) => {
    //   return currentCount + 1;
    // });

    setTheme("red");
    setUser({ name: "Mahmoud" });
  };

  const decrement = () => {
    setCount((count) => count - 1);
  };

  return (
    <React.Fragment>
      <button onClick={decrement}>-</button>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
    </React.Fragment>
  );
}
