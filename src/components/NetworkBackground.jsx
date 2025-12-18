import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleNetwork = ({ count = 100, connectionDistance = 2 }) => {
    const mesh = useRef();
    const linesGeometry = useRef();

    // Create particles
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 25;
            const y = (Math.random() - 0.5) * 25;
            const z = (Math.random() - 0.5) * 10;
            temp.push({
                position: new THREE.Vector3(x, y, z),
                velocity: new THREE.Vector3(
                    (Math.random() - 0.5) * 0.02,
                    (Math.random() - 0.5) * 0.02,
                    (Math.random() - 0.5) * 0.02
                )
            });
        }
        return temp;
    }, [count]);

    const dummy = useMemo(() => new THREE.Object3D(), []);
    const pointsGeometry = useMemo(() => new THREE.SphereGeometry(0.05, 8, 8), []);
    const pointsMaterial = useMemo(() => new THREE.MeshBasicMaterial({ color: '#64ffda', transparent: true, opacity: 0.8 }), []);

    useFrame((state) => {
        if (!mesh.current || !linesGeometry.current) return;

        const positions = [];

        // Update particle positions
        particles.forEach((particle, i) => {
            particle.position.add(particle.velocity);

            // Bounce off boundaries (rough box)
            if (Math.abs(particle.position.x) > 12) particle.velocity.x *= -1;
            if (Math.abs(particle.position.y) > 12) particle.velocity.y *= -1;
            // if (Math.abs(particle.position.z) > 5) particle.velocity.z *= -1;

            // Update instanced mesh
            dummy.position.copy(particle.position);
            dummy.updateMatrix();
            mesh.current.setMatrixAt(i, dummy.matrix);
        });

        mesh.current.instanceMatrix.needsUpdate = true;

        // Calculate connections
        // Note: O(n^2) loop, keep count low (< 150)

        // Slight optimization: only check connections for a subset or use spatial partitioning if needed
        // For < 100 particles, brute force is fine on modern devices.

        for (let i = 0; i < count; i++) {
            for (let j = i + 1; j < count; j++) {
                const dist = particles[i].position.distanceTo(particles[j].position);
                if (dist < connectionDistance) {
                    positions.push(
                        particles[i].position.x, particles[i].position.y, particles[i].position.z,
                        particles[j].position.x, particles[j].position.y, particles[j].position.z
                    );
                }
            }
        }

        linesGeometry.current.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(positions, 3)
        );
    });

    return (
        <>
            <instancedMesh ref={mesh} args={[pointsGeometry, pointsMaterial, count]} />
            <lineSegments>
                <bufferGeometry ref={linesGeometry} />
                <lineBasicMaterial color="#64ffda" transparent opacity={0.15} />
            </lineSegments>
        </>
    );
};

const NetworkBackground = () => {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            opacity: 0.6
        }}>
            <Canvas
                camera={{ position: [0, 0, 15], fov: 60 }}
                style={{ background: 'transparent', height: '100%', width: '100%' }}
                dpr={[1, 2]} // Optimize for high DPI screens
                gl={{ antialias: true, alpha: true }}
            >
                <ParticleNetwork count={80} connectionDistance={3.5} />
            </Canvas>
        </div>
    );
};

export default NetworkBackground;
