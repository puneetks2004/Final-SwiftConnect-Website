import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { OrbitControls, Effects } from "@react-three/drei";
import { UnrealBloomPass } from "three-stdlib";
import * as THREE from "three";

extend({ UnrealBloomPass });

const ParticleSwarm = () => {
    const meshRef = useRef();
    const count = 12000; // optimized
    const dummy = useMemo(() => new THREE.Object3D(), []);
    const target = useMemo(() => new THREE.Vector3(), []);
    const color = useMemo(() => new THREE.Color(), []);

    const positions = useMemo(() => {
        const pos = [];
        for (let i = 0; i < count; i++) {
            pos.push(
                new THREE.Vector3(
                    (Math.random() - 0.5) * 100,
                    (Math.random() - 0.5) * 100,
                    (Math.random() - 0.5) * 100
                )
            );
        }
        return pos;
    }, []);

    const material = useMemo(
        () => new THREE.MeshBasicMaterial({ color: 0xffffff }),
        []
    );
    const geometry = useMemo(() => new THREE.SphereGeometry(0.15, 6, 6), []);

    useFrame((state) => {
        if (!meshRef.current) return;
        const time = state.clock.getElapsedTime();

        for (let i = 0; i < count; i++) {

            // 🌊 Layered wave motion (more depth)
            const layer = Math.floor(i / 2000);
            const spread = 30 + layer * 10;

            const angle = (i % 200) * 0.05 + time * 0.5;

            const x = Math.cos(angle) * spread;
            const y = Math.sin(angle * 2 + time) * 8;
            const z = Math.sin(angle) * spread + (time * 15 % 200) - 100;

            target.set(x, y, z);

            // smooth movement
            positions[i].lerp(target, 0.06);

            dummy.position.copy(positions[i]);
            dummy.updateMatrix();
            meshRef.current.setMatrixAt(i, dummy.matrix);

            // ✨ Pulse effect (core glow)
            const pulse = Math.sin(time * 3 + i * 0.02) * 0.5 + 0.5;

            // 💜 Gradient color (purple → cyan)
            const mix = (i % 200) / 200;

            const r = 0.5 * (1 - mix) * pulse;
            const g = 0.3 * mix + 0.2 * pulse;
            const b = 1.0;

            color.setRGB(r, g, b);
            meshRef.current.setColorAt(i, color);
        }

        meshRef.current.instanceMatrix.needsUpdate = true;
        if (meshRef.current.instanceColor)
            meshRef.current.instanceColor.needsUpdate = true;
    });

    return <instancedMesh ref={meshRef} args={[geometry, material, count]} />;
};

export default function SecurityBackground() {
    return (
        <div className="w-full h-full">
            <Canvas camera={{ position: [0, 0, 120], fov: 60 }}>
                <fog attach="fog" args={["#000000", 0.015]} />

                <ParticleSwarm />

                <OrbitControls autoRotate autoRotateSpeed={1.5} enableZoom={false} />

                <Effects disableGamma>
                    <unrealBloomPass threshold={0.2} strength={1.2} radius={0.3} />
                </Effects>
            </Canvas>
        </div>
    );
}