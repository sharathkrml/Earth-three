import { Canvas } from "@react-three/fiber";
import { Text3D } from "@react-three/drei";
import { Suspense } from "react";
import Earth from "../components/Earth";
export default function Home() {
  return (
    <div>
      <Canvas
        gl={{ antialias: false, powerPreference: "high-performance" }}
        style={{ height: "100vh!important" }}
      >
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </div>
  );
}
