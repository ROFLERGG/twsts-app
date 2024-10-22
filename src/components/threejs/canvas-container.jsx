'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { CameraControls, CameraShake, MeshWobbleMaterial, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { div } from 'three/webgpu';

const cubes = [
  {
    name: 'Right bottom cube',
    position: [1, -1, 0],
    color: 'green',
    size: [1, 1, 1],
  },
  {
    name: 'Left bottom cube',
    position: [-1, -1, 0],
    color: 'yellow',
    size: [1, 1, 1],
  },
  {
    name: 'Right top cube',
    position: [1, 1, 0],
    color: 'orange',
    size: [1, 1, 1],
  },
  {
    name: 'Left top cube',
    position: [-1, 1, 0],
    color: 'pink',
    size: [1, 1, 1],
  },
];

const Cube = ({ position, size, color }) => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 5.0;
    ref.current.position.z = Math.sin(state.clock.elapsedTime);
  });

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Sphere = ({ position, size, color }) => {
  const ref = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [isSpeedUp, setIsSpeedUp] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const clickHandle = () => {
    setIsClicked(!isClicked);
  };

  const speed = isHovered ? 2 : 1;

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * speed;
  });
  return (
    <mesh position={position} ref={ref} onClick={clickHandle} scale={isClicked ? 1.5 : 1} onPointerEnter={(e) => (e.stopPropagation(), setIsHovered(true), setIsSpeedUp(true))} onPointerLeave={() => (setIsHovered(false), setIsSpeedUp(false))}>
      <sphereGeometry args={size} />
      <meshStandardMaterial color={isHovered ? 'orange' : color} wireframe />
    </mesh>
  );
};

const Torus = ({ position, size, color }) => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 5.0;
    ref.current.position.z = Math.sin(state.clock.elapsedTime);
  });
  return (
    <mesh position={position} ref={ref}>
      <torusGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const TorusKnot = ({ position, size, color }) => {
  const ref = useRef();

  // useFrame((state, delta) => {
  //   ref.current.rotation.x += delta;
  //   ref.current.rotation.y += delta * 5.0;
  //   ref.current.position.z = Math.sin(state.clock.elapsedTime);
  // });
  return (
    <mesh position={position} ref={ref}>
      <torusKnotGeometry args={size} />
      <MeshWobbleMaterial color={color} />
    </mesh>
  );
};

const CanvasContainer = () => {
  return (
    <Canvas style={{ height: '600px' }}>
      <ambientLight intensity={0.2} />
      <directionalLight color="yellow" position={[5, 5, 0]} />

      {/* <Cube position={[-1, 1, 0]} size={[1, 1, 1]} color={'orange'} /> */}
      {/* <Sphere position={[0, 0, 0]} size={[1.5, 20, 20]} color={'red'} /> */}
      {/* <Torus position={[1, -1, 0]} size={[0.8, 0.1, 30, 30]} color={'blue'} /> */}
      <TorusKnot position={[0, 0, 0]} size={[1, 0.3, 1000, 50]} color={'hotpink'} />
      <OrbitControls />
    </Canvas>
  );
};

export default CanvasContainer;
