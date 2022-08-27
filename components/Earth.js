import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
const Earth = () => {
  let earthRef = useRef();
  const [earthMap, bump, specular] = useTexture([
    "earth.jpg",
    "bumb.jpg",
    "specular.jpg",
  ]);
  useFrame((state) => {
    earthRef.current.rotation.y += 0.005;
  });
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <directionalLight args={[0xffeedd]} position={[0, 0, 20]} />
      <OrbitControls />
      {/* <ambientLight args={[0xffffff]} /> */}
      <mesh ref={earthRef}>
        <sphereBufferGeometry args={[1, 30, 30]} />
        <meshPhongMaterial
          map={earthMap}
          bumpMap={bump}
          bumpScale={0.05}
          specularMap={specular}
          specular={new THREE.Color("grey")}
        />
      </mesh>
    </>
  );
};

export default Earth;
