import React from 'react';
import Grainient from './components/background.jsx';

export default function App() {
  return (
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <Grainient
        color1="#0c090c"
        color2="#7e63e8"
        color3="#0d55ca"
        timeSpeed={0.65}
        colorBalance={0}
        warpStrength={1}
        warpFrequency={5}
        warpSpeed={2}
        warpAmplitude={50}
        blendAngle={0}
        blendSoftness={0.1}
        rotationAmount={500}
        noiseScale={2}
        grainAmount={0.1}
        grainScale={2}
        grainAnimated={false}
        contrast={1.5}
        gamma={1}
        saturation={1}
        centerX={0}
        centerY={0}
        zoom={0.9}
      />
    </div>
  );
}
