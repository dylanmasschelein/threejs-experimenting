import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import Mesh from "./components/Mesh/Mesh";
import Sphere from "./components/Sphere/Sphere";
import SphereKeyLight from "./components/SphereKeyLight/SpehereKeyLight";
import "./App.css";
import GroundPlane from "./components/GroundPlane/GroundPlane";
import Backdrop from "./components/BackDrop/BackDrop";
import SphereFillLight from "./components/SphereFillLight/SphereFillLight";
import SphereRimLight from "./components/SphereRimLight/SphereRimLight";

const App = () => {
  const [light, setLight] = useState(true);
  return (
    <div className='App' onClick={() => setLight(!light)}>
      <Canvas>
        <GroundPlane />
        <Backdrop />
        {light && <SphereKeyLight brightness={10} color={"#ffc9f9"} />}
        <SphereFillLight brightness={2.6} color='#bdefff' />
        <SphereRimLight brightness={54} color='#fff' />
        <Sphere />
      </Canvas>
    </div>
  );
};

export default App;

// const App = () => {
//   const box1 = [-2, 0, 0];
//   const box2 = [2, 0, 0];
//   return (
//     <div className='App'>
//       <Canvas>
//         <ambientLight intensity={0.1} />
//         <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
//         <pointLight position={[-10, -10, -10]} />
//         {/* <directionalLight intensity={0.5} position={[0, 0, 5]} color='blue' /> */}
//         <Mesh boxPosition={box1} />
//         <Mesh boxPosition={box2} />
//       </Canvas>
//     </div>
//   );
// };

// export default App;
