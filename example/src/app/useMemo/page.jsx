"use client";
import React, { useEffect, useMemo, useState } from "react";

const page = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const theme = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("theme changed");
  }, [theme]);
  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}>toggle button</button>
      <div style={theme}>{doubleNumber}</div>
    </>
  );
};

export default page;

function slowFunction(num) {
  for (let i = 0; i < 10000; i++) {}
  return num * 2;
}
