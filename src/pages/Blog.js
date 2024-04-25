import React from 'react';
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
    
    const navigate = useNavigate();

    const handleBlogClick = () => {
        // Kullanıcıyı BlogDetail sayfasına yönlendiren fonksiyonumuz burada
        navigate('/blog-detail'); // Buradaki '/blog-detail', yönlendirilecek olan sayfanın URL'sidir
    };

    const handleCreateBlogClick = () => {
        navigate('/create-blog');
    };

    return (
        <div className="max-w-screen-xl mx-auto py-16 px-4 bg-white flex flex-col gap-6 font-montserrat">
            <div className="flex flex-col items-center gap-4">
                <div className="text-center">
                    <h1 className="text-5xl font-bold font-montserrat leading-snug text-black">En İyi Blogları Keşfedin</h1>
                    <p className="text-lg font-normal font-montserrat text-black mt-2"></p>
                </div>
            </div>

            <div className="flex justify-center gap-4">
                {['Hepsini Gör', 'Tarih', 'Macera', 'Doğa', 'Yemek'].map((category) => (
                    <div key={category}
                        className="px-4 py-2 border border-transparent rounded hover:border-gray-300 cursor-pointer"
                    >
                        <p className="text-base font-normal font-montserrat text-black">{category}</p>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6 ">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="flex flex-col items-center w-full sm:w-1/2 md:w-1/4 " onClick={handleBlogClick}>
                        <img className="w-full h-48 object-cover rounded" src={`https://ntnc.org.np/sites/default/files/styles/slider_1920x1024/public/img_featured_thematic/2019-02/nature-base-tourism.jpg?itok=cZZ-Hkoi${item}`} alt={`Post ${item}`} />
                        <div className="pt-4">
                            <p className="text-sm font-semibold">Doğa </p>
                            <h2 className="text-xl font-bold">Karadeniz'in Büyüleyici Doğasını Keşfedin!</h2>
                            <p className="mt-2 text-base font-normal">Güney Amerika'nın nefes kesen manzaralarını, çeşitli vahşi yaşamını ve canlı kültürlerini deneyimleyin.</p>
                            <div className="flex items-center gap-4 mt-4">
                                <img className="w-12 h-12 rounded-full" src="https://www.nurses.co.uk/Images/Blog/author/b9e8a8fc-446d-4a24-84ae-416ed35e107f.png" alt="Author" />
                                <div>
                                    <p className="text-sm font-semibold">Halil Mert Öğüt</p>
                                    <p className="text-sm font-normal">11 Ocak 2022 • 5 dk okuma süresi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="flex flex-col items-center w-full sm:w-1/2 md:w-1/4 lg:w-1/5 " onClick={handleBlogClick}>
                        <img className="w-full h-48 object-cover rounded" src={`https://via.placeholder.com/302x148?text=Post+${item}`} alt={`Post ${item}`} />
                        <div className="pt-4">
                            <p className="text-sm font-semibold">Doğa</p>
                            <h2 className="text-xl font-bold">Karadeniz'in Büyüleyici Doğasını Keşfedin!</h2>
                            <p className="mt-2 text-base font-normal">Güney Amerika'nın nefes kesen manzaralarını, çeşitli vahşi yaşamını ve canlı kültürlerini deneyimleyin.</p>
                            <div className="flex items-center gap-4 mt-4">
                                <img className="w-12 h-12 rounded-full" src="https://www.nurses.co.uk/Images/Blog/author/b9e8a8fc-446d-4a24-84ae-416ed35e107f.png" alt="Author" />
                                <div>
                                    <p className="text-sm font-semibold">Halil Mert Öğüt</p>
                                    <p className="text-sm font-normal">11 Ocak 2022 • 5 dk okuma süresi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full bg-black bg-opacity-50 px-8 py-14 flex flex-col gap-4 items-start">
                <h2 className="text-3xl font-bold text-white">Heyecan verici seyahat güncellemeleri için abone olun.</h2>
                <p className="text-lg font-normal text-white">Yeni turlar, seyahat ipuçları ve özel teklifler hakkında bilgi sahibi olun.</p>
                <div className="flex gap-4 mt-4">
                    <input type="text" placeholder="E-mail adresinizi giriniz" className="w-full p-3 bg-white" />
                    <button className="bg-black text-white px-6 py-3">Abone Ol</button>
                    <button className="bg-black text-white px-6 py-3" onClick={handleCreateBlogClick}>Blog Oluştur</button>

                </div>
                <p className="text-xs font-normal text-white mt-4">Katılarak, Şartlar ve Koşullarımızı kabul etmiş olursunuz.</p>

            </div>


        </div>
    );
};

export default Blog;
