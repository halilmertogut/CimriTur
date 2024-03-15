import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import image1 from '../images/beach.jpg'
import image2 from '../images/beach.jpg'
import image3 from '../images/beach.jpg'

const tours = [
    { id: 1, name: "Tour A", description: "Discover the beauty of the mountains.", image: image1 },
    { id: 2, name: "Tour B", description: "Explore the ancient ruins.", image: image1 },
    { id: 3, name: "Tour C", description: "Experience the city life.", image: image1 },
    // Add more tours as needed
];

const FeaturedTours = () => {
    const toursRef = useRef([]);

    useEffect(() => {
        gsap.from(toursRef.current, {
            duration: 0.5,
            autoAlpha: 0,
            ease: 'power3.out',
            stagger: 0.2,
            y: 20
        });
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-6">Featured Tours</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tours.map((tour, index) => (
                    <div ref={el => toursRef.current[index] = el} key={tour.id} className="border rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
                        <img src={tour.image} alt={tour.name} className="w-full h-64 object-cover"/>
                        <div className="p-4">
                            <h3 className="font-bold text-xl">{tour.name}</h3>
                            <p>{tour.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedTours;
