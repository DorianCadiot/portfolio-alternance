import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import * as THREE from "three";
import PropTypes from "prop-types";
import { skills } from "../constants/data";
import Loader from "./Loader";


const AnimatedText = animated(Text); // Make Text component animatable

const Word = ({ children, position }) => {
  const [hovered, setHovered] = useState(false);
  const textRef = useRef();

  useFrame(({ camera }) => {
    if (textRef.current) {
      textRef.current.quaternion.copy(camera.quaternion);
    }
  });

  const { color, scale } = useSpring({
    color: hovered ? "#fc0865" : "white",
    scale: hovered ? 1.1 : 1, // Slight scaling effect on hover
    config: { tension: 200, friction: 20 }, // Smooth transition settings
  });

  return (
    <AnimatedText
      ref={textRef}
      position={position}
      fontSize={0.5}
      color={color}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {children}
    </AnimatedText>
  );
};

Word.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.object.isRequired,
};

import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticlesSphere = ({ skills }) => {
  const particlesRef = useRef();
  const radius = 5;
  
  // Création de la géométrie des particules
  useEffect(() => {
    if (!skills?.length) return;

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(skills.length * 3);
    const sizes = new Float32Array(skills.length);

    // Répartition aléatoire mais sphérique
    for (let i = 0; i < skills.length; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      sizes[i] = 0.5;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    particlesRef.current.geometry = geometry;
  }, [skills]);

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <pointsMaterial 
        color="white" 
        size={0.15} 
        sizeAttenuation={true}
        transparent
        alphaTest={0.01}
      />
    </points>
  );
};

const SkillsScene = () => (
  <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
    <ambientLight intensity={0.5} />
    <ParticlesSphere skills={skills} />
  </Canvas>
);
const SkillsSphere = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = size < 768; // Adjust sphere size for mobile screens
  return (
    <Canvas
      camera={{
        position: [0, 0, isMobile ? 14 : 12], // Move camera back on smaller screens
        fov: isMobile ? 70 : 60, // Increase FOV for a wider view on mobile
      }}
      style={{ width: "100%", height: isMobile ? "50vh" : "80vh" }} // Reduce height on mobile
    >
      <Suspense fallback={<Loader />}>
        <ambientLight intensity={0.5} />
        <WordSphere />
        <OrbitControls enablePan={false} enableZoom={false} />
      </Suspense>
    </Canvas>
  );
};

export default SkillsSphere;
