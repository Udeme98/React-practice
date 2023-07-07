import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [show, setShow] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const windowTracker = () => {
    return <h3>Window width: {windowWidth}</h3>;
  };

  useEffect(() => {
    window.addEventListener("resize", function () {
      setWindowWidth(window.innerWidth);
    });
    return function () {
      window.removeEventListener("resize", function () {
        setWindowWidth(window.innerWidth);
      });
    };
  }, []);

  function toggle() {
    setShow((prev) => !prev);
  }
  return (
    <div>
      <button onClick={toggle}>Toggle Tracker</button>
      {show && windowTracker()}
    </div>
  );
}

export default App;
