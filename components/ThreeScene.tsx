'use client';

import { Canvas, useFrame, RootState } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Scene() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state: RootState) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#bc1823" />

            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                <Sphere ref={meshRef} args={[1, 100, 100]} scale={1.5}>
                    <MeshDistortMaterial
                        color="#bc1823"
                        distort={0.4}
                        speed={2}
                        roughness={0.2}
                        metalness={0.8}
                    />
                </Sphere>
            </Float>
        </>
    );
}

export default function ThreeScene() {
    return (
        <div style={{ height: '500px', width: '100%', position: 'absolute', top: '0', left: '0', zIndex: -1 }}>
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <Scene />
            </Canvas>
        </div>
    );
}
