import React from "react";
import * as THREE from "three";
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const HeartGeometry = () => {
  const meshRef = useRef();

  const shape = new THREE.Shape();
  const x = -2.5;
  const y = -5;
  shape.moveTo(x + 2.5, y + 2.5);
  shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
  shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
  shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
  shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
  shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
  shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);

  const extrudeSettings = {
    steps: 2,
    depth: 2,
    bevelEnabled: true,
    bevelThickness: 1,
    bevelSize: 1,
    bevelSegments: 2,
  };
  useFrame(() => {
    meshRef.current.rotation.x =
      meshRef.current.rotation.y =
      meshRef.current.rotation.z +=
        0.01;
  });
  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      position={[0, 1, 0]}
      visibile
      scale={0.1}
    >
      <meshStandardMaterial attach='material' color='purple' />
    </mesh>
  );
};

export default HeartGeometry;
