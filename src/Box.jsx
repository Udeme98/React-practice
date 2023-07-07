import React from "react";

export default function Box(props) {
  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent",
  };

  return (
    <div
      style={styles}
      onClick={() => props.toggled(props.id)}
      className="box"
    ></div>
  );
}

// const [on, setOn] = useState(props.on);

// const toggle = () => {
//   setOn((prevOn) => !prevOn);
// };
