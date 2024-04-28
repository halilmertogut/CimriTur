import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function CreateBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [blogType, setBlogType] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleDateString('tr-TR')); // Yerelleştirilmiş tarih formatı
  }, []); // Bileşen yüklendiğinde bir kez çalışır

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image'],
      [{ 'font': [] }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      ['clean'],
    ],
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet',
    'link', 'image',
  ];

  const handleTitleChange = (e) => {
    if (e && e.target) {
      setTitle(e.target.value); // Doğrulama ile `e.target` kullanımı
      setShowPreview(true);
    }
  };

  const handleContentChange = (content) => {
    if (content && typeof content === 'string') {
      setContent(content); // Gelen içeriği kontrol eder
      setShowPreview(true);
    }
  };

  const handleBlogTypeChange = (e) => {
    if (e && e.target) {
      setBlogType(e.target.value); // Doğrulama ile blog tipi seçimi
    }
  };

  const randomImageUrl = 'https://source.unsplash.com/random/1024x300';

  return (
    <div className="container mx-auto px-4 flex justify-center font-montserrat">
      <div className="w-full max-w-5xl">
        <div className="relative text-center my-6" style={{ height: '150px' }}>
          <img src={randomImageUrl} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover" />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-white/30 backdrop-blur-sm py-2 px-4 rounded">
              <h1 className="text-3xl font-semibold">Blog Yazısı Oluştur</h1>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-full pr-2">
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                Başlık
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={handleTitleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <div className="mt-2">
                <label htmlFor="blogType" className="block text-gray-700 text-sm font-bold mb-2">
                  Blog Tipi
                </label>
                <select
                  id="blogType"
                  value={blogType}
                  onChange={handleBlogTypeChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Seçiniz</option>
                  <option value="adventure">Macera </option>
                  <option value="history">Tarih</option>
                  <option value="nature">Doğa</option>
                  <option value="food">Yiyecek</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
                İçerik
              </label>
              <ReactQuill
                theme="snow"
                value={content}
                onChange={handleContentChange} // İçerik güncellemesi için onChange
                modules={modules}
                formats={formats}
              />
            </div>
          </div>
          {showPreview && (
            <div className="w-full pl-2">
              <p>Önizleme</p>

              <div className="shadow-lg p-8 bg-white font-montserrat">
                <div className="flex items-center mb-4">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="text-gray-600">{currentDate}</p> {/* Tarih */}
                    <p className="font-semibold text-xl">{title}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <ReactQuill
                    theme="snow"
                    value={content}
                    read-only
                    modules={{ toolbar: false }}
                  />
                </div>
                <div className="flex justify-end">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Yayınla
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;
