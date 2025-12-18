import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, RoundedBox, Float } from '@react-three/drei';
import * as THREE from 'three';

const Cube = () => {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.2;
      mesh.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <RoundedBox ref={mesh} args={[2.5, 2.5, 2.5]} radius={0.1} smoothness={4}>
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </RoundedBox>
    </Float>
  );
};

const RotatingCube: React.FC = () => {
  return (
    <Canvas className="w-full h-full" camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />
      <Cube />
    </Canvas>
  );
};

export default RotatingCube;