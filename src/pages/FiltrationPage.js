import React from "react";

const FiltrationPage = () => {
    return (
        <div className="w-[1512px] h-[4348px] justify-start items-start gap-2.5 inline-flex">
            <div className="w-[1512px] h-[4348px] pb-28 bg-white flex-col justify-start items-center inline-flex">
                <div className="self-stretch h-[109px] flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch text-black text-5xl font-bold font-['Roboto'] leading-[57.60px]">Turlar</div>
                    <div className="self-stretch text-black text-lg font-normal font-['Roboto'] leading-[27px]">Herşey kendinize en uygun turları bulabilmeniz için</div>
                </div>
                <div className="w-[1280px] justify-start items-start gap-[50px] inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-center items-start gap-6 inline-flex">
                        <div className="self-stretch justify-between items-center inline-flex">
                            <div className="text-black text-2xl font-semibold font-['Poppins'] leading-[33.60px]">Filters</div>
                            <div className="justify-center items-center gap-2 flex">
                                <div className="text-black text-base font-normal font-['Poppins'] leading-normal">Clear all</div>
                            </div>
                        </div>
                        <div className="self-stretch text-black text-sm font-normal font-['Poppins'] leading-[21px]">Showing 0 of 100</div>
                        <div className="self-stretch h-[120px] flex-col justify-start items-start flex">
                            <div className="self-stretch h-10 py-2 flex-col justify-start items-start gap-2.5 flex">
                                <div className="self-stretch text-black text-base font-normal font-['Roboto'] leading-normal">All</div>
                            </div>
                            <div className="self-stretch h-10 py-2 flex-col justify-start items-start gap-2.5 flex">
                                <div className="self-stretch text-black text-base font-normal font-['Roboto'] leading-normal">Category One</div>
                            </div>
                            <div className="self-stretch h-10 py-2 flex-col justify-start items-start gap-2.5 flex">
                                <div className="self-stretch text-black text-base font-normal font-['Roboto'] leading-normal">Category Two</div>
                            </div>
                        </div>
                        <div className="self-stretch h-[1723px] flex-col justify-start items-start gap-5 flex">
                            <div className="self-stretch h-[777px] flex-col justify-start items-start flex">
                                <div className="self-stretch h-[115px] flex-col justify-start items-start flex">
                                    <div className="self-stretch py-5 border-t border-black justify-start items-center inline-flex">
                                        <div className="grow shrink basis-0 text-black text-lg font-semibold font-['Roboto'] leading-[27px]">Hareket Noktası</div>
                                        <div className="justify-center items-center gap-2 flex">
                                            <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Clear</div>
                                        </div>
                                    </div>
                                    <div className="self-stretch p-3 bg-white border border-black justify-start items-center gap-2 inline-flex">
                                        <div className="w-6 h-6 relative"></div>
                                        <div className="grow shrink basis-0 text-neutral-600 text-base font-normal font-['Roboto'] leading-normal">Keyword</div>
                                    </div>
                                </div>
                                <div className="self-stretch h-[115px] py-[5px] flex-col justify-start items-start flex">
                                    <div className="self-stretch py-5 border-t border-black justify-start items-center inline-flex">
                                        <div className="grow shrink basis-0 text-black text-lg font-semibold font-['Roboto'] leading-[27px]">Gitmek İstediğiniz Bölge</div>
                                        <div className="justify-center items-center gap-2 flex">
                                            <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Clear</div>
                                        </div>
                                    </div>
                                    <div className="self-stretch p-3 bg-white border border-black justify-start items-center gap-2 inline-flex">
                                        <div className="w-6 h-6 relative"></div>
                                        <div className="grow shrink basis-0 text-neutral-600 text-base font-normal font-['Roboto'] leading-normal">Keyword</div>
                                    </div>
                                </div>
                                <div className="self-stretch py-5 border-t border-black justify-start items-center inline-flex">
                                    <div className="grow shrink basis-0 text-black text-lg font-semibold font-['Roboto'] leading-[27px]">Dönem</div>
                                    <div className="justify-center items-center gap-2 flex">
                                        <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Clear</div>
                                    </div>
                                </div>
                                <div className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                                    <div className="justify-start items-center gap-2 flex">
                                        <div className="w-[18px] h-[18px] relative bg-white border border-black"></div>
                                        <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Ocak</div>
                                    </div>
                                </div>
                                <div className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                                    <div className="justify-start items-center gap-2 flex">
                                        <div className="w-[18px] h-[18px] relative bg-white border border-black"></div>
                                        <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Şubat</div>
                                    </div>
                                </div>
                                <div className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                                    <div className="justify-start items-center gap-2 flex">
                                        <div className="w-[18px] h-[18px] relative bg-white border border-black"></div>
                                        <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Mart</div>
                                    </div>
                                </div>
                                <div className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                                    <div className="justify-start items-center gap-2 flex">
                                        <div className="w-[18px] h-[18px] relative bg-white border border-black"></div>
                                        <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Nisan</div>
                                    </div>
                                </div>
                                <div className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                                    <div className="justify-start items-center gap-2 flex">
                                        <div className="w-[18px] h-[18px] relative bg-white border border-black"></div>
                                        <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Mayıs</div>
                                    </div>
                                </div>
                                <div className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                                    <div className="justify-start items-center gap-2 flex">
                                        <div className="w-[18px] h-[18px] relative bg-white border border-black"></div>
                                        <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Haziran</div>
                                    </div>
                                </div>
                                <div className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                                    <div className="justify-start items-center gap-2 flex">
                                        <div className="w-[18px] h-[18px] relative bg-white border border-black"></div>
                                        <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Temmuz</div>
                                    </div>
                                </div>
                                <div className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                                    <div className="justify-start items-center gap-2 flex">
                                        <div className="w-[18px] h-[18px] relative bg-white border border-black"></div>
                                        <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Ağustos</div>
                                    </div>
                                </div>
                                <div className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                                    <div className="justify-start items-center gap-2 flex">
                                        <div className="w-[18px] h-[18px] relative bg-white border border-black"></div>
                                        <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Eylül</div>
                                    </div>
                                </div>
                                <div className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                                    <div className="justify-start items-center gap-2 flex">
                                        <div className="w-[18px] h-[18px] relative bg-white border border-black"></div>
                                        <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Ekim</div>
                                    </div>
                                </div>
                                <div className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                                    <div className="justify-start items-center gap-2 flex">
                                        <div className="w-[18px] h-[18px] relative bg-white border border-black"></div>
                                        <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Kasım</div>
                                    </div>
                                </div>
                                <div className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                                    <div className="justify-start items-center gap-2 flex">
                                        <div className="w-[18px] h-[18px] relative bg-white border border-black"></div>
                                        <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Aralık</div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-[906px] flex-col justify-start items-start flex">
                                <div className="self-stretch h-[125px] flex-col justify-start items-start flex">
                                    <div className="w-[280px] h-[125px] px-1.5 flex-col justify-start items-start flex">
                                        <div className="self-stretch py-5 border-t border-black justify-start items-center inline-flex">
                                            <div className="grow shrink basis-0 text-black text-lg font-semibold font-['Roboto'] leading-[27px]">Fiyat Aralığı</div>
                                            <div className="justify-center items-center gap-2 flex">
                                                <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Clear</div>
                                            </div>
                                        </div>
                                        <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                                            <div className="h-12 p-3 bg-white border border-black justify-start items-center gap-2 flex">
                                                <div className="grow shrink basis-0 text-neutral-600 text-base font-normal font-['Roboto'] leading-normal">Min.</div>
                                            </div>
                                            <div className="h-12 p-3 bg-white border border-black justify-start items-center gap-2 flex">
                                                <div className="grow shrink basis-0 text-neutral-600 text-base font-normal font-['Roboto'] leading-normal">Max.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch h-[211px] flex-col justify-start items-start flex">
                                    <div className="self-stretch py-5 border-t border-black justify-start items-center inline-flex">
                                        <div className="grow shrink basis-0 text-black text-lg font-semibold font-['Roboto'] leading-[27px]">Konaklama Türü</div>
                                        <div className="justify-center items-center gap-2 flex">
                                            <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Clear</div>
                                        </div>
                                    </div>
                                    <div className="self-stretch py-1 justify-start items-center gap-2 inline-flex">
                                        <div className="px-5 py-2 bg-black justify-center items-center gap-2 flex">
                                            <div className="text-white text-base font-normal font-['Roboto'] leading-normal">Otel</div>
                                        </div>
                                        <div className="px-5 py-2 border border-black justify-center items-center gap-2 flex">
                                            <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Tatil Evi</div>
                                        </div>
                                    </div>
                                    <div className="self-stretch py-1 justify-start items-center gap-2 inline-flex">
                                        <div className="px-5 py-2 border border-black justify-center items-center gap-2 flex">
                                            <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Hostel</div>
                                        </div>
                                        <div className="px-5 py-2 border border-black justify-center items-center gap-2 flex">
                                            <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Dağ Evi</div>
                                        </div>
                                    </div>
                                    <div className="self-stretch py-1 justify-start items-center gap-2 inline-flex">
                                        <div className="px-5 py-2 border border-black justify-center items-center gap-2 flex">
                                            <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Çadır</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-1.5 flex-col justify-start items-center flex">
                                    <div className="py-5 border-t border-black justify-start items-center inline-flex">
                                        <div className="w-[231px] text-black text-lg font-semibold font-['Roboto'] leading-[27px]">Yıldız</div>
                                        <div className="justify-center items-center gap-2 flex">
                                            <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Clear</div>
                                        </div>
                                    </div>
                                    <div className="justify-start items-start gap-2.5 inline-flex">
                                        <div className="w-[25px] h-[25px] relative"></div>
                                        <div className="w-[25px] h-[25px] relative"></div>
                                        <div className="w-[25px] h-[25px] relative"></div>
                                        <div className="w-[25px] h-[25px] relative"></div>
                                        <div className="w-[25px] h-[25px] relative"></div>
                                    </div>
                                </div>
                                <div className="self-stretch py-5 border-t border-black justify-start items-center inline-flex">
                                    <div className="grow shrink basis-0 text-black text-lg font-semibold font-['Roboto'] leading-[27px]">Genel yıldız derecelendirmesi</div>
                                    <div className="justify-center items-center gap-2 flex">
                                        <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Clear</div>
                                    </div>
                                </div>
                                <div className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                                    <div className="justify-start items-center gap-2 flex">
                                        <div className="w-[18px] h-[18px] relative bg-white border border-black"></div>
                                        <div className="text-black text-base font-normal font-['Roboto'] leading-normal">1 Yıldız ve Üzeri</div>
                                    </div>
                                </div>
                                <div className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                                    <div className="justify-start items-center gap-2 flex">
                                        <div className="w-[18px] h-[18px] relative bg-white border border-black"></div>
                                        <div className="text-black text-base font-normal font-['Roboto'] leading-normal">2 Yıldız ve Üzeri</div>
                                    </div>
                                </div>
                                <div className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                                    <div className="justify-start items-center gap-2 flex">
                                        <div className="w-[18px] h-[18px] relative bg-white border border-black"></div>
                                        <div className="text-black text-base font-normal font-['Roboto'] leading-normal">3 Yıldız ve üzeri </div>
                                    </div>
                                </div>
                                <div className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                                    <div className="justify-start items-center gap-2 flex">
                                        <div className="w-[18px] h-[18px] relative bg-white border border-black"></div>
                                        <div className="text-black text-base font-normal font-['Roboto'] leading-normal">4 Yıldız ve Üzeri</div>
                                    </div>
                                </div>
                                <div className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                                    <div className="justify-start items-center gap-2 flex">
                                        <div className="w-[18px] h-[18px] relative bg-white border border-black"></div>
                                        <div className="text-black text-base font-normal font-['Roboto'] leading-normal">4.5 Yıldız ve Üzeri</div>
                                    </div>
                                </div>
                                <div className="self-stretch h-[211px] flex-col justify-start items-start flex">
                                    <div className="self-stretch py-5 border-t border-black justify-start items-center inline-flex">
                                        <div className="grow shrink basis-0 text-black text-lg font-semibold font-['Roboto'] leading-[27px]">Temalar</div>
                                        <div className="justify-center items-center gap-2 flex">
                                            <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Clear</div>
                                        </div>
                                    </div>
                                    <div className="self-stretch py-1 justify-start items-center gap-2 inline-flex">
                                        <div className="px-5 py-2 bg-black justify-center items-center gap-2 flex">
                                            <div className="text-white text-base font-normal font-['Roboto'] leading-normal">Deniz</div>
                                        </div>
                                        <div className="px-5 py-2 border border-black justify-center items-center gap-2 flex">
                                            <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Macera</div>
                                        </div>
                                    </div>
                                    <div className="self-stretch py-1 justify-start items-center gap-2 inline-flex">
                                        <div className="px-5 py-2 border border-black justify-center items-center gap-2 flex">
                                            <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Doğa ve Spor</div>
                                        </div>
                                        <div className="px-5 py-2 border border-black justify-center items-center gap-2 flex">
                                            <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Eğlence</div>
                                        </div>
                                    </div>
                                    <div className="self-stretch py-1 justify-start items-center gap-2 inline-flex">
                                        <div className="px-5 py-2 border border-black justify-center items-center gap-2 flex">
                                            <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Tarih ve Kültür</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-6 inline-flex">
                        <div className="w-[950px] justify-between items-center inline-flex">
                            <div className="pl-4 pr-3 py-2 bg-zinc-100 justify-center items-center gap-2 flex">
                                <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Tag</div>
                                <div className="p-1 justify-center items-center gap-2.5 flex"></div>
                            </div>
                            <div className="justify-center items-center gap-2 flex">
                                <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Sort by</div>
                                <div className="w-6 h-6 relative"></div>
                            </div>
                        </div>
                        <div className="w-[950px] h-[1936px] relative border border-black border-opacity-20">
                            <div className="w-[300px] h-[450px] left-0 top-0 absolute flex-col justify-center items-center inline-flex">
                                <div className="w-[300px] h-[450px] relative">
                                    <div className="w-[300px] h-[450px] left-0 top-0 absolute bg-gradient-to-t from-black to-black rounded-[20px]"></div>
                                    <div className="w-[300px] h-[71px] px-[15px] left-0 top-[379px] absolute bg-black bg-opacity-0 rounded-bl-[20px] rounded-br-[20px] backdrop-blur-sm flex-col justify-center items-start inline-flex">
                                        <div className="justify-center items-start gap-20 inline-flex">
                                            <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">Efes Antik Kent</div>
                                            <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">2 Gün</div>
                                        </div>
                                        <div className="w-[269px] h-[34px] justify-between items-start inline-flex">
                                            <div className="h-[34px] py-0.5 justify-start items-center gap-2.5 flex">
                                                <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">İzmir</div>
                                            </div>
                                            <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">1299 TL</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[311px] h-[450px] left-[319px] top-[-3px] absolute flex-col justify-center items-center inline-flex">
                                <div className="w-[311px] h-[450px] relative">
                                    <img className="w-[311px] h-[450px] left-0 top-0 absolute rounded-[20px]" src="https://via.placeholder.com/311x450" />
                                    <div className="w-[311px] h-[71px] px-[15px] left-0 top-[379px] absolute bg-black bg-opacity-0 rounded-bl-[20px] rounded-br-[20px] backdrop-blur-sm flex-col justify-center items-start inline-flex">
                                        <div className="pr-5 justify-start items-start gap-[141px] inline-flex">
                                            <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">Anıtkabir</div>
                                            <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">2 Gün</div>
                                        </div>
                                        <div className="w-[277px] h-[34px] justify-between items-start inline-flex">
                                            <div className="h-[34px] py-0.5 justify-start items-center gap-2.5 flex">
                                                <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">Ankara</div>
                                            </div>
                                            <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">1299 TL</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[300px] h-[450px] left-[647px] top-0 absolute">
                                <div className="w-[300px] h-[450px] left-0 top-0 absolute">
                                    <img className="w-[299.86px] h-[450px] left-[0.14px] top-0 absolute rounded-[20px]" src="https://via.placeholder.com/300x450" />
                                    <div className="w-[300px] h-[71px] px-[15px] left-0 top-[379px] absolute bg-black bg-opacity-0 rounded-bl-[20px] rounded-br-[20px] backdrop-blur-sm flex-col justify-center items-start inline-flex">
                                        <div className="justify-end items-start gap-[50px] inline-flex">
                                            <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">Dolmabahçe Sarayı</div>
                                            <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">2 Gün</div>
                                        </div>
                                        <div className="w-[269px] h-[34px] justify-between items-start inline-flex">
                                            <div className="h-[34px] py-0.5 justify-start items-center gap-2.5 flex">
                                                <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">İstanbul</div>
                                            </div>
                                            <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">1299 TL</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[117px] pb-[7.12px] left-0 top-[56.72px] absolute origin-top-left rotate-[-29deg] bg-white bg-opacity-10 shadow justify-center items-center inline-flex">
                                    <div className="w-[117px] h-[22.88px] text-red-600 text-xl font-semibold font-['Roboto'] leading-[30px]">%50 İndirimli</div>
                                </div>
                            </div>
                            <div className="w-[300px] h-[450px] left-0 top-[486px] absolute">
                                <div className="w-[300px] h-[450px] left-0 top-0 absolute">
                                    <div className="w-[300px] h-[450px] left-0 top-0 absolute bg-gradient-to-t from-black to-black rounded-[20px]"></div>
                                    <div className="w-[300px] h-[71px] px-[15px] left-0 top-[379px] absolute bg-black bg-opacity-0 rounded-bl-[20px] rounded-br-[20px] backdrop-blur-sm flex-col justify-center items-start inline-flex">
                                        <div className="justify-end items-start gap-[86px] inline-flex">
                                            <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">Efes Antik Kent</div>
                                            <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">2 Gün</div>
                                        </div>
                                        <div className="w-[269px] h-[34px] justify-between items-start inline-flex">
                                            <div className="h-[34px] py-0.5 justify-start items-center gap-2.5 flex">
                                                <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">İzmir</div>
                                            </div>
                                            <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">1299 TL</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[117px] pb-[7.12px] left-0 top-[56.72px] absolute origin-top-left rotate-[-29deg] bg-white bg-opacity-10 shadow justify-center items-center inline-flex">
                                    <div className="w-[117px] h-[22.88px] text-red-600 text-xl font-semibold font-['Roboto'] leading-[30px]">%50 İndirimli</div>
                                </div>
                            </div>
                            <div className="w-[311px] h-[450px] left-[323px] top-[486px] absolute flex-col justify-center items-center inline-flex">
                                <div className="w-[311px] h-[450px] relative">
                                    <img className="w-[311px] h-[450px] left-0 top-0 absolute rounded-[20px]" src="https://via.placeholder.com/311x450" />
                                    <div className="w-[311px] h-[71px] px-[15px] left-0 top-[379px] absolute bg-black bg-opacity-0 rounded-bl-[20px] rounded-br-[20px] backdrop-blur-sm flex-col justify-center items-start inline-flex">
                                        <div className="w-[269px] pr-[187px] justify-start items-center inline-flex">
                                            <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">Anıtkabir</div>
                                        </div>
                                        <div className="w-[277px] h-[34px] justify-between items-start inline-flex">
                                            <div className="h-[34px] py-0.5 justify-start items-center gap-2.5 flex">
                                                <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">Ankara</div>
                                            </div>
                                            <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">1299 TL</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[300px] h-[450px] left-[651px] top-[483px] absolute flex-col justify-center items-center inline-flex">
                                <div className="w-[300px] h-[450px] relative">
                                    <img className="w-[299.86px] h-[450px] left-0 top-0 absolute rounded-[20px]" src="https://via.placeholder.com/300x450" />
                                    <div className="w-[300px] h-[71px] px-[15px] left-0 top-[379px] absolute bg-black bg-opacity-0 rounded-bl-[20px] rounded-br-[20px] backdrop-blur-sm flex-col justify-center items-start inline-flex">
                                        <div className="pr-24 justify-start items-center inline-flex">
                                            <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">Dolmabahçe Sarayı</div>
                                        </div>
                                        <div className="w-[269px] h-[34px] justify-between items-start inline-flex">
                                            <div className="h-[34px] py-0.5 justify-start items-center gap-2.5 flex">
                                                <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">İstanbul</div>
                                            </div>
                                            <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">1299 TL</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[300px] h-[450px] left-0 top-[968px] absolute flex-col justify-center items-center inline-flex">
                                <div className="w-[300px] h-[450px] relative">
                                    <div className="w-[300px] h-[450px] left-0 top-0 absolute bg-gradient-to-t from-black to-black rounded-[20px]"></div>
                                    <div className="w-[300px] h-[71px] px-[15px] left-0 top-[379px] absolute bg-black bg-opacity-0 rounded-bl-[20px] rounded-br-[20px] backdrop-blur-sm flex-col justify-center items-start inline-flex">
                                        <div className="justify-center items-start gap-20 inline-flex">
                                            <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">Efes Antik Kent</div>
                                            <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">2 Gün</div>
                                        </div>
                                        <div className="w-[269px] h-[34px] justify-between items-start inline-flex">
                                            <div className="h-[34px] py-0.5 justify-start items-center gap-2.5 flex">
                                                <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">İzmir</div>
                                            </div>
                                            <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">1299 TL</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[311px] h-[450px] left-[319px] top-[968px] absolute flex-col justify-center items-center inline-flex">
                                <div className="w-[311px] h-[450px] relative">
                                    <img className="w-[311px] h-[450px] left-0 top-0 absolute rounded-[20px]" src="https://via.placeholder.com/311x450" />
                                    <div className="w-[311px] h-[71px] px-[15px] left-0 top-[379px] absolute bg-black bg-opacity-0 rounded-bl-[20px] rounded-br-[20px] backdrop-blur-sm flex-col justify-center items-start inline-flex">
                                        <div className="pr-5 justify-start items-start gap-[141px] inline-flex">
                                            <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">Anıtkabir</div>
                                            <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">2 Gün</div>
                                        </div>
                                        <div className="w-[277px] h-[34px] justify-between items-start inline-flex">
                                            <div className="h-[34px] py-0.5 justify-start items-center gap-2.5 flex">
                                                <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">Ankara</div>
                                            </div>
                                            <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">1299 TL</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[300px] h-[450px] left-[649px] top-[968px] absolute">
                                <div className="w-[300px] h-[450px] left-0 top-0 absolute">
                                    <img className="w-[299.86px] h-[450px] left-[0.14px] top-0 absolute rounded-[20px]" src="https://via.placeholder.com/300x450" />
                                    <div className="w-[300px] h-[71px] px-[15px] left-0 top-[379px] absolute bg-black bg-opacity-0 rounded-bl-[20px] rounded-br-[20px] backdrop-blur-sm flex-col justify-center items-start inline-flex">
                                        <div className="justify-end items-start gap-[50px] inline-flex">
                                            <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">Dolmabahçe Sarayı</div>
                                            <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">2 Gün</div>
                                        </div>
                                        <div className="w-[269px] h-[34px] justify-between items-start inline-flex">
                                            <div className="h-[34px] py-0.5 justify-start items-center gap-2.5 flex">
                                                <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">İstanbul</div>
                                            </div>
                                            <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">1299 TL</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[117px] pb-[7.12px] left-0 top-[56.72px] absolute origin-top-left rotate-[-29deg] bg-white bg-opacity-10 shadow justify-center items-center inline-flex">
                                    <div className="w-[117px] h-[22.88px] text-red-600 text-xl font-semibold font-['Roboto'] leading-[30px]">%50 İndirimli</div>
                                </div>
                            </div>
                            <div className="w-[300px] h-[450px] left-0 top-[1454px] absolute">
                                <div className="w-[300px] h-[450px] left-0 top-0 absolute">
                                    <div className="w-[300px] h-[450px] left-0 top-0 absolute bg-gradient-to-t from-black to-black rounded-[20px]"></div>
                                    <div className="w-[300px] h-[71px] px-[15px] left-0 top-[379px] absolute bg-black bg-opacity-0 rounded-bl-[20px] rounded-br-[20px] backdrop-blur-sm flex-col justify-center items-start inline-flex">
                                        <div className="justify-end items-start gap-[86px] inline-flex">
                                            <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">Efes Antik Kent</div>
                                            <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">2 Gün</div>
                                        </div>
                                        <div className="w-[269px] h-[34px] justify-between items-start inline-flex">
                                            <div className="h-[34px] py-0.5 justify-start items-center gap-2.5 flex">
                                                <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">İzmir</div>
                                            </div>
                                            <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">1299 TL</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[117px] pb-[7.12px] left-0 top-[56.72px] absolute origin-top-left rotate-[-29deg] bg-white bg-opacity-10 shadow justify-center items-center inline-flex">
                                    <div className="w-[117px] h-[22.88px] text-red-600 text-xl font-semibold font-['Roboto'] leading-[30px]">%50 İndirimli</div>
                                </div>
                            </div>
                            <div className="w-[311px] h-[450px] left-[319px] top-[1454px] absolute flex-col justify-center items-center inline-flex">
                                <div className="w-[311px] h-[450px] relative">
                                    <img className="w-[311px] h-[450px] left-0 top-0 absolute rounded-[20px]" src="https://via.placeholder.com/311x450" />
                                    <div className="w-[311px] h-[71px] px-[15px] left-0 top-[379px] absolute bg-black bg-opacity-0 rounded-bl-[20px] rounded-br-[20px] backdrop-blur-sm flex-col justify-center items-start inline-flex">
                                        <div className="w-[269px] pr-[187px] justify-start items-center inline-flex">
                                            <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">Anıtkabir</div>
                                        </div>
                                        <div className="w-[277px] h-[34px] justify-between items-start inline-flex">
                                            <div className="h-[34px] py-0.5 justify-start items-center gap-2.5 flex">
                                                <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">Ankara</div>
                                            </div>
                                            <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">1299 TL</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[300px] h-[450px] left-[649px] top-[1454px] absolute flex-col justify-center items-center inline-flex">
                                <div className="w-[300px] h-[450px] relative">
                                    <img className="w-[299.86px] h-[450px] left-0 top-0 absolute rounded-[20px]" src="https://via.placeholder.com/300x450" />
                                    <div className="w-[300px] h-[71px] px-[15px] left-0 top-[379px] absolute bg-black bg-opacity-0 rounded-bl-[20px] rounded-br-[20px] backdrop-blur-sm flex-col justify-center items-start inline-flex">
                                        <div className="pr-24 justify-start items-center inline-flex">
                                            <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">Dolmabahçe Sarayı</div>
                                        </div>
                                        <div className="w-[269px] h-[34px] justify-between items-start inline-flex">
                                            <div className="h-[34px] py-0.5 justify-start items-center gap-2.5 flex">
                                                <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">İstanbul</div>
                                            </div>
                                            <div className="text-white text-xl font-semibold font-['Roboto'] leading-[30px]">1299 TL</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch grow shrink basis-0 px-16 py-28 bg-zinc-100 flex-col justify-start items-center gap-20 flex">
                    <div className="self-stretch h-[877px] flex-col justify-start items-center gap-20 flex">
                        <div className="h-[136px] flex-col justify-start items-center gap-6 flex">
                            <div className="self-stretch text-center text-black text-5xl font-bold font-['Roboto'] leading-[57.60px]">FAQs</div>
                            <div className="self-stretch text-center text-black text-lg font-normal font-['Roboto'] leading-[27px]">Find answers to common questions about tour bookings, cancellations, and what to expect on our tours.</div>
                        </div>
                        <div className="self-stretch h-[424px] flex-col justify-start items-start gap-4 flex">
                            <div className="self-stretch px-6 py-5 border border-black justify-center items-center inline-flex">
                                <div className="grow shrink basis-0 text-black text-lg font-bold font-['Roboto'] leading-[27px]">How do I book a tour?</div>
                                <div className="w-8 h-8 relative"></div>
                            </div>
                            <div className="self-stretch px-6 py-5 border border-black justify-center items-center inline-flex">
                                <div className="grow shrink basis-0 text-black text-lg font-bold font-['Roboto'] leading-[27px]">Can I cancel my booking?</div>
                                <div className="w-8 h-8 relative"></div>
                            </div>
                            <div className="self-stretch px-6 py-5 border border-black justify-center items-center inline-flex">
                                <div className="grow shrink basis-0 text-black text-lg font-bold font-['Roboto'] leading-[27px]">What should I bring?</div>
                                <div className="w-8 h-8 relative"></div>
                            </div>
                            <div className="self-stretch px-6 py-5 border border-black justify-center items-center inline-flex">
                                <div className="grow shrink basis-0 text-black text-lg font-bold font-['Roboto'] leading-[27px]">Are meals included?</div>
                                <div className="w-8 h-8 relative"></div>
                            </div>
                            <div className="self-stretch px-6 py-5 border border-black justify-center items-center inline-flex">
                                <div className="grow shrink basis-0 text-black text-lg font-bold font-['Roboto'] leading-[27px]">Is transportation provided?</div>
                                <div className="w-8 h-8 relative"></div>
                            </div>
                        </div>
                        <div className="self-stretch h-[157px] flex-col justify-start items-center gap-6 flex">
                            <div className="self-stretch h-[85px] flex-col justify-start items-center gap-4 flex">
                                <div className="self-stretch text-center text-black text-[32px] font-bold font-['Roboto'] leading-[41.60px]">Still have questions?</div>
                                <div className="self-stretch text-center text-black text-lg font-normal font-['Roboto'] leading-[27px]">Contact our support team for assistance.</div>
                            </div>
                            <div className="w-[104px] px-6 py-3 border border-black justify-center items-center gap-2 inline-flex">
                                <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Button</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch h-[435.89px] px-16 py-28 bg-white flex-col justify-start items-center gap-20 flex">
                    <div className="self-stretch h-[211.89px] flex-col justify-start items-center gap-8 flex">
                        <div className="justify-start items-start gap-1 inline-flex"></div>
                        <div className="self-stretch text-center text-black text-2xl font-bold font-['Roboto'] leading-[33.60px]">The tour was absolutely amazing! The sights were breathtaking and the guides were knowledgeable and friendly. Highly recommend!</div>
                        <div className="justify-start items-center gap-5 inline-flex">
                            <img className="w-14 h-14 rounded-full" src="https://via.placeholder.com/56x56" />
                            <div className="flex-col justify-start items-start inline-flex">
                                <div className="text-black text-base font-semibold font-['Roboto'] leading-normal">John Smith</div>
                                <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Travel Enthusiast</div>
                            </div>
                            <div className="w-[61px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                            <div className="w-[140px] h-14 relative"></div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch h-[542px] px-16 py-20 bg-white flex-col justify-start items-start gap-20 flex">
                    <div className="self-stretch h-[248px] justify-start items-start gap-32 inline-flex">
                        <div className="w-[500px] flex-col justify-start items-start gap-6 inline-flex">
                            <div className="w-[63px] h-[27px] relative"></div>
                            <div className="self-stretch text-black text-base font-normal font-['Roboto'] leading-normal">Join our newsletter to stay up to date on features and releases.</div>
                            <div className="self-stretch h-[100px] flex-col justify-start items-start gap-4 flex">
                                <div className="self-stretch justify-start items-start gap-4 inline-flex">
                                    <div className="grow shrink basis-0 h-12 p-3 bg-white border border-black justify-start items-center gap-2 flex">
                                        <div className="grow shrink basis-0 text-black text-base font-normal font-['Roboto'] leading-normal">Placeholder</div>
                                    </div>
                                    <div className="h-12 px-6 py-3 border border-black justify-center items-center gap-2 flex">
                                        <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Button</div>
                                    </div>
                                </div>
                                <div className="self-stretch"><span classNameName="text-black text-xs font-normal font-['Roboto'] leading-[18px]">By subscribing you agree to with our </span><span classNameName="text-black text-xs font-normal font-['Roboto'] underline leading-[18px]">Privacy Policy</span><span classNameName="text-black text-xs font-normal font-['Roboto'] leading-[18px]"> and provide consent to receive updates from our company.</span></div>
                            </div>
                        </div>
                        <div className="grow shrink basis-0 h-60 justify-start items-start gap-10 flex">
                            <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                                <div className="self-stretch text-black text-base font-semibold font-['Roboto'] leading-normal">Column One</div>
                                <div className="self-stretch h-[185px] flex-col justify-start items-start flex">
                                    <div className="self-stretch py-2 justify-start items-start inline-flex">
                                        <div className="grow shrink basis-0 text-black text-sm font-normal font-['Roboto'] leading-[21px]">Link One</div>
                                    </div>
                                    <div className="self-stretch py-2 justify-start items-start inline-flex">
                                        <div className="grow shrink basis-0 text-black text-sm font-normal font-['Roboto'] leading-[21px]">Link Two</div>
                                    </div>
                                    <div className="self-stretch py-2 justify-start items-start inline-flex">
                                        <div className="grow shrink basis-0 text-black text-sm font-normal font-['Roboto'] leading-[21px]">Link Three</div>
                                    </div>
                                    <div className="self-stretch py-2 justify-start items-start inline-flex">
                                        <div className="grow shrink basis-0 text-black text-sm font-normal font-['Roboto'] leading-[21px]">Link Four</div>
                                    </div>
                                    <div className="self-stretch py-2 justify-start items-start inline-flex">
                                        <div className="grow shrink basis-0 text-black text-sm font-normal font-['Roboto'] leading-[21px]">Link Five</div>
                                    </div>
                                </div>
                            </div>
                            <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                                <div className="self-stretch text-black text-base font-semibold font-['Roboto'] leading-normal">Column Two</div>
                                <div className="self-stretch h-[185px] flex-col justify-start items-start flex">
                                    <div className="self-stretch py-2 justify-start items-start inline-flex">
                                        <div className="grow shrink basis-0 text-black text-sm font-normal font-['Roboto'] leading-[21px]">Link Six</div>
                                    </div>
                                    <div className="self-stretch py-2 justify-start items-start inline-flex">
                                        <div className="grow shrink basis-0 text-black text-sm font-normal font-['Roboto'] leading-[21px]">Link Seven</div>
                                    </div>
                                    <div className="self-stretch py-2 justify-start items-start inline-flex">
                                        <div className="grow shrink basis-0 text-black text-sm font-normal font-['Roboto'] leading-[21px]">Link Eight</div>
                                    </div>
                                    <div className="self-stretch py-2 justify-start items-start inline-flex">
                                        <div className="grow shrink basis-0 text-black text-sm font-normal font-['Roboto'] leading-[21px]">Link Nine</div>
                                    </div>
                                    <div className="self-stretch py-2 justify-start items-start inline-flex">
                                        <div className="grow shrink basis-0 text-black text-sm font-normal font-['Roboto'] leading-[21px]">Link Ten</div>
                                    </div>
                                </div>
                            </div>
                            <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                                <div className="self-stretch text-black text-base font-semibold font-['Roboto'] leading-normal">Follow Us</div>
                                <div className="self-stretch h-[200px] flex-col justify-start items-start flex">
                                    <div className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                                        <div className="w-6 h-6 relative"></div>
                                        <div className="text-black text-sm font-normal font-['Roboto'] leading-[21px]">Facebook</div>
                                    </div>
                                    <div className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                                        <div className="w-6 h-6 relative"></div>
                                        <div className="text-black text-sm font-normal font-['Roboto'] leading-[21px]">Instagram</div>
                                    </div>
                                    <div className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                                        <div className="w-6 h-6 relative"></div>
                                        <div className="text-black text-sm font-normal font-['Roboto'] leading-[21px]">X</div>
                                    </div>
                                    <div className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                                        <div className="w-6 h-6 relative"></div>
                                        <div className="text-black text-sm font-normal font-['Roboto'] leading-[21px]">LinkedIn</div>
                                    </div>
                                    <div className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                                        <div className="w-6 h-6 relative"></div>
                                        <div className="text-black text-sm font-normal font-['Roboto'] leading-[21px]">Youtube</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-[54px] flex-col justify-start items-start gap-8 flex">
                        <div className="self-stretch h-px bg-black"></div>
                        <div className="self-stretch justify-between items-start inline-flex">
                            <div className="text-black text-sm font-normal font-['Roboto'] leading-[21px]">© 2023 Relume. All rights reserved.</div>
                            <div className="justify-start items-start gap-6 flex">
                                <div className="text-black text-sm font-normal font-['Roboto'] underline leading-[21px]">Privacy Policy</div>
                                <div className="text-black text-sm font-normal font-['Roboto'] underline leading-[21px]">Terms of Service</div>
                                <div className="text-black text-sm font-normal font-['Roboto'] underline leading-[21px]">Cookies Settings</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FiltrationPage;