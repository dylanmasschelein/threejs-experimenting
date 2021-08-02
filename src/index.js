import React from "react";
import ReactDOM from "react-dom";
import SphereApp from "./SphereApp";
import SquareApp from "./SquareApp";
import HeartApp from "./HeartApp";
import ExperimentalApp from "./ExperimentalApp";

ReactDOM.render(
  <React.StrictMode>
    {/* <SphereApp /> */}
    {/* <SquareApp /> */}
    {/* <HeartApp /> */}
    <ExperimentalApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// import ReactDOM from "react-dom";
// import React, { useRef, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";

// function Box(props) {
//   // This reference will give us direct access to the mesh
//   const mesh = useRef();
//   // Set up state for the hovered and active state
//   const [hovered, setHover] = useState(false);
//   const [active, setActive] = useState(false);
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (mesh.current.rotation.x += 0.01));
//   useFrame((state, delta) => (mesh.current.rotation.y += 0.02));
//   // Return view, these are regular three.js elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={mesh}
//       scale={active ? 1.5 : 1}
//       onClick={(event) => setActive(!active)}
//       onPointerOver={(event) => setHover(true)}
//       onPointerOut={(event) => setHover(false)}
//     >
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
//     </mesh>
//   );
// }

// ReactDOM.render(
//   <Canvas>
//     <ambientLight />
//     <pointLight position={[10, 10, 10]} />
//     <Box position={[-1.2, 0, 0]} />
//     <Box position={[1.2, 0, 0]} />
//   </Canvas>,
//   document.getElementById("root")
// );
