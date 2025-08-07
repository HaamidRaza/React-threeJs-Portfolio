const Projects = () => {
  return (
    <section className="c-space mt-5 mb-[7rem] md:mb-[6rem]">
      <p className="head-text">My Big Work..</p>

      <div className="mt-12 gap-4 w-full">
        <div className="relative h-[150px] animate-crumble xs:h-[200px] xss:h-[230px]">
          <div className="absolute lg:right-[43.4%] md:right-[26.5%] sm:right-[35.5%] xs:right-[6.5%] xss:right-[2%] -top-4 w-3 h-3 bg-gray-700 rounded-full shadow-md z-20 "></div>
          {/* Under Construction Sign */}
          <div
            className="absolute left-[23%] md:left-[33%] md:-top-5 -top-6 xss:-top-10 -translate-x-1/2 z-10 bg-yellow-300 border-4 border-yellow-600 rounded-md px-6 py-2 text-center font-bold text-yellow-900 text-lg shadow-md animate-swing"
            style={{ transformOrigin: "top right" }}
          >
            🚧 Under Construction 🚧
          </div>

          <div className="flex flex-col gap-3 sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 bg-gray-300 rounded-lg items-center text-center">
            <p className="text-gray-700 text-lg">
              My larger projects are still a work in progress, I'm refining and
              building them to be even better.
            </p>
            <p className="text-gray-600 text-base">
              In the meantime, feel free to explore my practise projects on
              GitHub!
            </p>

            {/* GitHub Link Button */}
            <a
              href="https://github.com/HaamidRaza"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1.7 bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition duration-200 "
            >
              🔗 View My GitHub Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
