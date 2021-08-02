import React from "react";
import * as THREE from "three";
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const ExperimentalGeometry = () => {
  const meshRef = useRef();

  const width = 0.25;
  const depth = 0.15;
  const height = 0.45;

  const shape = new THREE.Shape();
  shape.moveTo(width - 0.08 / 2, 0.02);
  shape.lineTo(0.25 / 2, 0.02);
  shape.lineTo(0.25 / 2, 0.1 + 0.02);
  shape.lineTo(-0.25 / 2, 0.1 + 0.02);
  shape.lineTo(0.25 / 2, 0.02);

  const extrudeSettings = {
    steps: 2,
    depth: 0.01,
    // bevelEnabled: true,
    // bevelThickness: 1,
    // bevelSize: 1,
    // bevelSegments: 2,
  };

  //   useFrame(() => {
  //     meshRef.current.rotation.x =
  //       meshRef.current.rotation.y =
  //       meshRef.current.rotation.z +=
  //         0.01;
  //   });
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

export default ExperimentalGeometry;
