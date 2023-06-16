import React from "react";
import List from "./List";

import LocaleContext from "./LocaleContext";

export default function Manage() {
  const [digit, setDigit] = React.useState(0);
  const [theme, setTheme] = React.useState("red");
  const [tab, setSelectedTab] = React.useState("posts");

  const { locale, toggleLocale } = React.useContext(LocaleContext);

  // const numb = slowFunction(digit);

  const numb = React.useMemo(() => {
    return slowFunction(digit);
  }, [digit]);

  React.useEffect(() => {}, [digit]);

  function slowFunction(number) {
    for (var i = 0; i < 1000000000; i++) {}

    console.log("slow function");

    return 2 * number;
  }

  const updateDigit = () => {
    setDigit((prevDigit) => prevDigit + 1);
  };

  const updateTheme = () => {
    setTheme((prevTheme) => (prevTheme == "black" ? "red" : "black"));
  };

  const listMaker = (digit) => {
    return () => {
      return () => {
        fetch(`https://jsonplaceholder.typicode.com/${tab}`).then((response) =>
          response.json()
        );
      };
    };
  };

  // const getList = () => fetch(`https://jsonplaceholder.typicode.com/${tab}`);

  const getList = React.useCallback(
    () => fetch(`https://jsonplaceholder.typicode.com/${tab}`),
    []
  );

  const user = { name: "test" };

  // const getList = useCallback(
  //   (number) => {
  //     return listMaker(digit);
  //   },
  //   [digit]
  // );

  return (
    <>
      <h1>
        {theme} {locale}
      </h1>

      <h1>{digit}</h1>

      <br />
      <h2>{numb}</h2>
      <button onClick={updateDigit}>Double Number</button>
      <button onClick={updateTheme}>Update Theme</button>
      <button onClick={() => setSelectedTab("posts")}>posts</button>
      <button onClick={() => setSelectedTab("comments")}>comments</button>
      <button onClick={() => setSelectedTab("users")}>Users</button>
      {tab}
      <List user={user} getList={getList} theme={theme} />
    </>
  );
}
