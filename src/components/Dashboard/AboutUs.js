import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CountUp from 'react-countup'; // Importing CountUp library
import { FaRegClock, FaEye, FaBullseye } from 'react-icons/fa'; // Importing icons

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const historyRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const dividerRef = useRef(null);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animations for history section
    gsap.from(historyRef.current, {
      scrollTrigger: {
        trigger: historyRef.current,
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 50,
      duration: 1.5,
    });

    // Animations for vision section
    gsap.from(visionRef.current, {
      scrollTrigger: {
        trigger: visionRef.current,
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 50,
      duration: 1.5,
    });

    // Animations for mission section
    gsap.from(missionRef.current, {
      scrollTrigger: {
        trigger: missionRef.current,
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 50,
      duration: 1.5,
    });

    gsap.from(dividerRef.current, {
        scrollTrigger: {
          trigger: dividerRef.current,
          start: 'top center',
          toggleActions: 'play none none reverse',
        },
        scaleX: 0, // Start from scale 0
        duration: 1,
        ease: 'power3.out',
      });
  }, []);

  return (
    <section id='about' className="bg-white py-20 font-montserrat">
      <div className="container mx-auto px-5">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Our Story</h1>
          <div ref={dividerRef} className="flex justify-center mb-10">
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-indigo-800 rounded-full"></div>
      </div>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Born from a passion for innovation and a commitment to excellence, our journey is a testament to the power of dreams and perseverance.
          </p>
        </div>
        <div className="flex flex-wrap">
          {/* History Section */}
          <div ref={historyRef} className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-white p-8 flex-col">
              <div className="flex items-center mb-3">
                <FaRegClock className="text-indigo-500 w-8 h-8 flex-shrink-0 mr-4" />
                <h2 className="text-gray-900 text-lg title-font font-medium">Our History</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Starting in a small garage, we've grown into a global leader, thanks to our relentless pursuit of excellence and innovation.
                </p>
              </div>
              <div className="mt-4 text-center">
                <CountUp end={8} duration={10} suffix="+" className="text-4xl text-indigo-600 font-bold" /> Years of Experience
              </div>
            </div>
          </div>
          {/* Vision Section */}
          <div ref={visionRef} className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-white p-8 flex-col">
              <div className="flex items-center mb-3">
                <FaEye className="text-green-500 w-8 h-8 flex-shrink-0 mr-4" />
                <h2 className="text-gray-900 text-lg title-font font-medium">Our Vision</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  To empower individuals and businesses worldwide by providing state-of-the-art technological solutions.
                </p>
              </div>
              <div className="mt-4 text-center">
                <CountUp end={500} duration={10} className="text-4xl text-green-600 font-bold" />+ Satisfied Clients
              </div>
            </div>
          </div>
          {/* Mission Section */}
          <div ref={missionRef} className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-white p-8 flex-col">
              <div className="flex items-center mb-3">
                <FaBullseye className="text-blue-500 w-8 h-8 flex-shrink-0 mr-4" />
                <h2 className="text-gray-900 text-lg title-font font-medium">Our Mission</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  To innovate and inspire, to transform challenges into opportunities, and to make a lasting impact on the world.
                </p>
              </div>
              <div className="mt-4 text-center">
                <CountUp end={250} duration={10} className="text-4xl text-blue-600 font-bold" />+ Successful Projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
