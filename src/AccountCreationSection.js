import React from 'react';

const AccountCreationSection = () => {
  return (
    <section className="relative flex justify-center items-center px-6 py-16 w-full">
      {/* Bulanıklaştırma uygulanacak overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-md"></div>

      {/* İçerik */}
      <div className="max-w-md z-10 relative">
        <h2 className="text-2xl font-bold mb-4">Create an Account and Personalize Your Travel Experience</h2>
        <p>Kayıt olun ve turlarınızı kişiselleştirin.</p>
      </div>
      <div className="bg-gray-300 w-64 h-64 flex justify-center items-center z-10 relative">
        {/* Place image or component here */}
        <span className="material-icons">image</span>
      </div>
    </section>
  );
};

export default AccountCreationSection;
