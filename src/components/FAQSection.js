import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';

gsap.registerPlugin(ScrollTrigger);

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqItemsRef = useRef([]);

  const faqs = [
    {
      question: "Nasıl Gezi Rezervasyonu Yapabilirim?",
      answer: "Web sitemizi ziyaret ederek ve ilgilendiğiniz geziyi seçerek gezi rezervasyonu yapabilirsiniz.",
    },
    {
      question: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
      answer: "Tüm kredi kartları ile kolay ödeme yapabilirsiniz.",
    },
    // Add more FAQs as needed...
  ];

  useEffect(() => {
    faqItemsRef.current = faqItemsRef.current.slice(0, faqs.length);

    gsap.to(faqItemsRef.current, {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: faqItemsRef.current,
        start: "top bottom-=150",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4 bg-white font-montserrat">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Sıkça Sorulan Sorular</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={(el) => (faqItemsRef.current[index] = el)}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                {activeIndex === index ? (
                  <ChevronUpIcon className="w-6 h-6" />
                ) : (
                  <ChevronDownIcon className="w-6 h-6" />
                )}
              </div>
              {activeIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
