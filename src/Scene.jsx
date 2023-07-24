import React, { useRef } from 'react';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import { useFrame } from '@react-three/fiber'; // Import the useFrame hook

export default function Model(props) {
  const modelRef = useRef();
  const papers = useGLTF('/scene.gltf');

  // Define the rotation update function
  useFrame(() => {
    if (modelRef.current) {
      // Adjust the rotation speed as needed
      modelRef.current.rotation.x+=0.010;
      modelRef.current.rotation.y += 0.010; 
  
    }
  });

  return (
    <>
      <OrbitControls />
      <primitive object={papers.scene} scale={[2, 2, 2]} ref={modelRef}/>
      <Environment preset={'city'} />
    </>
  );
}
