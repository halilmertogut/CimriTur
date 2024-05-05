import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faBlog } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';

const BlogDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/blogs/${id}`)
            .then(response => response.json())
            .then(data => setBlog(data))
            .catch(error => console.error('Blog yüklenirken bir hata oluştu:', error));
    }, [id]);

    if (!blog) return <div className="text-center py-10">Yükleniyor...</div>;

    const handleSocialShare = (platform) => {
        const url = `http://localhost:3000/blogs/${id}`;
        const message = encodeURIComponent(`Bu harika blog yazısına göz atın: ${blog.title} ${url}`);
        
        switch (platform) {
            case 'instagram':
                window.open(`https://www.instagram.com/yourprofile/`, '_blank');
                break;
            case 'whatsapp':
                window.open(`https://wa.me/?text=${message}`, '_blank');
                break;
            case 'twitter':
                window.open(`https://twitter.com/intent/tweet?text=${message}`, '_blank');
                break;
            default:
                break;
        }
    };

    return (
        <div className="container mx-auto max-w-4xl p-4 my-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                    <div className="flex justify-between items-center">
                        <button onClick={() => navigate('/')} className="text-gray-500 hover:text-gray-700 transition flex items-center">
                            <FontAwesomeIcon icon={faArrowLeft} />
                            <span className="ml-2">Ana Sayfaya Dön</span>
                        </button>
                        <button onClick={() => navigate('/blog')} className="text-gray-500 hover:text-gray-700 transition flex items-center">
                            <FontAwesomeIcon icon={faBlog} />
                            <span className="ml-2">Bloglara Dön</span>
                        </button>
                    </div>
                    <h1 className="font-bold text-gray-800 text-3xl md:text-5xl mt-4 mb-3">{blog.title}</h1>
                    <div className="flex justify-between items-center">
                        <p className="text-gray-500 text-sm mb-5">Yayınlanma Tarihi: {blog.createDate ? new Date(blog.createDate).toLocaleDateString('tr-TR') : 'Tarih bilgisi yok'}</p>
                        <p className="text-gray-500 text-sm mb-5 capitalize">Blog Türü: {blog.blogType}</p>
                    </div>
                    <img
                        src={blog.imageUrl || "https://source.unsplash.com/random/1024x400"}
                        alt="Blog Kapak Fotoğrafı"
                        className="w-full h-auto mb-6"
                    />
                    <h2 className="text-xl font-semibold">Açıklama</h2>
                    <p className="text-gray-700 mb-4">{blog.description}</p>
                    <hr className="my-4" />
                    <div className="prose lg:prose-xl mb-6" dangerouslySetInnerHTML={{ __html: blog.content }} />
                </div>
                <div className="bg-gray-100 p-6">
                    <h3 className="font-semibold text-lg">Bu Yazıyı Paylaş</h3>
                    <div className="flex gap-3 mt-4">
                        <button onClick={() => handleSocialShare('instagram')} className="bg-black text-white p-2 rounded flex items-center">
                            <FontAwesomeIcon icon={faInstagram} className="text-xl" />
                        </button>
                        <button onClick={() => handleSocialShare('whatsapp')} className="bg-black text-white p-2 rounded flex items-center">
                            <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
                        </button>
                        <button onClick={() => handleSocialShare('twitter')} className="bg-black text-white p-2 rounded flex items-center">
                            <FontAwesomeIcon icon={faTwitter} className="text-xl" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
