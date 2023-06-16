import React from "react";
export default function ListItem({ data, textCount }) {
  return (
    <li>
      {data} {textCount}
    </li>
  );
}
