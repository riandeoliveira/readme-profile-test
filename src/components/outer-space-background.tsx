import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import type { ReactElement, ReactNode } from "react";

interface OuterSpaceBackgroundProps {
  children: ReactNode;
}

export const OuterSpaceBackground = ({ children }: OuterSpaceBackgroundProps): ReactElement => {
  return (
    <>
      <div style={{ backgroundColor: "black", inset: 0, position: "fixed", zIndex: -50 }}>
        <Canvas>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minDistance={300}
            maxDistance={300}
            enableRotate={false}
            autoRotateSpeed={0.25}
            autoRotate={true}
            minPolarAngle={Math.PI / 3.5}
            maxPolarAngle={Math.PI - Math.PI / 3}
          />
          <Stars radius={100} depth={100} count={10000} factor={5} saturation={0} fade speed={1} />
        </Canvas>
      </div>
      {children}
    </>
  );
};