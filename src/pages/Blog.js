import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const categories = ['Hepsi', 'Tarih', 'Macera', 'Doğa', 'Mutfak'];

const BlogCard = ({ item, onClick }) => (
    <div onClick={() => onClick(item.id)} className="flex flex-col items-center w-full p-4 md:w-1/2 lg:w-1/3 xl:w-1/4 transition-shadow duration-300 cursor-pointer hover:shadow-lg mt-5 bg-white rounded-lg border">
        <img 
    src={item.imageUrl && item.imageUrl !== "undefined" ? item.imageUrl : `https://picsum.photos/600/300`} 
    alt={`${item.category ? item.category : 'Category'} Gönderisi ${item.id ? item.id : 'ID'}`} 
    className="w-full h-48 object-cover rounded-t-lg" 
/>

        <div className="pt-4 w-full text-center">
            <p className="text-sm font-semibold mt-1 uppercase text-red-600">{item.blogType}</p>
            <h2 className="text-xl mt-1 font-bold text-gray-800">{item.title}</h2>
            <p className="mt-1 text-gray-600 truncate">Açıklama: {item.description}</p>
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

    const handleCardClick = (id) => {
        navigate(`/blog/${id}`);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow w-full mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 font-montserrat">
                <div className="text-center mb-10">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">En İyi Blogları Keşfedin</h1>
                    <p className="text-lg sm:text-xl text-gray-700">Farklı kategorilerdeki ilgi çekici blog yazılarını keşfet.</p>
                </div>
                <div className="my-6 flex justify-center flex-wrap gap-3">
                    {categories.map((category) => (
                        <button key={category} className={`text-lg font-semibold px-6 py-2 rounded-full cursor-pointer ${selectedCategory === category ? 'bg-red-500 text-white' : 'bg-white text-red-500 shadow-md hover:bg-gray-200'}`} onClick={() => setSelectedCategory(category)}>
                            {category}
                        </button>
                    ))}
                </div>
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                {filterBlogItems(selectedCategory).map((item) => (
                <BlogCard key={item._id} item={item} onClick={() => handleCardClick(item._id)} />

            ))}
                </div>
            </div>
            <div className="bg-gray-50 w-full py-8">
                <div className="text-center">
                    <button className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-red-500" onClick={() => navigate('/create-blog')}>
                        Blog Oluştur
                    </button>
                </div>
            </div>
        </div>
    );    
    
};

export default Blog;
