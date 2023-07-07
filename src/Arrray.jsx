import React from "react";
import { useState } from "react";

export default function Arrray() {
  const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"]);

  function addItem() {
    setThingsArray((prev) => {
      return [...thingsArray, `Thing ${prev.length + 1}`];
    });
  }

  const showThings = thingsArray.map((thing) => {
    return <p key={thing}>{thing}</p>;
  });
  return (
    <div>
      <button onClick={addItem}>Add Item</button>;{showThings}
    </div>
  );
}
