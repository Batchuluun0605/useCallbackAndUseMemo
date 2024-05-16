"use state";
import React, { useEffect, useState } from "react";

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(5));
    console.log("Updating getItems");
  }, [getItems]);
  return (
    <div>
      {items.map((e) => {
        return <div>{e}</div>;
      })}
    </div>
  );
};

export default List;
