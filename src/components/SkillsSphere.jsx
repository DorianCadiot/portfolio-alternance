import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import * as THREE from "three";
import PropTypes from "prop-types";
import { skills } from "../constants/data";
import Loader from "./Loader";

console.log("Skills chargées:", skills); // Vérifiez la console

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
  const radius = 5;
  
  // Protection renforcée
  if (!skills || typeof skills !== 'object' || !Array.isArray(skills)) {
    console.error("Skills doit être un tableau. Reçu:", typeof skills, skills);
    return null;
  }

  // Conversion forcée au cas où
  const safeSkills = Array.isArray(skills) ? skills : Object.values(skills);
  
  const wordPositions = safeSkills.map((skill, i) => {
    const phi = Math.acos(-1 + (2 * i) / safeSkills.length);
    const theta = Math.sqrt(safeSkills.length * Math.PI) * phi;
    
    return {
      position: new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      ),
      skill: String(skill) // Force la conversion en string
    };
  });

  return (
    <group>
      {wordPositions.map(({ skill, position }, index) => (
        <Word key={`${index}-${skill}`} position={position}>
          {skill}
        </Word>
      ))}
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
