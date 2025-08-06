import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const HandleCopy = () => {
    navigator.clipboard.writeText("achatheekhai9@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="#about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* First Grid Item */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/mountains.png"
              alt="img"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">HI, I am Haamid</p>
              <p className="grid-subtext">
                I've just begun my journey to become a web developer. I'm
                excited to learn new things along the way and strive to become
                the best at what I do.
              </p>
            </div>
          </div>
        </div>

        {/* Second Grid Item */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/coder.svg"
              alt="grid3"
              className="w-full sm:w-[350px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Coding &#128511;</p>
              <p className="grid-subtext">
                I love the feeling when the code works and enjoy solving unique
                challenges that come up during a project. This is my passion!
                &#128513;
              </p>
            </div>
          </div>
        </div>

        {/* Third Grid Item - Globe */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 18,
                    lng: 73,
                    text: "Hey! It's me",
                    color: "white",
                    size: 100,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely across most timezones.
              </p>
              <p className="grid-subtext">
                I'm based in INDIA, with available for remote work.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        {/* Fourth Grid Item */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container flex flex-col items-center justify-center">
            <img
              src="/assets/developer.png"
              alt="grid2"
              className="w-full sm:w-[400px] h-fit object-contain"
            />
            <div className="text-left">
              <p className="grid-headtext">Web Dev</p>
              <p className="grid-subtext">
                I specialize in JavaScript with a focus on building dynamic,
                responsive UIs using React. <br />
                I'm currently diving deeper into Node.js to strengthen my
                backend development skills. <br />
                I love challeging myself and solving the challenges that come
                along the way. <br />
                Every project is an opportunity to grow, improve, and create
                something impactful.
              </p>
            </div>
          </div>
        </div>
        
        {/* Fifth Grid */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="spcae-y-2">
              <p className="grid-subtext text-center">Contact me..</p>
              <div className="copy-container" onClick={HandleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  achatheekhai9@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
