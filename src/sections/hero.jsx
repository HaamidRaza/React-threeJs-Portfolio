import { Suspense, lazy, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Preload } from "@react-three/drei";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import CanvasLoader from "../components/CanvasLoader";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";
import { calculateSizes } from "../constants";
// Lazy load heavy 3D components
const DustParticles = lazy(() => import("../components/SpaceParticles"));
const HackerRoom = lazy(() => import("../components/HackerRoom"));
const Target = lazy(() => import("../components/Target"));
const ReactLogo = lazy(() => import("../components/ReactLogo"));
const Cube = lazy(() => import("../components/Cube"));
const Rings = lazy(() => import("../components/Ring"));

const Hero = () => {
  const isRealMobile = useMediaQuery({ maxWidth: 360 });
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 760 });
  const isTablet = useMediaQuery({ minWidth: 760, maxWidth: 1024 });

  const sizes = calculateSizes(isRealMobile, isSmall, isMobile, isTablet);

  const [showExtras, setShowExtras] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowExtras(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col relative mt-10" id="home">
      {/* Hero Text Content */}
      <div className="w-full mx-auto flex flex-col mt-36 md:mt-20 c-space gap-3 relative">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-mono">
          Welcome, I am Haamid
          <span className="waving-hand" role="img" aria-label="nerd face">
            🤓
          </span>
        </p>
        <p className="hero_tag text-gray_gradient">IN INITIAL STAGES OF DEV</p>
      </div>

      {/* 3D Canvas Background */}
      <div className="w-full h-full absolute inset-0">
        <Canvas
          className="w-full h-full"
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          dpr={[1, 2]} // Limit pixel ratio for performance
        >
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
           <DustParticles count={isMobile ? 10 : 50} />
            <HeroCamera isMobile={isMobile}>
              {/* Main model - loads first */}
              <HackerRoom
                position={sizes.deskPosition}
                rotation={[0.3, 3.6, 0.1]}
                scale={sizes.deskScale}
              />
            </HeroCamera>

            {/* Extra floating elements - delayed load for performance */}
            {showExtras && (
              <group>
                <Suspense fallback={null}>
                  <Target position={sizes.targetPosition} />
                  <ReactLogo position={sizes.reactLogoPosition} />
                  <Cube position={sizes.cubePosition} />
                  <Rings position={sizes.ringPosition} scale={1.8} />
                </Suspense>
              </group>
            )}

            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[-10, 10, 10]} intensity={1} />

            <Preload all />
          </Suspense>
        </Canvas>
      </div>

      {/* CTA Button */}
      <div className="absolute bottom-7 left-0 right-0 w-full z-20 c-space">
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-80}
          className="w-fit block mx-auto"
        >
          <Button
            name="Let's Work Together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;