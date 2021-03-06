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
import ExperimentalGeometry from "./components/ExperimentalGeometry/ExperimentalGeometry";

const ExperimentalApp = () => {
  return (
    <div className='App'>
      <Canvas>
        <GroundPlane />
        <Backdrop />
        <SphereFillLight />
        <SphereKeyLight />
        <ExperimentalGeometry />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ExperimentalApp;
