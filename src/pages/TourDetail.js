import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';



const TourDetail = () => {
  const images = [
    {
      original: 'https://picsum.photos/seed/picsum/648/624',
      thumbnail: 'https://picsum.photos/seed/picsum/100/100',
    },
    {
      original: 'https://picsum.photos/seed/1/648/624',
      thumbnail: 'https://picsum.photos/seed/1/100/100',
    },
    {
      original: 'https://picsum.photos/seed/2/648/624',
      thumbnail: 'https://picsum.photos/seed/2/100/100',
    },
    {
      original: 'https://picsum.photos/seed/3/648/624',
      thumbnail: 'https://picsum.photos/seed/3/100/100',
    },
    {
      original: 'https://picsum.photos/seed/4/648/624',
      thumbnail: 'https://picsum.photos/seed/4/100/100',
    },
  ];

  // ImageGallery kütüphanesi için uygun formatta resimlerin ayarlanması
  const galleryImages = images.map(img => ({
    original: img.original,
    thumbnail: img.thumbnail,
  }));

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const onSlide = (currentIndex) => {
    setCurrentImageIndex(currentIndex);
  };


  // Sample itinerary data
  const tourDays = [
    {
      day: 1,
      date: '13.02.2024',
      description:
        '09:00-10:00: Katılımcıların buluşma ve toplanma alanında kayıt işlemleri.\n' +
        '10:00-12:00: Konforlu bir otobüs ile Efes\'e hareket.\n' +
        '12:00-13:00: Öğle yemeği molası.\n' +
        '13:00-16:00: Rehber eşliğinde Efes Antik Kenti turu (Artemis Tapınağı, Celsus Kütüphanesi, Büyük Tiyatro gibi önemli noktalar).\n' +
        '16:00-17:00: Serbest zaman veya alışveriş için serbest zaman.\n' +
        '17:00: Otele dönüş ve dinlenme.\n' +
        '19:30: Akşam yemeği otelde.',
      imageUrl: 'https://picsum.photos/seed/1/316/304'
    },
    {
      day: 2,
      date: '14.02.2024',
      description: '08:00-09:00: Kahvaltı otelde.' +
        '09:00-10:00: Meryem Ana Evine hareket.' +
        '10:00-12:00: Meryem Ana Evini ziyaret ve rehber eşliğinde bilgiler.' +
        '12:00-13:00: Öğle yemeği molası.' +
        '13:00-15:00: Şirinceye yolculuk ve Şirince Köyü turu.' +
        '15:00-16:30: Serbest zaman veya alışveriş için serbest zaman.' +
        '17:00: Otele dönüş ve dinlenme.' +
        '19:30: Akşam yemeği otelde.',
      imageUrl: 'https://picsum.photos/seed/2/316/304'
    },
    {
      day: 3,
      date: '15.02.2024',
      description: 'Day 3 itinerary details...',
      imageUrl: 'https://picsum.photos/seed/3/316/304'
    },
    {
      day: 4,
      date: '16.02.2024',
      description: 'Day 4 itinerary details...',
      imageUrl: 'https://picsum.photos/seed/4/316/304'
    }
  ];

  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');

  const handlePeopleChange = (change) => {
    setNumberOfPeople(prev => {
      if (prev + change > 0) {
        return prev + change;
      }
      return prev;
    });
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className='font-montserrat'>
      <div className="max-w-6xl mx-auto my-7 bg-white shadow-lg overflow-hidden flex">
        <div className="w-3/5 relative">
          <div className="absolute top-0 left-0 right-0 bottom-auto">
            <ImageGallery
              items={images}
              showThumbnails={false}
              showFullscreenButton={false}
              showPlayButton={false}
              onSlide={onSlide}
              startIndex={currentImageIndex}
              additionalClass="custom-image-gallery"
              showIndex={true}
            />
          </div>
          <div className="absolute left-0 right-0 bottom-0 bg-white p-10">
            <div className="flex justify-center gap-4 mt-4">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.thumbnail}
                  alt={`Thumbnail ${index}`}
                  className="cursor-pointer w-20 h-16"
                  onClick={() => setCurrentImageIndex(index)}
                  showThumbnails
                />
              ))}
            </div>
          </div>
        </div>
        {/* Sağ Taraf: Tur Detayları */}
        <div className="w-2/5 p-4 space-y-3 overflow-y-auto font-montserrat">
          <h1 className="text-2xl font-bold text-black mb-4 font-montserrat">Efes ve Meryemana Şirince Turu: Antik ve Doğal Güzellikleri Keşfedin</h1>

          <p className="text-base text-black font-montserrat mb-4">
            Tarih ve doğanın büyüleyici buluştuğu bir macera için Efes ve Meryemana Şirince Turu tam size göre! Türkiye'nin eşsiz güzelliklerini bir araya getiren bu tur, tarihi zenginlikleri ve doğal güzellikleri bir araya getirerek unutulmaz bir deneyim sunuyor.
          </p>
          <h2 className=" text-xl font-bold font-montserrat">1299 TL</h2>
          <div className="flex items-center mb-4">
            <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            <span className="ml-2">(3.5 stars) • 10 reviews</span>
          </div>
          <div className="space-y-2 mb-4">
            <h3 className="text-lg font-semibold">Gruplar</h3>
            <div className="flex gap-2">
              <span className="px-4 py-2 rounded bg-black text-white ">Tarihi</span>
              <span className="px-4 py-2 rounded border border-black">Antik Alan</span>
            </div>
          </div>
          <div className="space-y-2 mb-2 mt-4">
            <h4 className="text-lg font-semibold mb-2">Ulaşım Tipi</h4>
            <span className=" px-6 py-2 rounded border border-black">Otobüs</span>
          </div>
          <div className="space-y-2 font-montserrat">
            <button className="w-full bg-red-500 text-white mt-6 py-2 rounded-md font-semibold hover:bg-sky-500 transition">Satın Al</button>
            <label for="countries_multiple" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Yolcu sayısı </label>
            <div className=" flex items-center gap-1">
              <div className="flex items-center  ">

                <button className="px-3 py-1 border " onClick={() => handlePeopleChange(-1)}>-</button>
                <input
                  type="text"
                  value={numberOfPeople}
                  onChange={(e) => setNumberOfPeople(e.target.value)}
                  className="w-16 text-center border-t border-b  "
                />
                <button className="px-3 py-1 border mr-16  " onClick={() => handlePeopleChange(1)}>+</button>
              </div>

              <select
                value={selectedDate}
                onChange={handleDateChange}
                className="border"
                class="bg-gray-50 border border-gray-300  text-sm rounded-lg block w-full p-2.5 dark:bg-white-500  dark:text-black dark:focus:ring-red-500 dark:focus:border-red-500"

              >

                <option value="">Tarih Seçiniz</option>
                {/* Tarih seçenekleriniz burada listelenmelidir */}
                <option value="2024-03-29">29 Mart 2024</option>
                <option value="2024-03-30">30 Mart 2024</option>
                <option value="2024-03-31">31 Mart 2024</option>
                {/* ... diğer tarih seçenekleri */}
              </select>
            </div>
          </div>
        </div>

      </div>
      <div className="bg-white shadow-lg overflow-hidden mt-8 ">
        <div className="max-w-5xl mx-auto my-7">
          <h2 className="text-3xl font-bold font-montserrat text-center mb-5">Efes ve Meryemana Şirince Turu'nun detaylı planı</h2>

          {/* Tur Günleri Detayları */}
          {tourDays.map(({ day, date, description, imageUrl }) => (
            <div key={day} className={`flex flex-col md:flex-row ${day % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center gap-4 bg-gray-100 p-4 rounded-lg my-4 shadow-md`}>
              {/* Resim kısmı */}
              <div className="md:w-5/12 flex justify-center items-center">
                <img src={imageUrl} alt={`Gün ${day}`} className="rounded-lg shadow-sm max-w-sm h-auto" />
              </div>
              {/* Metin kısmı */}
              <div className={`md:w-7/12 space-y-2 ${day % 2 === 0 ? 'md:pl-8 md:border-l' : 'md:pr-8 md:border-r'} border-gray-300`}>
                <h3 className="text-2xl font-bold text-black">{`${day}. Gün "${date}"`}</h3>
                <p className="text-base font-medium text-black">{description}</p>
              </div>
            </div>
          ))}
          <div className="flex justify-center items-center gap-4 mb-8">
            {/* Satın Al Butonu */}
            <button className="px-6 py-3 bg-black text-white text-base font-normal font-montserrat leading-normal rounded-md shadow hover:shadow-lg transition-shadow duration-300 ease-in-out">
              Satın Al
            </button>
            {/* Bilgi Al Butonu */}
            <button className="px-6 py-3 text-black border border-black text-base font-normal font-montserrat leading-normal rounded-md shadow hover:shadow-lg transition-shadow duration-300 ease-in-out">
              Bilgi Al
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TourDetail;




