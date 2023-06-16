import React, { useState } from "react";
import LocaleContext from "./LocaleContext";

export default function List({ getList, ListNode, textCount, user }) {
  const [list, setList] = useState([]);
  const { locale, toggleLocale } = React.useContext(LocaleContext);

  const size = 10;
  React.useEffect(() => {
    console.log(getList, "getList changed");
    getList();
    // setList(getList());
  }, [getList]);

  React.useEffect(() => {
    console.log("user changed");
  }, [user]);

  return (
    <>
      {locale}
      {list.map((item) => (
        <p>{item}</p>
      ))}
    </>
  );
}
