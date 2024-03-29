import React from "react";
import "../index.css";

const AboutUs = () => {
    return (
        <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 font-montserrat">
            <div className="flex flex-col justify-start items-start gap-2.5">
                <div className="py-10 md:py-20">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-black">
                        Hayalinizdeki <span className="text-red-500">Rotayı</span> Çiziyoruz
                    </h1>
                    <div className="w-full h-1 bg-gray-300 my-6"></div>
                </div>
                <div className="flex flex-col justify-start items-center gap-6 md:flex-row ">
                    <div className="w-full">
                        <img className="w-full h-auto rounded-lg" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Destinasyon" />
                    </div>
                    <div className="w-full px-6">
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                            Müşterilerimizi hem Acentalar hem de Siz Gezginler olarak seçtiğimiz için çok mutluyuz. Gezginlerimize binlerce tur seçeneği arasından benzersiz fiyatlar ve benzersiz deneyimler sunarken, Acenta çözümlerimiz eşliğinde operasyonel faaliyetlerin devamlılığını sağlıyoruz.
                        </p>
                    </div>
                </div>

                <div className="py-10 md:py-20 w-full flex justify-center items-center">
                    <iframe
                        className="w-full h-[350px] md:w-9/12 lg:w-3/5 xl:w-4/5 md:h-[500px] rounded-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.4248365496356!2d32.75082831525116!3d39.86992197942934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f8d8a9d1e2b%3A0x2840b2bcca9a6a39!2sBilkent%20University!5e0!3m2!1sen!2str!4v1642620692123!5m2!1sen!2str"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>

                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="py-8 md:py-10 flex flex-col justify-start items-start gap-8">
                        <div className="text-neutral-800 text-2xl md:text-4xl font-semibold leading-tight">Vizyonumuz</div>
                        <div className="w-full h-1 bg-gray-300"></div>

                        <div className="flex flex-col gap-4 w-full md:flex-row md:justify-between">
                            <div className="text-neutral-800 text-lg md:text-2xl font-semibold leading-loose">
                                Etik Değerlerimiz
                            </div>
                            <div className="text-zinc-600 text-lg md:text-2xl font-normal leading-loose ml-5">
                                Bilgilerinizi depolamıyor veya reklam için kullanmıyoruz. Gizliliğiniz bizim için önemli. Arayüz akıcılığımızla eşsiz bir deneyim. Benzersiz deneyimlerinizi, ömürsüz kılıyoruz.
                            </div>
                        </div>

                    </div>
                </div>
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="py-8 md:py-10 flex flex-col justify-start items-start gap-8">
                        <div className="text-neutral-800 text-2xl md:text-4xl font-semibold leading-tight">Misyonumuz</div>
                        <div className="w-full h-1 bg-gray-300"></div>

                        <div className="flex flex-col gap-4 w-full md:flex-row md:justify-between">
                            <div className="text-neutral-800 text-lg md:text-2xl font-semibold leading-loose">
                                Etik Değerlerimiz
                            </div>
                            <div className="text-zinc-600 text-lg md:text-2xl font-normal leading-loose ml-5">
                                Bilgilerinizi depolamıyor veya reklam için kullanmıyoruz. Gizliliğiniz bizim için önemli. Arayüz akıcılığımızla eşsiz bir deneyim. Benzersiz deneyimlerinizi, ömürsüz kılıyoruz.
                            </div>
                        </div>

                    </div>
                </div>
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Full viewport height */}
                    <div className="flex flex-col justify-center items-center p-4 max-w-[90%] max-h-[90%]"> {/* Max width & height with padding */}

                        {/* Title */}
                        <div className="text-center text-red-500 text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-semibold">Ekibimiz</div>

                        {/* Image Container */}
                        <div className="w-full max-w-[452px] h-auto rounded-2xl mt-4"> {/* Width 100% with max-width, height auto for responsiveness */}
                            <img className="w-full h-full object-cover rounded-2xl" src="https://www.ctis.bilkent.edu.tr/ctis_projects/2023_2024_Fall_Spring/Team13.jpg" alt="Duygu Albayrak ve Team 13" />
                        </div>

                        {/* Caption */}
                        <div className="w-full text-center text-neutral-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mt-4">Duygu Albayrak ve Team 13</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AboutUs;
