import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { XIcon, PlusIcon } from '@heroicons/react/solid';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import tr from 'date-fns/locale/tr'; // Türkçe için
import Select from 'react-select';

registerLocale('tr', tr);

const AddNewEdit = () => {
  const { id } = useParams();
  const [tourName, setTourName] = useState("");
  const [tourDescription, setTourDescription] = useState("");
  const [tourDates, setTourDates] = useState({ start: new Date(), end: new Date() });
  const [dayPlans, setDayPlans] = useState([]);
  const [tourFeatures, setTourFeatures] = useState([""]);
  const [highlightedFeatures, setHighlightedFeatures] = useState([""]);

  useEffect(() => {
    const dayCount = Math.floor((tourDates.end - tourDates.start) / (1000 * 3600 * 24)) + 1;
    if (dayCount > 0) {
      setDayPlans(Array.from({ length: dayCount }, (_, index) => ({
        city: '',
        region: '',
        accommodation: '',
        title: '',
        itinerary: ''
      })));
    }
  }, [tourDates]);

  const handleFeatureChange = (index, value) => {
    const updatedFeatures = [...tourFeatures];
    updatedFeatures[index] = value;
    setTourFeatures(updatedFeatures);
  };

  const handleHighlightChange = (index, value) => {
    const updatedHighlights = [...highlightedFeatures];
    updatedHighlights[index] = value;
    setHighlightedFeatures(updatedHighlights);
  };

  const updateDayPlan = (index, field, value) => {
    const updatedPlans = [...dayPlans];
    updatedPlans[index][field] = value;
    setDayPlans(updatedPlans);
  };

  const addFeature = () => {
    if (tourFeatures.length < 10 && tourFeatures[tourFeatures.length - 1] !== "") {
      setTourFeatures([...tourFeatures, ""]);
    }
  };

  const addHighlight = () => {
    if (highlightedFeatures.length < 5 && highlightedFeatures[highlightedFeatures.length - 1] !== "") {
      setHighlightedFeatures([...highlightedFeatures, ""]);
    }
  };

  const removeFeature = (index, type) => {
    if (type === "feature") {
      const updatedFeatures = [...tourFeatures];
      updatedFeatures.splice(index, 1);
      setTourFeatures(updatedFeatures);
    } else if (type === "highlight") {
      const updatedHighlights = [...highlightedFeatures];
      updatedHighlights.splice(index, 1);
      setHighlightedFeatures(updatedHighlights);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <nav className="flex justify-between items-center py-4 border-b">
        <Link to="/" className="text-indigo-600 hover:text-indigo-800">Ana Sayfa</Link>
      </nav>

      <h2 className="text-2xl font-semibold mt-4 mb-8">Yeni Tur Düzenleme</h2>
      <div className="mb-4">
        <label htmlFor="tourName" className="block text-sm font-medium text-gray-700 mb-1">Tur Adı</label>
        <input
          type="text"
          id="tourName"
          className="w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-3 py-2 text-sm"
          value={tourName}
          onChange={(e) => setTourName(e.target.value)}
          placeholder="Tur Adı Giriniz"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="tourDescription" className="block text-sm font-medium text-gray-700 mb-1">Tanıtım Metni</label>
        <ReactQuill
          id="tourDescription"
          value={tourDescription}
          onChange={setTourDescription}
          theme="snow"
          className="bg-white"
          style={{ minHeight: "200px" }}
        />
      </div>
      {/* Özellikler kısmı */}
      <div className="mb-8">
        <label htmlFor="features" className="block text-sm font-medium text-gray-700 mb-1">Tur Özellikleri</label>
        {tourFeatures.map((feature, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              className="w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-3 py-2 text-sm mr-2"
              placeholder={`Özellik ${index + 1}`}
              value={feature}
              onChange={(e) => handleFeatureChange(index, e.target.value)}
            />
            {feature && <XIcon className="h-6 w-6 text-red-500 cursor-pointer" onClick={() => removeFeature(index, "feature")} />}
          </div>
        ))}
        <button onClick={addFeature} className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          <PlusIcon className="h-5 w-5 mr-2" />
          Ekle
        </button>
      </div>
      {/* Öne Çıkan Özellikler kısmı */}
      <div className="mb-8">
        <label htmlFor="highlights" className="block text-sm font-medium text-gray-700 mb-1">Öne Çıkanlar</label>
        {highlightedFeatures.map((highlight, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              className="w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-3 py-2 text-sm mr-2"
              placeholder={`Öne Çıkan Özellik ${index + 1}`}
              value={highlight}
              onChange={(e) => handleHighlightChange(index, e.target.value)}
            />
            {highlight && <XIcon className="h-6 w-6 text-red-500 cursor-pointer" onClick={() => removeFeature(index, "highlight")} />}
          </div>
        ))}
        <button onClick={addHighlight} className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          <PlusIcon className="h-5 w-5 mr-2" />
          Ekle
        </button>
      </div>

      <div className="flex gap-4 mb-8">
        <DatePicker
          selected={tourDates.start}
          onChange={(date) => setTourDates({ ...tourDates, start: date })}
          selectsStart
          startDate={tourDates.start}
          endDate={tourDates.end}
          locale="tr"
          className="w-full border-2 border-gray-300 rounded-md shadow-sm px-3 py-2 text-sm"
        />
        <DatePicker
          selected={tourDates.end}
          onChange={(date) => setTourDates({ ...tourDates, end: date })}
          selectsEnd
          startDate={tourDates.start}
          endDate={tourDates.end}
          minDate={tourDates.start}
          locale="tr"
          className="w-full border-2 border-gray-300 rounded-md shadow-sm px-3 py-2 text-sm"
        />
      </div>

      {dayPlans.map((plan, index) => (
        <div key={index} className="mb-6 p-4 border rounded shadow-lg space-y-4">
          <h3 className="text-lg font-semibold mb-2">{`${index + 1}. Gün Planı`}</h3>
          {/* Şehir, Bölge, Konaklama ve Başlık için inputlar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Şehir"
              className="w-full border-2 border-gray-300 rounded-md shadow-sm px-3 py-2 text-sm"
              value={plan.city}
              onChange={(e) => updateDayPlan(index, 'city', e.target.value)}
            />
            <input
              type="text"
              placeholder="Bölge"
              className="w-full border-2 border-gray-300 rounded-md shadow-sm px-3 py-2 text-sm"
              value={plan.region}
              onChange={(e) => updateDayPlan(index, 'region', e.target.value)}
            />
            <select
              className="w-full border-2 border-gray-300 rounded-md shadow-sm px-3 py-2 text-sm"
              value={plan.accommodation}
              onChange={(e) => updateDayPlan(index, 'accommodation', e.target.value)}>
              <option value="">Konaklama Seçin</option>
              <option value="Var">Var</option>
              <option value="Yok">Yok</option>
            </select>
            <input
              type="text"
              placeholder="Başlık"
              className="w-full border-2 border-gray-300 rounded-md shadow-sm px-3 py-2 text-sm"
              value={plan.title}
              onChange={(e) => updateDayPlan(index, 'title', e.target.value)}
            />
          </div>

          <ReactQuill
            theme="snow"
            value={plan.itinerary}
            onChange={(content) => updateDayPlan(index, 'itinerary', content)}
            className="bg-white p-2 rounded shadow"
            placeholder={`${index + 1}. Gün Programı`}
          />
        </div>
      ))}

      <div className="flex justify-between mt-8">
        <Link to="/" className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300">
          İptal
        </Link>
        <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
          Kaydet
        </button>
      </div>
    </div>
  );
};

export default AddNewEdit;
