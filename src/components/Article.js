import React, { useEffect, useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Article = () => {
  const refs = useRef([]);
  refs.current = [];

  useEffect(() => {
    refs.current.forEach((el) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: el,
            start: "top 90%", 
            end: "bottom 10%",             
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };
  const articles = [
    {
      id: 1,
      category: 'Adventure',
      title: 'Journey Through the Andes',
      description: 'Explore the vast and rugged terrain of the Andes mountains on this unforgettable adventure.',
      author: 'Maria Gonzalez',
      date: 'March 10, 2024',
      readTime: '7 min read',
      imageUrl: 'https://source.unsplash.com/random/800x600?andes',
      authorImage: 'https://source.unsplash.com/random/100x100?woman',
    },
    {
      id: 2,
      category: 'Culture',
      title: 'The Heart of Japanese Tea Ceremony',
      description: 'Delve into the serene world of the Japanese tea ceremony, a tradition steeped in history and mindfulness.',
      author: 'Takashi Yamamoto',
      date: 'April 5, 2024',
      readTime: '5 min read',
      imageUrl: 'https://source.unsplash.com/random/800x600?japanese,tea',
      authorImage: 'https://source.unsplash.com/random/100x100?man',
    },
    {
      id: 3,
      category: 'Adventure',
      title: 'Diving into the Blue Hole',
      description: "Discover the mysteries of the Great Blue Hole, and why it's a top destination for divers around the world.",
      author: 'Chris Diver',
      date: 'May 22, 2024',
      readTime: '6 min read',
      imageUrl: 'https://source.unsplash.com/random/800x600?blue,hole',
      authorImage: 'https://source.unsplash.com/random/100x100?diver',
    },
    {
      id: 4,
      category: 'Culture',
      title: 'Venice: The City of Canals',
      description: 'Experience the enchanting city of Venice, from its historical landmarks to its vibrant local culture.',
      author: 'Giulia Rossi',
      date: 'June 15, 2024',
      readTime: '5 min read',
      imageUrl: 'https://source.unsplash.com/random/800x600?venice',
      authorImage: 'https://source.unsplash.com/random/100x100?woman',
    },
    // More articles can be added here
  ];

  return (
    <section className="min-h-screen px-4 md:px-8 lg:px-12 py-12 bg-white font-montserrat">
<div className="text-center mb-12">
    <h2 className="text-4xl font-bold relative inline-block text-center mb-4">
      Explore Our Latest Articles
    </h2>
    <p className="mt-4 text-xl font-light text-gray-600">
      Dive into insights and stories from our experts
    </p>
    <div className="mt-6">
            <span className="inline-block w-40 h-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></span>
          </div>
  </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {articles.map((article, index) => (
          <div ref={addToRefs} key={article.id} className="article-card flex flex-col md:flex-row items-center gap-8 bg-gray-50 shadow transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-xl rounded-lg overflow-hidden">
            <div className="md:w-1/2 h-auto overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                src={article.imageUrl}
                alt={article.title}
              />
            </div>
            <div className="flex flex-col gap-4 p-6 w-full md:w-1/2">
              <span className="text-indigo-500 text-sm font-semibold uppercase">{article.category}</span>
              <h3 className="text-2xl font-bold">{article.title}</h3>
              <p className="text-gray-600 flex-1">{article.description}</p>
              <div className="flex items-center gap-4 mt-auto">
                <img className="w-12 h-12 rounded-full object-cover" src={article.authorImage} alt={article.author} />
                <div>
                  <span className="font-semibold">{article.author}</span>
                  <span className="text-sm text-gray-500 block">{article.date} • {article.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Article;
