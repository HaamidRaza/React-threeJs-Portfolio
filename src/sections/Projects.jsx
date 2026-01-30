import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Suspense, useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/DemoComputer";
import { myProjects } from "../constants";

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = useCallback((direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      `.animatedText`,
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2, ease: "power2.inOut" }
    );
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section className="c-space mt-5 mb-[7rem] md:mb-[6rem]" id="projects">
      <p className="head-text">My Big Work..</p>
      
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        {/* Project Details Card */}
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          {/* Spotlight Background */}
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          {/* Project Logo */}
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg relative z-10"
            style={currentProject.logoStyle}
          >
            <img
              className="w-10 h-10 shadow-sm"
              src={currentProject.logo}
              alt={`${currentProject.title} logo`}
            />
          </div>

          {/* Project Info */}
          <div className="flex flex-col gap-5 text-white-600 my-5 relative z-10">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>

            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          {/* Tech Stack & Live Link */}
          <div className="flex items-center justify-between flex-wrap gap-5 relative z-10">
            <div className="flex items-center gap-3 flex-wrap">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo" title={tag.name}>
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

      <a      
              className="flex items-center gap-2 cursor-pointer text-white-600 hover:text-white transition-colors"
              href={currentProject.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${currentProject.title} live site`}
            >
              <p>Check Live Site</p>
              <img 
                src="/assets/arrow-up.png" 
                alt="" 
                className="w-3 h-3"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-7 relative z-10">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
              aria-label="Previous project"
            >
              <img src="/assets/left-arrow.png" alt="" aria-hidden="true" />
            </button>

            {/* Project Counter */}
            <p className="text-white-600 text-sm font-medium">
              {selectedProjectIndex + 1} / {projectCount}
            </p>

            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
              aria-label="Next project"
            >
              <img
                src="/assets/right-arrow.png"
                alt=""
                className="w-4 h-4"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        {/* 3D Model Display */}
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas
            className="w-full h-full"
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: "high-performance",
            }}
            dpr={[1, 2]}
          >
            <ambientLight intensity={Math.PI / 2} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={4.5} position={[2.2, -1, 3]} rotation={[0, 0, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls 
              maxPolarAngle={Math.PI / 2} 
              enableZoom={false}
              enablePan={false}
              autoRotate={false}
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;