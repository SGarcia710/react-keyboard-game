import React from 'react';
import { Canvas } from '@react-three/fiber';

const ThreeScene = ({ children }) => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 150],
        fov: 75,
        aspect: window.innerWidth / window.innerHeight,
      }}
    >
      {children}
    </Canvas>
  );
};

export default ThreeScene;
