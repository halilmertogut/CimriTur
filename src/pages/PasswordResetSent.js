import React from 'react';

const PasswordResetSent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md">
        <h2 className="text-center text-lg font-semibold text-gray-800">Şifreniz Gönderildi</h2>
        <p className="mt-1 text-gray-600">dincer.velioglu@gmail.com adresine şifre yenileme linkiniz gönderildi.</p>
        
        <div className="mt-4">
          <p className="text-sm text-gray-600">Şifre Yenileme e-postası elinize ulaşmadıysa:</p>
          <ul className="mt-2 mb-4 text-sm text-gray-600 list-disc list-inside">
            <li>Şifre yenileme e-postasının gelmesi 10 dakikayı bulabilir.</li>
            <li>Spam ve diğer e-posta klasörlerinizi kontrol ediniz.</li>
            <li>Girdiğiniz e-posta adresinin doğruluğunu kontrol ediniz.</li>
          </ul>
          
          <button className="w-full py-2 text-white bg-red-500 rounded hover:bg-red-600">Giriş Yap</button>
          <button className="w-full py-2 mt-3 text-sm text-red-500 border border-red-500 rounded hover:bg-red-50">Tekrar Gönder (2:34)</button>
        </div>
        
        <a href="#" className="block mt-4 text-sm text-center text-red-500 hover:underline">Önceki Sayfaya Dön</a>
      </div>
    </div>
  );
}

export default PasswordResetSent;
