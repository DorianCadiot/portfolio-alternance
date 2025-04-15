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
  const radius = 8; // Taille de la sphère

  // 1. Protection données
  if (!skills?.length) return null;

  // 2. Calcul des positions sphériques
  const wordPositions = skills.map((skill, i) => {
    // Algorithme Fibonacci Sphere (meilleure répartition)
    const phi = Math.acos(-1 + (2 * i) / skills.length);
    const theta = Math.sqrt(skills.length * Math.PI) * phi;
    
    return {
      position: new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      ),
      skill
    };
  });

  // 3. Rendu 3D
  return (
    <Canvas camera={{ position: [0, 0, 12], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      <group rotation={[0, 0, 0]}>
        {wordPositions.map(({skill, position}, i) => (
          <Text
            key={`skill-${i}`}
            position={position}
            fontSize={0.4}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            font="/fonts/YourFont.ttf" // Optionnel
          >
            {skill}
          </Text>
        ))}
      </group>

      <OrbitControls enableZoom={true} autoRotate={true} autoRotateSpeed={1} />
    </Canvas>
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
