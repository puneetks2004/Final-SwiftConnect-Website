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
    const material = useMemo(() => new THREE.MeshBasicMaterial({ color: 0xffffff }), []);
    const geometry = useMemo(() => new THREE.TetrahedronGeometry(0.25), []);

    const PARAMS = useMemo(() => ({ "spread": 90, "pulse": 1.6, "wave": 3.2, "depth": 1.4 }), []);
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
            const spread = addControl("spread", "Brain Size", 20, 160, 90);
            const pulse = addControl("pulse", "Activity", 0, 4, 1.6);
            const wave = addControl("wave", "Signal Flow", 0, 8, 3.2);
            const depth = addControl("depth", "Layer Depth", 0.2, 4, 1.4);

            const n = i / count;
            const layer = Math.floor(n * 7.0);
            const local = n * 7.0 - layer;

            const t = time * 0.6;
            const side = layer - 3.0;

            const a = local * 6.28318530718 + t * (0.25 + layer * 0.03);
            const rBase = (1.0 - Math.abs(side) / 4.2) * spread;
            const r = rBase * (0.45 + 0.55 * Math.sin(local * 3.14159265));

            const xWave = Math.sin(a * 2.0 + t * wave + side) * 6.0 * pulse;
            const yWave = Math.cos(a * 3.0 - t * wave + local * 8.0) * 5.0 * pulse;
            const zWave = Math.sin(a + t * 1.7 + side * 1.3) * 7.0 * pulse;

            const x = side * spread * 0.34 + xWave;
            const y = Math.sin(a) * r + yWave;
            const z = Math.cos(a) * r * depth + zWave;

            const bridge = Math.sin(local * 18.8495559 + t * wave + layer) * 8.0;
            target.set(x + bridge, y, z);

            const activity = 0.5 + 0.5 * Math.sin(t * wave * 1.7 + local * 18.0 + layer);
            const hue = 0.55 + 0.18 * Math.sin(layer * 0.7 + t * 0.4);
            const sat = 0.75 + activity * 0.25;
            const lit = 0.28 + activity * 0.38;

            color.setHSL(hue, sat, lit);

            if (i === 0) {
                setInfo(
                    "Neural Brain Network",
                    "Layered particle cortex with pulsing signal activity. Nodes form shifting neural pathways like a living brain."
                );
                annotate("core", new THREE.Vector3(0, 0, 0), "Cortex");
                annotate("left", new THREE.Vector3(-spread * 0.9, 0, 0), "Input");
                annotate("right", new THREE.Vector3(spread * 0.9, 0, 0), "Output");
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

export default function Background2() {
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