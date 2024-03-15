import React, { useEffect, useRef } from 'react';
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
          duration: 1,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom-=150',
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
      title: 'Uncover the Hidden Gems of Europe',
      description: 'Embark on a journey through the picturesque landscapes and vibrant cities of Europe.',
      author: 'John Doe',
      date: '11 Jan 2022',
      readTime: '5 min read',
      imageUrl: 'https://source.unsplash.com/random/800x600?europe,landscape',
      authorImage: 'https://source.unsplash.com/random/100x100?person',
    },
    {
      id: 2,
      category: 'Culture',
      title: 'Immerse Yourself in the Rich Heritage of Asia',
      description: 'Discover the ancient traditions, breathtaking temples, and mouthwatering cuisine of Asia.',
      author: 'Jane Smith',
      date: '11 Jan 2022',
      readTime: '5 min read',
      imageUrl: 'https://source.unsplash.com/random/800x600?asia,culture',
      authorImage: 'https://source.unsplash.com/random/100x100?person',
    },
    {
        id: 3,
        category: 'Adventure',
        title: 'Uncover the Hidden Gems of Europe',
        description: 'Embark on a journey through the picturesque landscapes and vibrant cities of Europe.',
        author: 'John Doe',
        date: '11 Jan 2022',
        readTime: '5 min read',
        imageUrl: 'https://source.unsplash.com/random/800x600?europe,landscape',
        authorImage: 'https://source.unsplash.com/random/100x100?person',
      },
      {
        id: 4,
        category: 'Culture',
        title: 'Immerse Yourself in the Rich Heritage of Asia',
        description: 'Discover the ancient traditions, breathtaking temples, and mouthwatering cuisine of Asia.',
        author: 'Jane Smith',
        date: '11 Jan 2022',
        readTime: '5 min read',
        imageUrl: 'https://source.unsplash.com/random/800x600?asia,culture',
        authorImage: 'https://source.unsplash.com/random/100x100?person',
      },
    // Add more articles as needed...
  ];

  return (
    <div className="flex flex-col items-center justify-start gap-12 px-4 md:px-8 lg:px-12 py-12 m-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
        {articles.map((article) => (
          <div ref={addToRefs} key={article.id} className="flex flex-col md:flex-row items-center gap-8 article-card bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-xl">
            <img
              className="w-full md:w-1/2 h-64 object-cover"
              src={article.imageUrl}
              alt={article.title}
            />
            <div className="flex flex-col gap-4 p-4 w-full md:w-1/2">
              <div className="text-lg font-semibold text-red-500">{article.category}</div>
              <b className="text-2xl leading-snug font-semibold">{article.title}</b>
              <p className="text-gray-600">{article.description}</p>
              <div className="flex items-center gap-4">
                <img className="w-12 h-12 rounded-full object-cover" src={article.authorImage} alt={article.author} />
                <div>
                  <div className="font-semibold">{article.author}</div>
                  <div className="text-sm text-gray-500">{article.date} • {article.readTime}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
