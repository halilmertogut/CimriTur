import React, { useState, useEffect } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import { Dialog } from '@headlessui/react';

const categories = ['Otel', 'Rehber', 'Acente', 'Ulaşım'];

const RatingComponent = ({ category, onChangeRating, rating }) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex items-center justify-between">
      <div>{category}:</div>
      <div className="flex">
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;

          return (
            <label key={index}>
              <input
                type="radio"
                name={`rating-${category}`}
                value={ratingValue}
                onClick={() => onChangeRating(category, ratingValue)}
                className="hidden"
              />
              <StarIcon
                className={`w-5 h-5 cursor-pointer ${
                  ratingValue <= (hover || rating) ? 'text-yellow-500' : 'text-gray-300'
                }`}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(0)}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
};

const FeedbackForm = () => {
  const [ratings, setRatings] = useState({});
  const [comment, setComment] = useState("Turun hem fiyatı uygun hem de rehber ile konaklama hizmeti çok iyidi.");
  const [consent, setConsent] = useState(false);
  const [overallRating, setOverallRating] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const sumRatings = Object.values(ratings).reduce((a, b) => a + b, 0);
    const numRatings = Object.values(ratings).length;
    setOverallRating(numRatings ? sumRatings / numRatings : 0);
  }, [ratings]);

  const handleChangeRating = (category, rating) => {
    setRatings((prev) => ({ ...prev, [category]: rating }));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleConsentChange = (event) => {
    setConsent(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(ratings, comment, consent);
    setIsOpen(false);
  };

  const handleWriteBlogClick = () => {
    console.log('Blog yazma sayfasına yönlendirilecek');
  };

  // Yıldızları yuvarlama işlevi
  const roundedStars = Math.floor(overallRating);

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-md rounded bg-white p-6">
          <Dialog.Title className="text-lg font-bold mb-4">GAP Turunu Nasıl Buldunuz?</Dialog.Title>
          <img src="https://via.placeholder.com/400x200.png?text=GAP+Tur+Resmi" alt="GAP Turu" className="w-full h-auto mb-4 rounded" />
          <div className="grid grid-cols-2 gap-4 mb-4">
            {categories.slice(0, 2).map((category) => (
              <RatingComponent
                key={category}
                category={category}
                rating={ratings[category]}
                onChangeRating={handleChangeRating}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {categories.slice(2, 4).map((category) => (
              <RatingComponent
                key={category}
                category={category}
                rating={ratings[category]}
                onChangeRating={handleChangeRating}
              />
            ))}
          </div>
          <div className="mt-4 flex items-center justify-center">
          <div className="flex items-center">
              <p className="font-bold text-lg mr-2">GENEL PUAN:</p>
              <p className="font-bold mr-2">{overallRating.toFixed(1)} / 5</p>
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <StarIcon
                    key={index}
                    className={`w-5 h-5 ${
                      index < roundedStars ? 'text-yellow-500' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <textarea
            className="w-full p-2 border rounded mt-4"
            placeholder="Yorumunuz"
            value={comment}
            onChange={handleCommentChange}
            maxLength={2000}
          />
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              checked={consent}
              onChange={handleConsentChange}
              id="consentCheckbox"
            />
            <label htmlFor="consentCheckbox" className="ml-2">
              Yorumlarımın kullanılmasına izin veriyorum. <a href="/aydinlatma-metni" target="_blank" className="text-blue-600 hover:underline">Aydınlatma Metni</a>
            </label>
          </div>
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={handleSubmit}
          >
            Yorum Yap
          </button>
          <button
            type="button"
            onClick={handleWriteBlogClick}
            className="bg-green-500 text-white p-2 rounded mt-2 hover:bg-green-600 w-full"
          >
            Bu Tur Hakkında Blog Yaz
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default FeedbackForm;
