import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const categories = ['Hepsi', 'Tarih', 'Macera', 'Doğa', 'Mutfak'];

const BlogCard = ({ item, onClick }) => (
    <div onClick={onClick} className="flex flex-col items-center w-full p-4 md:w-1/2 lg:w-1/3 xl:w-1/4 transition-shadow duration-300 cursor-pointer hover:shadow-lg mt-5 bg-white rounded-lg border">
        <img src={item.imageUrl || "https://via.placeholder.com/300"} alt={`${item.category} Gönderisi ${item.id}`} className="w-full h-48 object-cover rounded-t-lg" />
        <div className="pt-4 w-full text-center">
            <p className="text-sm font-semibold mt-1 uppercase text-red-600">{item.blogType}</p>
            <h2 className="text-xl mt-1 font-bold text-gray-800">{item.title}</h2>
            <p className="mt-1 text-gray-600">Açıklama: {item.description}</p>
        </div>
    </div>
);

const Blog = () => {
    const navigate = useNavigate();
    const [blogItems, setBlogItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Hepsi');

    useEffect(() => {
        fetch('http://localhost:3000/api/blogs')
            .then(response => response.json())
            .then(data => setBlogItems(data))
            .catch(error => console.error('Error fetching blogs:', error));
    }, []);

    const filterBlogItems = (category) => blogItems.filter(item => category === 'Hepsi' ? true : item.blogType === category);

    return (
        <div className="w-full mx-auto py-16 px-4 bg-gray-50 font-montserrat">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">En İyi Blogları Keşfedin</h1>
                <p className="text-xl text-gray-700">Farklı kategorilerdeki ilgi çekici blog yazılarını keşfet.</p>
            </div>
            <div className="my-6 flex justify-center flex-wrap gap-3">
                {categories.map((category) => (
                    <button key={category} 
                        className={`text-lg font-semibold px-6 py-2 rounded-full cursor-pointer ${selectedCategory === category ? 'text-white bg-red-500' : 'text-red-500 bg-white shadow-md hover:bg-gray-200'}`}
                        onClick={() => setSelectedCategory(category)}>
                        {category}
                    </button>
                ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                {filterBlogItems(selectedCategory).map((item) => (
                    <BlogCard key={item.id} item={item} onClick={() => navigate(`/blog/${item.id}`)} />
                ))}
            </div>
            <div className="text-center mt-10">
                <button className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50" onClick={() => navigate('/create-blog')}>
                    Blog Oluştur
                </button>
            </div>
        </div>
    );
};

export default Blog;
