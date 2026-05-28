'use client';

import { useRef, useMemo, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

const LEAF_COLORS = ['#4a7c59', '#3a6347', '#5a9e6f', '#2e5c3e', '#6ab87f', '#c8a87a'];

function makeLeafGeometry(): THREE.ExtrudeGeometry {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.bezierCurveTo(0.4, 0.15, 0.6, 0.7, 0, 1.4);
  shape.bezierCurveTo(-0.6, 0.7, -0.4, 0.15, 0, 0);

  return new THREE.ExtrudeGeometry(shape, {
    depth: 0.03,
    bevelEnabled: true,
    bevelThickness: 0.015,
    bevelSize: 0.015,
    bevelSegments: 3,
  });
}

interface LeafProps {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  speed: number;
  phase: number;
  color: string;
  swayAmount: number;
}

function Leaf({ position, rotation, scale, speed, phase, color, swayAmount }: LeafProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const geometry = useMemo(makeLeafGeometry, []);
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color,
        side: THREE.DoubleSide,
        roughness: 0.6,
        metalness: 0.05,
      }),
    [color]
  );

  useFrame(({ clock }) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const t = clock.getElapsedTime();
    mesh.position.y = position[1] + Math.sin(t * speed + phase) * swayAmount;
    mesh.position.x = position[0] + Math.cos(t * speed * 0.6 + phase) * swayAmount * 0.4;
    mesh.rotation.z = rotation[2] + Math.sin(t * speed * 0.8 + phase) * 0.15;
    mesh.rotation.x = rotation[0] + Math.sin(t * speed * 0.5 + phase + 1) * 0.08;
  });

  return <mesh ref={meshRef} position={position} rotation={rotation} scale={scale} geometry={geometry} material={material} />;
}

function LogoMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const texture = useTexture('/logo.jpeg');

  const circleGeo = useMemo(() => new THREE.CircleGeometry(1.5, 64), []);
  const glowGeo = useMemo(() => new THREE.CircleGeometry(1.65, 64), []);

  const logoMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        map: texture,
        side: THREE.FrontSide,
        roughness: 0.3,
        metalness: 0.1,
      }),
    [texture]
  );

  const glowMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: '#c8e8d4',
        transparent: true,
        opacity: 0.35,
        side: THREE.FrontSide,
      }),
    []
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(t * 0.4) * 0.22;
      meshRef.current.position.x = Math.cos(t * 0.25) * 0.12;
      meshRef.current.rotation.z = Math.sin(t * 0.3) * 0.06;
    }
    if (glowRef.current) {
      glowRef.current.position.y = Math.sin(t * 0.4) * 0.22;
      glowRef.current.position.x = Math.cos(t * 0.25) * 0.12;
      glowRef.current.rotation.z = Math.sin(t * 0.3) * 0.06;
      // pulse glow opacity
      (glowRef.current.material as THREE.MeshBasicMaterial).opacity =
        0.25 + Math.sin(t * 0.8) * 0.12;
    }
  });

  return (
    <>
      {/* soft glow ring behind the logo */}
      <mesh ref={glowRef} position={[0, 0, 1.9]} geometry={glowGeo} material={glowMat} />
      <mesh ref={meshRef} position={[0, 0, 2]} geometry={circleGeo} material={logoMat} />
    </>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      targetRotation.current.x = ((e.clientY / window.innerHeight) * 2 - 1) * -0.35;
      targetRotation.current.y = ((e.clientX / window.innerWidth) * 2 - 1) * 0.45;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const leaves = useMemo<LeafProps[]>(() => {
    const rng = (min: number, max: number) => min + Math.random() * (max - min);
    return Array.from({ length: 18 }, (_, i) => ({
      position: [rng(-5, 5), rng(-4, 4), rng(-3, 1)] as [number, number, number],
      rotation: [rng(0, Math.PI * 2), rng(0, Math.PI * 2), rng(0, Math.PI * 2)] as [number, number, number],
      scale: rng(0.25, 0.65),
      speed: rng(0.25, 0.6),
      phase: (i / 18) * Math.PI * 2,
      color: LEAF_COLORS[i % LEAF_COLORS.length],
      swayAmount: rng(0.15, 0.4),
    }));
  }, []);

  useFrame(() => {
    const g = groupRef.current;
    if (!g) return;
    g.rotation.x += (targetRotation.current.x - g.rotation.x) * 0.06;
    g.rotation.y += (targetRotation.current.y - g.rotation.y) * 0.06;
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 8, 5]} intensity={2.5} color="#ffffff" />
      <directionalLight position={[-4, -4, -4]} intensity={0.6} color="#c8e8d4" />
      <pointLight position={[0, 0, 6]} intensity={0.8} color="#eef5ec" />
      <pointLight position={[0, 0, 5]} intensity={1.2} color="#d4edda" />
      <Suspense fallback={null}>
        <LogoMesh />
      </Suspense>
      {leaves.map((props, i) => (
        <Leaf key={i} {...props} />
      ))}
    </group>
  );
}

export default function FloatingLeaves() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
    >
      <Scene />
    </Canvas>
  );
}
