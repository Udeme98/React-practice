// export default [
//   {
//     id: 1,
//     on: true,
//   },
//   {
//     id: 2,
//     on: false,
//   },
//   {
//     id: 3,
//     on: true,
//   },
//   {
//     id: 4,
//     on: true,
//   },
//   {
//     id: 5,
//     on: false,
//   },
//   {
//     id: 6,
//     on: false,
//   },
// ];
// import React from "react";
// import { useState } from "react";
// import Boxes from "./Boxes";
// import Box from "./Box";
// // import Header from "./Header";
// // import Meme from "./Meme";

// // function App() {
//   const [square, setSquare] = useState(Boxes);

//   function toggle(id) {
//     setSquare((prevBox) => {
//       return prevBox.map((box) => {
//         return box.id === id ? { ...box, on: !box.on } : box;
//       });
//     });
//   }

//   const squareElements = square.map((box) => {
//     return <Box on={box.on} key={box.id} toggled={toggle} id={box.id} />;
//   });
//   return (
//     <div>
//       {squareElements}
//       {/* <Header />
//       <Meme /> */}
//     </div>
//   );
// }

// export default App;
