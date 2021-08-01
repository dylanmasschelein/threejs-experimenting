import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Mesh = ({ boxPosition }) => {
  const mesh = useRef();

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      // What do props do?
      ref={mesh}
      position={boxPosition}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
      scale={active ? 2 : 1}
    >
      <octahedronGeometry />
      <meshStandardMaterial color={hovered ? "orangered" : "green"} />
    </mesh>
  );
};
export default Mesh;
