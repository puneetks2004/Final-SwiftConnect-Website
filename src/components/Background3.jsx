import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls, Effects } from '@react-three/drei';
import { UnrealBloomPass } from 'three-stdlib';
import * as THREE from 'three';

extend({ UnrealBloomPass });

const ParticleSwarm = () => {
  const meshRef = useRef();
  const count = 20000;
  const speedMult = 1;
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const target = useMemo(() => new THREE.Vector3(), []);
  const pColor = useMemo(() => new THREE.Color(), []);
  const color = pColor; // Alias for user code compatibility

  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < count; i++) pos.push(new THREE.Vector3((Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100));
    return pos;
  }, []);

  // Material & Geom
  const material = useMemo(() => new THREE.MeshBasicMaterial({ color: 0x8b5cf6 }), []);
  const geometry = useMemo(() => new THREE.TetrahedronGeometry(0.25), []);

  const PARAMS = useMemo(() => ({ "spd": 1.5, "rad": 45, "nrg": 0.8 }), []);
  const addControl = (id, l, min, max, val) => {
    return PARAMS[id] !== undefined ? PARAMS[id] : val;
  };
  const setInfo = () => { };
  const annotate = () => { };

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime() * speedMult;
    const THREE_LIB = THREE;

    if (material.uniforms && material.uniforms.uTime) {
      material.uniforms.uTime.value = time;
    }

    for (let i = 0; i < count; i++) {
      // USER CODE START
      const spreadSpeed = addControl("spd", "Spread Speed", 0.5, 4.0, 1.5);
      const crowdRadius = addControl("rad", "Crowd Radius", 20, 80, 45);
      const viralEnergy = addControl("nrg", "Viral Energy", 0.1, 2.0, 0.8);

      const phi = Math.acos(1.0 - 2.0 * (i + 0.5) / count);
      const theta = 2.399963 * i;

      const bx = crowdRadius * Math.sin(phi) * Math.cos(theta);
      const by = crowdRadius * Math.cos(phi);
      const bz = crowdRadius * Math.sin(phi) * Math.sin(theta);

      const dist = Math.sqrt(bx * bx + by * by + bz * bz) + 0.001;

      const cycleDur = 8.0 / spreadSpeed;
      const tCycle = time % cycleDur;
      const waveFront = (tCycle / cycleDur) * crowdRadius * 1.3;
      const waveWidth = crowdRadius * 0.15;

      const infection = Math.max(0.0, Math.min(1.0, (waveFront - dist) / waveWidth));

      const jitter = infection * viralEnergy;
      const wx = Math.sin(time * 4.1 + i * 0.73) * jitter * 2.0;
      const wy = Math.cos(time * 3.7 + i * 1.17) * jitter * 2.0;
      const wz = Math.sin(time * 3.3 + i * 0.91) * jitter * 2.0;

      const pushFactor = 1.0 + infection * 0.15;
      target.set(bx * pushFactor + wx, by * pushFactor + wy, bz * pushFactor + wz);

      const hue = 0.0 + 0.02 * Math.sin(time + i * 0.01); // red shift
      const sat = 0.7 + infection * 0.3;
      const lit = 0.35 + infection * 0.4;

      color.setHSL(hue, sat, lit);

      if (i === 0) {
        setInfo("Viral Marketing Campaign", "One spark ignites 20,000. Watch the idea spread like wildfire.");
        annotate("pz", new THREE.Vector3(0, 0, 0), "Patient Zero");
      }
      // USER CODE END

      positions[i].lerp(target, 0.1);
      dummy.position.copy(positions[i]);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
      meshRef.current.setColorAt(i, pColor);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[geometry, material, count]} />
  );
};

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#000' }}>
      <Canvas camera={{ position: [0, 0, 100], fov: 60 }}>
        <fog attach="fog" args={['#000000', 0.01]} />
        <ParticleSwarm />
        <OrbitControls autoRotate={true} />
        <Effects disableGamma>
          <unrealBloomPass threshold={0} strength={1.8} radius={0.4} />
        </Effects>
      </Canvas>
    </div>
  );
}