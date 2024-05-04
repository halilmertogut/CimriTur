import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const categories = ['Hepsi', 'Tarih', 'Macera', 'Doğa', 'Mutfak'];
const blogItems = [
    { id: 1, category: 'Doğa', title: 'Karadeniz\'in Büyüleyici Doğasını Keşfedin!', description: 'Güney Amerika\'nın nefes kesen manzaralarını, çeşitli vahşi yaşamını ve canlı kültürlerini deneyimleyin.', imageUrl: 'https://source.unsplash.com/featured/?nature' },
    { id: 2, category: 'Macera', title: 'Macera Dolu Bir Seyahat', description: 'Dağların arasında unutulmaz bir macera.', imageUrl: 'https://source.unsplash.com/featured/?adventure' },
    { id: 3, category: 'Tarih', title: 'Tarihin Derinliklerine Yolculuk', description: 'Antik kentlerin gizemli hikayelerini keşfedin.', imageUrl: 'https://source.unsplash.com/featured/?historical' },
    { id: 4, category: 'Mutfak', title: 'Dünya Mutfaklarından Lezzetler', description: 'Farklı kültürlerin mutfak sırlarını tadın.', imageUrl: 'https://source.unsplash.com/featured/?cuisine' },
    { id: 5, category: 'Doğa', title: 'Cappadocia\'nın Eşsiz Güzelliği', description: 'Kapadokya\'nın peri bacaları ve tarihi mağaralarını keşfedin.', imageUrl: 'https://source.unsplash.com/featured/?Cappadocia' },
    { id: 6, category: 'Macera', title: 'Sahra Çölü Macerası', description: 'Sahra Çölü\'nde unutulmaz bir macera yaşayın.', imageUrl: 'https://source.unsplash.com/featured/?desert' },
    { id: 7, category: 'Tarih', title: 'Ephesus Antik Kenti', description: 'Efes\'teki antik yapıların muazzam tarihine tanık olun.', imageUrl: 'https://source.unsplash.com/featured/?Ephesus' },
    { id: 8, category: 'Doğa', title: 'Alaska\'nın Vahşi Yaşamı', description: 'Alaska\'nın vahşi doğasını ve muazzam manzaralarını keşfedin.', imageUrl: 'https://source.unsplash.com/featured/?Alaska' },
    { id: 9, category: 'Mutfak', title: 'İstanbul Lezzet Turu', description: 'İstanbul\'un çeşitli sokak lezzetleri ve otantik tatlarını keşfedin.', imageUrl: 'https://source.unsplash.com/featured/?Istanbul' },
    { id: 10, category: 'Macera', title: 'Amazon Ormanlarına Yolculuk', description: 'Amazon ormanlarının derinliklerine bir macera dolu seyahat yapın.', imageUrl: 'https://source.unsplash.com/featured/?Amazon' }
];


const BlogCard = ({ item }) => (
    <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
        <img className="w-full h-48 object-cover rounded" src={item.imageUrl} alt={`${item.category} Gönderisi ${item.id}`} />
        <div className="pt-4">
            <p className="text-sm font-semibold">{item.category}</p>
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="mt-2 text-base font-normal">{item.description}</p>
        </div>
    </div>
);

const Blog = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('Hepsi');

    const handleBlogClick = (url) => navigate(url);
    const filterBlogItems = (category) => blogItems.filter(item => category === 'Hepsi' ? true : item.category === category);

    return (
        <div className="max-w-screen-xl mx-auto py-16 px-4 bg-white flex flex-col gap-6 font-montserrat">
            <div className="flex flex-col items-center gap-4">
                <div className="text-center">
                    <h1 className="text-5xl font-bold leading-snug text-black">En İyi Blogları Keşfedin</h1>
                </div>
            </div>
            <div className="flex justify-center gap-4">
                {categories.map((category) => (
                    <div key={category} className="px-4 py-2 border border-transparent rounded hover:border-gray-300 cursor-pointer"
                         onClick={() => setSelectedCategory(category)}>
                        <p className="text-base font-normal text-black">{category}</p>
                    </div>
                ))}
            </div>
            <div className="flex flex-wrap justify-center gap-6">
                {filterBlogItems(selectedCategory).map((item) => (
                    <BlogCard key={item.id} item={item} />
                ))}
            </div>
            <div className="w-full bg-black bg-opacity-50 px-8 py-14 flex flex-col gap-4 items-start">
                <h2 className="text-3xl font-bold text-white">Heyecan Verici Seyahat Güncellemeleri İçin Abone Olun</h2>
                <p className="text-lg font-normal text-white">Yeni turlar, seyahat ipuçları ve özel teklifler hakkında bilgi sahibi olun.</p>
                <div className="flex gap-4 mt-4">
                    <input type="text" placeholder="E-posta adresinizi giriniz" className="w-full p-3 bg-white" />
                    <button className="bg-black text-white px-6 py-3" onClick={() => handleBlogClick('/create-blog')}>Blog Oluştur</button>
                    <button className="bg-black text-white px-6 py-3">Abone Ol</button>
                </div>
                <p className="text-xs font-normal text-white mt-4">Katılarak, Şartlar ve Koşullarımızı kabul etmiş olursunuz.</p>
            </div>
        </div>
    );
};

export default Blog;
