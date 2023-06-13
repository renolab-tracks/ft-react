import React from "react";

export default function Status({ tab, theme }) {
  React.useEffect(() => {
    console.log("status" + tab);
  }, [tab]);

  return <h2>{tab}</h2>;
}
