import { Canvas } from "@react-three/fiber";
import Mesh from "./components/Mesh/Mesh";
import "./App.css";
import { OrbitControls } from "@react-three/drei";

const SquareApp = () => {
  const box1 = [-2, 0, 0];
  const box2 = [2, 0, 0];
  return (
    <div className='App'>
      <Canvas>
        <ambientLight intensity={0.1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        {/* <directionalLight intensity={0.5} position={[0, 0, 5]} color='blue' /> */}
        <Mesh boxPosition={box1} />
        <Mesh boxPosition={box2} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default SquareApp;
