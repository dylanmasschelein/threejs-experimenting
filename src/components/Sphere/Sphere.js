import { useState } from "react";
const Sphere = () => {
  const [color, setColor] = useState(true);
  return (
    <mesh
      visible
      userData={{ test: "Dylan is the greatest" }}
      position={[0, 0, 0]}
      castShadow
      onClick={() => setColor(!color)}
    >
      <sphereGeometry attach='geometry' arg={[1, 16, 16]} />
      <meshStandardMaterial
        attach='material'
        color={color ? "blue" : "purple"}
        transparent
        roughness={0.1}
        metalness={0.1}
      />
    </mesh>
  );
};
export default Sphere;
