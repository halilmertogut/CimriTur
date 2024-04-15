import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons';

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

const BlogDetail = () => {
    return (

        <div className="max-w-full bg-white flex flex-col items-center gap-5 p-4 md:p-20 pb-16 md:pb-[66px]">
            <div className="flex flex-col items-start gap-20 w-full max-w-4xl p-4 md:p-16 bg-white">
                <div className="flex flex-col items-start gap-4 w-full">
                    <h1 className="text-3xl md:text-5xl font-bold text-black font-montserrat">En İyi Seyahat Rehberi</h1>
                </div>
                <div className="flex flex-col items-start gap-8 w-full">
                    <img className="w-full h-auto" src="https://www.forbes.com/advisor/wp-content/uploads/2022/09/travel_blog_2.jpg" alt="Travel Photography" />
                    <div className="flex justify-between items-start w-full">
                        <div className="flex gap-12">
                            <div className="flex flex-col gap-0.3">
                                <span className="text-base font-normal text-black font-montserrat">Tarafından yazılmıştır</span>
                                <span className="text-base font-medium text-black font-montserrat">John Doe</span>
                            </div>
                            <div className="flex flex-col gap-0.3">
                                <span className="text-base font-normal text-black font-montserrat">Yayımlanma Tarihi</span>
                                <span className="text-base font-medium text-black font-montserrat">22 Ocak 2021</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center gap-16 w-full max-w-4xl p-4 md:p-16 bg-white">
                <div className="flex flex-col items-center gap-5 w-full">
                    <div className="flex flex-col items-start gap-4 w-full">
                        <h2 className="text-xl md:text-3xl font-bold text-black font-montserrat">Benim Bloğum</h2>
                        <p className="text-base font-normal text-blac font-montserrat">Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p>
                        {/* More paragraphs and sections follow */}
                    </div>
                    {/* Similar structure for other sections of the blog post */}
                </div>

                {/* Share and tags section */}
                <div className="flex flex-col items-center gap-12 w-full">
                    <div className="text-lg font-semibold text-black font-montserrat">Bloğu Paylaş</div>
                    <div className="flex gap-4">
                        <button className="px-6 py-3 flex items-center gap-2 bg-black text-white border border-black rounded hover:border-red-300">
                            <FontAwesomeIcon icon={faInstagram} /> Instagram
                        </button>
                        <button className="px-6 py-3 flex items-center gap-2 bg-black text-white border border-black rounded hover:border-red-300">
                            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                        </button>
                        <button className="px-6 py-3 flex items-center gap-2 bg-black text-white border border-black rounded hover:border-red-300">
                            <FontAwesomeIcon icon={faTwitter} /> Twitter
                        </button>
                    </div>
                    {/* Tags and author info */}
                </div>
            </div>

            <div className="flex flex-col items-start gap-6 w-full max-w-4xl">
                <div className="flex flex-col items-start gap-6 w-full">
                    <h3 className="text-2xl md:text-5xl font-bold text-black font-montserrat">Sıradaki Maceranızı Keşfedin</h3>
                    <p className="text-base md:text-lg font-normal text-black font-montserrat">Geniş tur yelpazemizi keşfedin ve bir sonraki seyahatinizi bugün planlamaya başlayın.</p>
                </div>
                <div className="flex gap-4">
                    <button className="px-6 py-3 bg-black text-white border border-black font-montserrat">Abone Ol</button>
                    <button className="px-6 py-3 border border-black text-black font-montserrat">İletişim</button>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;