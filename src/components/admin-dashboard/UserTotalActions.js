import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserTotalActions = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openSection, setOpenSection] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const userData = {
          id: userId,
          name: "John Doe",
          tours: [
            { title: "Kapadokya Macera Turu", photo: "https://source.unsplash.com/random/200x200?kapadokya", refNo: "TR123", date: "10/10/2024" },
            { title: "Antalya Kültür Turu", photo: "https://source.unsplash.com/random/200x200?antalya", refNo: "TR124", date: "12/12/2024" }
          ],
          comments: [
            { content: "Harika bir turdu.", tour: "Kapadokya Macera Turu", date: "15/10/2024", id: 1 },
            { content: "Mükemmel organizasyon.", tour: "Antalya Kültür Turu", date: "18/12/2024", id: 2 }
          ],
          blogs: [
            { title: "Gezi Notlarım", date: "20/05/2024", id: 1 },
            { title: "Yol Hikayeleri", date: "15/06/2024", id: 2 }
          ]
        };
        setUser(userData);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleDeleteComment = (commentId) => {
    const updatedComments = user.comments.filter(comment => comment.id !== commentId);
    setUser({ ...user, comments: updatedComments });
  };

  const handleDeleteBlog = (blogId) => {
    const updatedBlogs = user.blogs.filter(blog => blog.id !== blogId);
    setUser({ ...user, blogs: updatedBlogs });
  };

  if (loading) return <div>Yükleniyor...</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">{user.name}'in Hareketleri</h1>
      <div className="space-y-6">
        {['tours', 'comments', 'blogs'].map(section => (
          <div key={section} className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div
              className="bg-sky-500 text-white font-bold text-lg p-4 cursor-pointer"
              onClick={() => toggleSection(section)}
            >
              {section === 'tours' ? 'Gittiği Turlar' : section === 'comments' ? 'Yorumlar' : 'Bloglar'}
            </div>
            {openSection === section && (
              <div className="p-4 space-y-4">
                {user[section].map(item => (
                  <div key={item.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm">
                    {section === 'tours' ? (
                      <>
                        <img src={item.photo} alt={item.title} className="w-20 h-20 rounded-full" />
                        <div className="flex-grow pl-4">
                          <div className="text-lg font-medium">{item.title}</div>
                          <p className="text-sm text-gray-500">Referans No: {item.refNo}</p>
                          <p className="text-sm text-gray-500">Tarih: {item.date}</p>
                        </div>
                      </>
                    ) : (
                      <div className="flex-grow flex items-center justify-between">
                        <div>
                          <p className="text-lg">{item.content || item.title}</p>
                          {item.tour && <p className="text-sm text-gray-500">Tur: {item.tour}</p>}
                          <p className="text-sm text-gray-500">Tarih: {item.date}</p>
                        </div>
                        <button onClick={() => section === 'comments' ? handleDeleteComment(item.id) : handleDeleteBlog(item.id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-colors">
                          Sil
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


export default UserTotalActions;
