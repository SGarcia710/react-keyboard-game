import React, { useLayoutEffect } from 'react';
import './styles.css';
import { useKeyState } from 'use-key-state';
import Keycap from './components/Keycap';
import ThreeScene from './components/ThreeScene';
import { OrbitControls } from '@react-three/drei';
import { generateKeyCodes, r1, r2, r3, r4, r5 } from './commons/keys';

const KEYCAP_WIDTH = 19;
const KEYCAP_HEIGHT = 19;

const KEYCODES = generateKeyCodes();
function App() {
  const { ...keys } = useKeyState(KEYCODES);
  const [pressedKey, setPressedKey] = React.useState();
  React.useEffect(() => {
    window.addEventListener('keydown', (e) => {
      e.preventDefault();
      setPressedKey(KEYCODES[e.code] || KEYCODES[e.key]);
    });
  }, []);

  return (
    <div
      style={{
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: 380,
          backgroundColor: 'rgba(0,0,0,0.2)',
          borderRadius: 8,
          padding: 10,
          position: 'absolute',
          zIndex: 99,
          top: 50,
          left: window.innerWidth / 2 - 380 / 2,
        }}
      >
        <h1
          style={{
            color: 'white',
            fontSize: 70,
            textTransform: 'capitalize',
            textAlign: 'center',
          }}
        >
          {pressedKey || 'Type...'}
        </h1>
      </div>
      <ThreeScene>
        <color attach="background" args={['#161c24']} />

        <React.Suspense fallback={null}>
          {[r1, r2, r3, r4, r5].map((row, i) => {
            return row.map((key, j) => {
              return (
                <Keycap
                  key={key.code}
                  position={[
                    -(row.length * KEYCAP_WIDTH) / 2 + j * KEYCAP_WIDTH,
                    KEYCAP_HEIGHT * (5 / 2) + -(KEYCAP_HEIGHT * i),
                    keys[key.code].pressed ? -2 : 0,
                  ]}
                />
              );
            });
          })}
        </React.Suspense>
        <ambientLight />
        <OrbitControls />
        <pointLight position={[10, 100, 20]} />
      </ThreeScene>
    </div>
  );
}

export default App;
