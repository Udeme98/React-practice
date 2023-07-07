import React from "react";
import { useState } from "react";

export default function Obj() {
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+234567890",
    email: "abc@gmail.com",
    isFavorite: false,
  });

  function toggleName() {
    setContact((prev) => {
      return { ...contact, firstName: "Jane" };
    });
  }

  return (
    <div>
      <h1>
        {contact.firstName} {contact.lastName}
      </h1>
      <button onClick={toggleName}>Toggle</button>
    </div>
  );
}
