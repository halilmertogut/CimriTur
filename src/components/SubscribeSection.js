import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SubscribeSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current, {
      duration: 1,
      autoAlpha: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
        end: "bottom 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-gradient-to-r from-red-400 to-red-500 text-white py-12 px-4 font-montserrat">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Abone olun ve güncel kalın!</h2>
        <p className="mb-8">En son haberleri ve özel teklifleri doğrudan gelen kutunuza almak için bültenimize abone olun.</p>
        <form className="flex justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Email adresinizi girin"
            className="py-2 px-4 rounded-md outline-none text-gray-800"
          />
          <button
            type="submit"
            className="py-2 px-6 rounded-md bg-white text-gray-800 hover:bg-gray-100 transition-colors duration-300"
          >
            Abone Ol
          </button>
        </form>
      </div>
    </section>
  );
};
export default SubscribeSection;