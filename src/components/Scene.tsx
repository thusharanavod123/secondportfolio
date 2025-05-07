
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';

// Floating service nodes with text labels
const ServiceNode = ({ position = [0, 0, 0], scale = 1, color = '#0ea5e9', icon, rotationSpeed = 0.002 }) => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.y += rotationSpeed;
      mesh.current.position.y = position[1] + Math.sin(clock.getElapsedTime()) * 0.3;
    }
  });

  return (
    <group position={position as [number, number, number]}>
      <mesh ref={mesh} scale={scale} castShadow>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color={color}
          metalness={0.6}
          roughness={0.3}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>
      <group position={[0, -1.4, 0]}>
        <Text 
          text={icon} 
          color="#FFFFFF"
          fontSize={0.4}
          maxWidth={2}
          textAlign="center"
        />
      </group>
    </group>
  );
};

// Text rendering component
const Text = ({ text, color = '#FFFFFF', fontSize = 0.5, position = [0, 0, 0], maxWidth = 2, textAlign = 'left' }) => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useEffect(() => {
    if (mesh.current) {
      mesh.current.lookAt(0, 0, 20); // Always face camera
    }
  }, []);
  
  return (
    <sprite position={position as [number, number, number]} scale={[maxWidth, maxWidth / 4, 1]}>
      <spriteMaterial transparent opacity={0.95}>
        <canvasTexture attach="map" args={[createTextCanvas(text, color, fontSize, maxWidth, textAlign)]} />
      </spriteMaterial>
    </sprite>
  );
};

// Create canvas with text
const createTextCanvas = (text, color, fontSize, width, textAlign) => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const scale = 100;
  
  canvas.width = width * scale;
  canvas.height = (width / 4) * scale;
  
  if (context) {
    context.fillStyle = 'rgba(0,0,0,0)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    context.font = `bold ${fontSize * 100}px Arial`;
    context.fillStyle = color;
    context.textAlign = textAlign;
    context.textBaseline = 'middle';
    context.fillText(text, textAlign === 'center' ? canvas.width / 2 : 10, canvas.height / 2);
  }
  
  return canvas;
};

// Glowing flow ring
const FlowRing = ({ radius = 5, color = '#22d3ee' }) => {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.3;
      mesh.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={mesh}>
      <torusGeometry args={[radius, 0.15, 16, 100]} />
      <meshBasicMaterial 
        color={color}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
};

// Data streaming beams
const DataBeam = ({ position = [0, 0, 0], color = '#818cf8' }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current && meshRef.current.material) {
      meshRef.current.rotation.z += 0.002;
      const mat = meshRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = (Math.sin(clock.getElapsedTime() * 2) + 1) * 0.25;
    }
  });

  return (
    <mesh ref={meshRef} position={position as [number, number, number]} rotation={[0, 0, Math.PI / 4]}>
      <planeGeometry args={[30, 1.5]} />
      <meshBasicMaterial 
        color={color}
        transparent
        opacity={0.4}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

// Full scene setup
const DevOpsScene = () => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 0, 20);
  }, [camera]);

  const services = [
    { position: [-6, 3, -4], scale: 1.2, color: '#22d3ee', icon: 'Docker' },
    { position: [6, 4, -4], scale: 1.3, color: '#0ea5e9', icon: 'Kubernetes' },
    { position: [-4, -5, -3], scale: 1.1, color: '#3b82f6', icon: 'AWS' },
    { position: [5, -3, -5], scale: 1.1, color: '#818cf8', icon: 'CI/CD' },
    { position: [0, 6, -5], scale: 1.2, color: '#4f46e5', icon: 'Monitoring' },
    { position: [0, 0, 0], scale: 1.4, color: '#facc15', icon: 'App Core' },
  ];

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={60} />
      <OrbitControls enableZoom={true} enablePan={false} autoRotate autoRotateSpeed={1.0} />

      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.6} color="#4f46e5" />

      {/* Background */}
      <color attach="background" args={['#020617']} />

      {/* Nodes */}
      {services.map((s, i) => (
        <ServiceNode key={i} {...s} />
      ))}

      {/* Rings */}
      <FlowRing radius={10} color="#22d3ee" />
      <FlowRing radius={14} color="#818cf8" />

      {/* Beams */}
      <DataBeam position={[0, -5, -12]} color="#4f46e5" />
      <DataBeam position={[0, 6, -12]} color="#0ea5e9" />
    </>
  );
};

export const Scene = () => {
  return (
    <div className="scene-container fixed top-0 left-0 w-full h-screen">
      <Canvas shadows>
        <DevOpsScene />
      </Canvas>
    </div>
  );
};

export default Scene;
