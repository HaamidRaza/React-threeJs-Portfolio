import { Canvas } from "@react-three/fiber";
import React, { Suspense, lazy, useEffect, useState } from "react";
import { PerspectiveCamera, Preload } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import CanvasLoader from "../components/CanvasLoader";

// Lazy load heavy 3D components
const Crane = lazy(() => import("../components/Crane"));
const DustParticles = lazy(() => import("../components/DustParticles"));

const Experiences = () => {
  const isRealMobile = useMediaQuery({ maxWidth: 360 });
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 760 });

  // Delay 3D scene for smoother first paint
  const [showScene, setShowScene] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowScene(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Calculate responsive positions
  const cranePosition = isRealMobile
    ? [-14, -42, -30]
    : isSmall
      ? [-10.4, -24, 0]
      : isMobile
        ? [-13.5, -25.7, 0]
        : [-27, -37, 0];

  const craneScale = isRealMobile ? 1.2 : isMobile ? 0.7 : 1;

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <h3 className="head-text">Work Experience</h3>

        <div className="relative w-full h-screen">
          {/* Background Wall Texture */}
          <img
            src="/assets/brick-wall.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-40 xs:opacity-20"
            aria-hidden="true"
          />

          {/* 3D Scene Layer */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            {showScene && (
              <Canvas
                className="w-full h-full"
                gl={{
                  antialias: true,
                  alpha: true,
                  powerPreference: "high-performance",
                }}
                dpr={[1, 2]}
              >
                <Suspense fallback={<CanvasLoader />}>
                  {/* Lighting */}
                  <ambientLight intensity={0.5} />
                  <spotLight
                    position={[10, 10, 10]}
                    angle={0.2}
                    penumbra={0.5}
                    intensity={1}
                    castShadow
                  />
                  <directionalLight position={[-5, 5, 5]} intensity={0.3} />

                  <PerspectiveCamera makeDefault position={[0, 0, 50]} />

                  {/* Floating particles */}
                  <DustParticles count={isMobile ? 50 : 100} />

                  {/* Crane */}
                  <Crane
                    position={cranePosition}
                    scale={craneScale}
                    rotation={[0, 0, 0]}
                  />

                  <Preload all />
                </Suspense>
              </Canvas>
            )}
          </div>

          {/* Text Content Overlay */}
          <div className="relative flex items-center justify-center min-h-screen px-4 sm:px-8">
            <div className="text-center text-gray-100 px-6 max-w-3xl">
              <p
                className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed"
                style={{ fontFamily: "'Russo One', sans-serif" }}
              >
                This section's still{" "}
                <span className="text-[#E97451] font-bold">
                  UNDER CONSTRUCTION
                </span>
                ...
                <br className="hidden sm:block" />
                but you could help build it!
              </p>
              <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300">
                I'm currently open to internships, freelance work, or full-time
                opportunities.
              </p>

              {/* Optional CTA Button */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="px-6 py-3 z-30 bg-[#bb5e41] hover:bg-[#d66642] cursor-pointer text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Get in Touch
                </a>
                <a
                  href="/HaamidRaza-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-transparent z-30 border-2 border-white-800 hover:bg-white hover:text-black text-white font-semibold rounded-lg transition-all duration-300"
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
