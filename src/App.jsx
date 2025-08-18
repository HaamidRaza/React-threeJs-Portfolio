import React, { Suspense, lazy } from "react";
import Navbar from "./sections/navbar";
import Footer from "./sections/Footer";

// Lazy load heavy sections
const Hero = lazy(() => import("./sections/hero"));
const About = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const Clients = lazy(() => import("./sections/Clients"));
const Experiences = lazy(() => import("./sections/Experiences"));
const Contact = lazy(() => import("./sections/Contact"));

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />

      {/* Wrapping each lazy section in Suspense */}
      <Suspense fallback={<div className="text-center text-white py-10">Loading Hero...</div>}>
        <Hero />
      </Suspense>

      <Suspense fallback={<div className="text-center text-white py-10">Loading About...</div>}>
        <About />
      </Suspense>

      <Suspense fallback={<div className="text-center text-white py-10">Loading Projects...</div>}>
        <Projects />
      </Suspense>

      <Suspense fallback={<div className="text-center text-white py-10">Loading Clients...</div>}>
        <Clients />
      </Suspense>

      <Suspense fallback={<div className="text-center text-white py-10">Loading Experiences...</div>}>
        <Experiences />
      </Suspense>

      <Suspense fallback={<div className="text-center text-white py-10">Loading Contact...</div>}>
        <Contact />
      </Suspense>

      <Footer />
    </main>
  );
};

export default App;
