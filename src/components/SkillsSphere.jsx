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


const WordSphere = () => {
  const radius = 4;
  const groupRef = useRef();
  
  const textRefs = useRef([]);

  useFrame(({ camera }) => {
  textRefs.current.forEach(text => {
    if (text) {
      text.quaternion.copy(camera.quaternion);  // Aligne chaque texte avec la caméra
    }
  });
});

  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => {
        // Formule corrigée pour une vraie sphère
        //const u = Math.random(); // Aléatoire pour éviter les alignements
        //const theta = 2 * Math.PI * (i / skills.length);
        //const phi = Math.acos(2 * u - 1);
        
        //const x = radius * Math.sin(phi) * Math.cos(theta);
        //const y = radius * Math.sin(phi) * Math.sin(theta);
        //const z = radius * Math.cos(phi);

      // Fonction de répartition optimale
      const getSpherePosition = (index, total) => {
        const goldenRatio = (1 + Math.sqrt(5)) / 2;
        const theta = 2 * Math.PI * index / goldenRatio;
        const phi = Math.acos(1 - 2 * (index + 0.5) / total);
    
        return [
          radius * Math.cos(theta) * Math.sin(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(phi)
        ];
      };

        return (
    <group ref={groupRef}>
      {skills.map((skill, i) => {
        const position = getSpherePosition(i, skills.length);

        return (
          <Text
            key={`${skill}-${i}`}
            ref={el => textRefs.current[i] = el}
            position={position}
            fontSize={0.35} // Taille réduite
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            {skill}
          </Text>
        );
      })}
    </group>
  );
};

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
