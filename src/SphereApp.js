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

import { OrbitControls } from "@react-three/drei";

const SphereApp = () => {
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
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default SphereApp;
