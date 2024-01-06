import { MdHighlight } from 'react-icons/md';
import { AiOutlineReload } from 'react-icons/ai';
import { RiLoginCircleLine } from 'react-icons/ri';

const FeaturesSection = () => {
  const features = [
    { icon: <MdHighlight />, title: 'Kolay Arama' },
    { icon: <AiOutlineReload />, title: 'Topluluk' },
    { icon: <RiLoginCircleLine />, title: 'Hızlı ve Güvenilir' },
  ];

  return (
    <section className=" px-6 py-16 w-full shadow-lg">
      <div className="bg-white rounded-full flex flex-wrap -mx-4 justify-center h-96">
        {features.map((feature, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-10">
            <div className="w-full flex-grow flex items-center flex-col">
              <div className="text-6xl">{feature.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
              <p className="mt-2 text-gray-600">
                {/* Feature description */}
                Random
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
