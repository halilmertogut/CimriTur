import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import bgVideo from "../../images/heroVideo.mp4"; // Ensure you have a compelling travel video
import bgVideo2 from "../../images/heroVideo2.mp4"; // Ensure you have a compelling travel video
import FilterSection from "./FilterSection"; // Assuming FilterSection is in the same directory

const HeroSection = () => {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const filterSectionRef = useRef(null); // Reference for the filter section for animation

  useEffect(() => {
    gsap
      .timeline()
      .fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(
        headlineRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.3 }
      )
      .fromTo(
        filterSectionRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.5 }
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center h-screen overflow-hidden font-montserrat"
    >
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src={bgVideo2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute z-10 w-full h-full bg-black opacity-40"></div>{" "}
      {/* Overlay to ensure text readability */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full px-5 text-center text-white space-y-8">
        <div className="h-auto">
          <h1
            ref={headlineRef}
            className="text-5xl font-bold mb-4 font-montserrat"
          >
            Bir sonraki rüya dolu yolculuğun nereye olacak?
          </h1>
          <p className="mb-8 text-xl mt-8">
            Yeni yerleri, kültürleri ve maceraları keşfedin.{" "}
          </p>
          <p
            ref={headlineRef}
            className="text-7xl underline underline-offset-8 font-bold mb-2 font-montserrat"
          >
            🛫
          </p>
        </div>
        {/* Integrating FilterSection */}
        <div ref={filterSectionRef} className="w-full max-w-6xl mx-auto">
          <FilterSection />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
