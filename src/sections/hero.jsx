import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Ring";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";
import { Link } from "react-scroll";

const Hero = () => {
  //allows for responsive screens --|
  const isRealMobile = useMediaQuery({maxWidth: 360 })
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 760 });
  const isTablet = useMediaQuery({ minWidth: 760, maxWidth: 1024 });

  const sizes = calculateSizes(isRealMobile, isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex-col relative" id="#home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-mono">
          Welcome, I am Haamid
          <span className="waving-hand">🤓</span>
        </p>
        <p className="hero_tag text-gray_gradient ">IN INITIAL STAGES OF DEV</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        {/* Canvas for Hero Section */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            {/* TO move the main element according to the pointer */}
            <HeroCamera isMobile={isMobile}>
              {/* Main Element of hero section */}
              <HackerRoom
                position={sizes.deskPosition}
                rotation={[0.3, 3.6, 0.1]}
                scale={sizes.deskScale}
              />
            </HeroCamera>
            <group>
              {/* A bunch of random elem around the main */}
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} scale={1.8} />
            </group>
            <ambientLight intensity={0.5} />
            <directionalLight position={[-10, 10, 10]} intensity={1} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0  w-full z-10 c-space">
        <Link to="#contact" smooth={true} duration={500} className="w-fit">
          <Button
            name="Let's Work Together"
            isBeam
            containerClasss="sm:w-fit w-full sm:min-w-96"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
