import React from "react";
import Status from "./Status";
export default function Tabs() {
  const [tab, setSelectedTab] = React.useState("posts");
  const [theme, setTheme] = React.useState("red");
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    console.log("In useEffect, after render or tab update");

    fetch(`https://jsonplaceholder.typicode.com/${tab}`)
      .then((response) => response.json())
      .then((json) => {
        setList(json);
      });

    return () => {
      console.log("executed on tab change , clear up");
    };
  }, [tab]);

  React.useEffect(() => {
    console.log("will run onMount");

    return () => {
      window.onbeforeunload = function (e) {
        e.returnValue = "Test";
      };
    };
  }, []);

  React.useEffect(() => {
    console.log("In useEffect, after render or themeupdate");

    fetch(`https://jsonplaceholder.typicode.com/${tab}`)
      .then((response) => response.json())
      .then((json) => {
        setList(json);
      });
    setSelectedTab("posts");

    return () => {
      console.log(theme + "clear Up!!!");
    };
  }, [theme]);

  console.log("component" + "render");
  return (
    <React.Fragment>
      <button
        onClick={() => {
          setTheme("theme");
        }}
      >
        set Theme
      </button>

      <button
        onClick={() => {
          setSelectedTab("users");
        }}
      >
        Users
      </button>
      <button
        onClick={() => {
          setSelectedTab("posts");
        }}
      >
        Posts
      </button>
      <button
        onClick={() => {
          setSelectedTab("comments");
        }}
      >
        Comments
      </button>
      <Status tab={tab} theme={theme} setStatus={setSelectedTab}></Status>

      <h1>{tab}</h1>

      {list.length !== 0
        ? list.map((item) => JSON.stringify(item))
        : "Loading ....."}
    </React.Fragment>
  );
}
