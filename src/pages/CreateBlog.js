import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Quill CSS

function CreateBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      ['link', 'image'],
      [{ 'font': [] }],
      [{ 'size': ['small', false, 'large', 'huge'] }], // Custom size
      ['clean']
    ]
  };
  

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet',
    'link', 'image'
  ];

  const handleTitleChange = (value) => {
    setTitle(value);
    setShowPreview(true);
  };

  const handleContentChange = (value) => {
    setContent(value);
    setShowPreview(true);
  };

  return (
    <div className="container mx-auto px-4 flex justify-center">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-semibold text-center my-6">Blog Yazısı Oluştur</h1>
        <div className="flex">
          <div className="w-full pr-2">
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2 ">Başlık</label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">İçerik</label>
              <ReactQuill
                theme="snow"
                value={content}
                onChange={handleContentChange}
                modules={modules}
                formats={formats}
                className="h-screen"
              />
            </div>
          </div>
          {showPreview && (
            <div className="w-full pl-2">
              <div className="shadow-lg p-8 bg-white">
                <div className="flex items-center mb-4">
                  <img src="https://via.placeholder.com/150" alt="User Avatar" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <p className="text-gray-600">30 Mart 2024</p>
                    <p className="font-semibold text-xl">{title}</p>
                  </div>
                </div>
                <div className="mb-4" dangerouslySetInnerHTML={{ __html: content }} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;
