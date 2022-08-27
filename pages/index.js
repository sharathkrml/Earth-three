import { Canvas } from "@react-three/fiber";
import { Text3D } from "@react-three/drei";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Canvas
        gl={{ antialias: false, powerPreference: "high-performance" }}
        style={{ height: "100vh!important", width: "100vw!important" }}
      >
        <Suspense fallback={null}>
          <Text3D font={"./opensans.json"} position={[-5, 0, 0]}>
            @sharathkrml
            <meshNormalMaterial />
          </Text3D>
        </Suspense>
      </Canvas>
    </div>
  );
}
