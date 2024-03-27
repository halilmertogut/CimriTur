import React from "react";
import "../index.css"
const AboutUs = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-start items-start gap-2.5">
                <div className="py-10 md:py-20">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-black">
                        Hayalinizdeki <span className="text-red-600">Rotayı</span> Çiziyoruz
                    </h1>
                    <div className="w-3/4 md:w-full h-1 bg-gray-300 my-6"></div>
                </div>
                <div className="flex flex-col justify-start items-center gap-6 md:flex-row">
                    <div className="w-full md:w-[50%]">
                        <img className="w-full h-auto" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                    <div className="w-full md:w-[50%] px-6">
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                            Müşterilerimizi hem Agentalar hem de Siz Gezginler olarak seçtiğimiz için çok mutluyuz. Gezginlerimize binlerce tur seçeneği arasından benzersiz fiyatlar ve benzersiz deneyimler sunarken, Agenta çözümlerimiz eşliğinde operasyonel faaliyetlerin devamlılığını kılıyoruz.
                        </p>
                    </div>
                </div>


                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col justify-start items-center gap-16">
                        <div className="h-[351px] py-4 md:py-12 flex flex-col justify-center items-center gap-6">
                            <h2 className="text-4xl md:text-5xl font-semibold text-neutral-800 leading-tight">
                                Sizin için her zaman buradayız...
                            </h2>
                            <div className="w-3/4 md:w-full h-1 bg-gray-300 my-6"></div>
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                                Ekibimiz ile <span className="text-red-600">7/24</span> iletişimde kalabilirsiniz
                            </p>
                        </div>
                        <div className="h-[600px] py-10 md:py-20 flex flex-col justify-start items-center gap-6">
                            <div className="w-full md:h-[500%] md:w-[500%] px-6 flex justify-center">
                                <iframe
                                    className="w-full h-full rounded-lg"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.4248365496356!2d32.75082831525116!3d39.86992197942934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f8d8a9d1e2b%3A0x2840b2bcca9a6a39!2sBilkent%20University!5e0!3m2!1sen!2str!4v1642620692123!5m2!1sen!2str"
                                    allowfullscreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="h-[455px] px-10 py-8 flex-col justify-start items-start gap-8 md:px-20 md:py-10 md:flex md:flex-col">
                        <div className="h-[103px] flex-col justify-start items-start gap-2">
                            <div className="text-neutral-800 text-2xl md:text-4xl font-semibold font-Poppins leading-[88px]">Misyonumuz</div>
                            <div className="w-full h-1 bg-gray-300"></div>
                        </div>
                        <div className="h-60 flex-col justify-start items-start gap-4">
                            <div className="self-stretch justify-start items-start gap-14 inline-flex">
                                <div className="w-80 text-neutral-800 text-lg md:text-2xl font-semibold font-Poppins leading-loose">Servis Kalitesi</div>
                                <div className="grow shrink basis-0 text-zinc-600 text-lg md:text-2xl font-normal font-Poppins leading-loose">Sizlere verdiğimiz hizmetin her zaman arkasındayız.</div>
                            </div>
                            <div className="self-stretch justify-start items-start gap-14 inline-flex">
                                <div className="w-80 text-neutral-800 text-lg md:text-2xl font-semibold font-Poppins leading-loose">İhtiyaca Yönelik</div>
                                <div className="grow shrink basis-0 text-zinc-600 text-lg md:text-2xl font-normal font-Poppins leading-loose">Herkesin gezmeye hakkı olduğunu biliyoruz sizler için en iyi fiyatları derliyoruz.</div>
                            </div>
                            <div className="self-stretch justify-start items-start gap-14 inline-flex">
                                <div className="w-80 text-neutral-800 text-lg md:text-2xl font-semibold font-Poppins leading-loose">Tecrübe</div>
                                <div className="grow shrink basis-0 text-zinc-600 text-lg md:text-2xl font-normal font-Poppins leading-loose">Alanında uzman ekipler ile çalışıyoruz.</div>
                            </div>
                            <div className="self-stretch justify-start items-start gap-14 inline-flex">
                                <div className="w-80 text-neutral-800 text-lg md:text-2xl font-semibold font-Poppins leading-loose">Teknoloji</div>
                                <div className="grow shrink basis-0 text-zinc-600 text-lg md:text-2xl font-normal font-Poppins leading-loose">Yeni nesil teknolojilere ayak uydurarak, tecrübelerinizi en iyi kalitede tutuyoruz.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="h-[375px] px-10 py-8 flex-col justify-start items-start gap-8 md:px-20 md:py-10 md:flex md:flex-col">
                        <div className="h-[103px] flex-col justify-start items-start gap-2">
                            <div className="text-neutral-800 text-2xl md:text-4xl font-semibold font-Inter leading-[88px]">Vizyonumuz</div>
                            <div className="w-full h-1 bg-gray-300"></div>
                        </div>
                        <div className="h-40 flex-col justify-start items-start gap-4">
                            <div className="self-stretch justify-start items-start gap-14 inline-flex">
                                <div className="w-80 text-neutral-800 text-lg md:text-2xl font-semibold font-Inter leading-loose">Etik Değerleriniz</div>
                                <div className="grow shrink basis-0 text-zinc-600 text-lg md:text-2xl font-normal font-Inter leading-loose">Bilgilerinizi depolamıyor veya reklam için kullanmıyoruz. Gizliliğiniz bizim için önemli.</div>
                            </div>
                            <div className="self-stretch justify-start items-start gap-14 inline-flex">
                                <div className="w-80 text-neutral-800 text-lg md:text-2xl font-semibold font-Inter leading-loose">Kalitemiz</div>
                                <div className="grow shrink basis-0 text-zinc-600 text-lg md:text-2xl font-normal font-Inter leading-loose">Arayüz akıcılığımızla eşsiz bir deneyim.</div>
                            </div>
                            <div className="self-stretch justify-start items-start gap-14 inline-flex">
                                <div className="w-80 text-neutral-800 text-lg md:text-2xl font-semibold font-Inter leading-loose">Sürekliliğimiz</div>
                                <div className="grow shrink basis-0 text-zinc-600 text-lg md:text-2xl font-normal font-Inter leading-loose">Benzersiz deneyimlerinizi, ömürsüz kılıyoruz.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[1440px] h-[708px] relative">
                    <div className="w-[1440px] h-[708px] relative flex justify-center items-center">
                        <div className="absolute top-0 left-0 text-center w-full text-red-600 text-[64px] font-semibold font-['Poppins'] leading-[88px]">Ekibimiz</div>
                        <div className="w-[452px] h-[452px] rounded-2xl">
                            <img className="w-full h-full object-cover" src="https://www.ctis.bilkent.edu.tr/ctis_projects/2023_2024_Fall_Spring/Team13.jpg" alt="" />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full text-center text-neutral-800 text-4xl font-semibold font-['Inter'] leading-[48px]">Duygu Albayrak ve Team 13 </div>
                    </div>
                </div>

            </div>
        </div >
    );
}

export default AboutUs;