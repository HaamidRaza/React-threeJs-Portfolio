import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import Crane from "../components/Crane";
import { PerspectiveCamera } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import DustParticles from "../components/DustParticles";
import CanvasLoader from "../components/CanvasLoader";

const Experiences = () => {
  const isSmall = useMediaQuery({maxWidth: 440 })
  const isMobile = useMediaQuery({ maxWidth: 760 });
  return (
    <section className="c-space my-20" id="#work">
      <div className="w-full text-white-600">
        <h3 className="head-text">Work Experience</h3>
        <div className="relative w-full h-screen">
          <div className="absolute top-0 left-0 w-full h-full z-30 pointer-events-none">
            <Canvas>
            <Suspense fallback={<CanvasLoader/>}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.2} penumbra={0.5} intensity={1}/>
              <PerspectiveCamera makeDefault position={[0, 0, 50]} />
              <DustParticles count={120}/>
              <Crane
                position={isSmall? [-10.4,-24,0] : isMobile ? [-13.5, -25.7, 0] : [-27, -37, 0]}
                scale={isMobile ? 0.7 : 1}
                
              />
            </Suspense>
            </Canvas>
          </div>

          <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-8 text-center ">
            <img
              src="/assets/brick-wall.png"
              alt="brick wall"
              className="absolute inset-0 w-full h-full object-cover opacity-40  xs:opacity-20"
            />
            <div className="text-center text-gray-100 px-6">
              <p
                className="text-lg sm:text-xl font-medium"
                style={{ fontFamily: "'Russo One', sans-serif" }}
              >
                This section's still{" "}
                <span className="text-[#E97451]">UNDER CONSTRUCTION...</span>
                <br className="hidden sm:block" />
                but you could help build it!
              </p>
              <p className="mt-2 text-sm sm:text-base text-gray-300">
                I’m open to internships, freelance work, or jobs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
