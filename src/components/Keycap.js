import React from 'react';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { useLoader } from '@react-three/fiber';
import model from '../assets/models/blankKeycap.stl';

const Keycap = ({ position }) => {
  const geom = useLoader(STLLoader, model);

  return (
    <mesh position={position} rotation={[1.4, 0, 0]}>
      <primitive object={geom} attach="geometry" />
      <meshStandardMaterial color={'gray'} />
    </mesh>
  );
};

export default Keycap;
