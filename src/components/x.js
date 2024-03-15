import { useState, useCallback } from "react";
import Navbar from "../components/Navbar";
import PortalPopup from "../components/PortalPopup";
import LoginComponentFrame from "../components/LoginComponentFrame";

const MacBookPro16 = () => {
  const [isNavbar5Open, setNavbar5Open] = useState(false);
  const [isLoginComponentFrameOpen, setLoginComponentFrameOpen] =
    useState(false);

  const onHakkmzdaTextClick = useCallback(() => {
    // Please sync "About Us" to the project
  }, []);

  const onLinkTwoTextClick = useCallback(() => {
    // Please sync "Filtrasyon" to the project
  }, []);

  const onLinkThreeTextClick = useCallback(() => {
    // Please sync "Rotalar" to the project
  }, []);

  const openNavbar5 = useCallback(() => {
    setNavbar5Open(true);
  }, []);

  const closeNavbar5 = useCallback(() => {
    setNavbar5Open(false);
  }, []);

  const openLoginComponentFrame = useCallback(() => {
    setLoginComponentFrameOpen(true);
  }, []);

  const closeLoginComponentFrame = useCallback(() => {
    setLoginComponentFrameOpen(false);
  }, []);

  return (
    <>
      <div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-start text-left text-[2rem] text-black font-text-tiny-normal">
        <div className="self-stretch h-[59.313rem] flex flex-row items-start justify-start text-[1rem]">
          <div className="self-stretch bg-white flex flex-col items-center justify-start">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start py-[0rem] pr-[0rem] pl-[0.625rem] gap-[0.563rem_0rem]">
              <div className="self-stretch [backdrop-filter:blur(4px)] flex flex-row items-start justify-end mix-blend-darken">
                <div className="flex-1 bg-white box-border h-[1.563rem] overflow-hidden flex flex-row items-start justify-end gap-[0rem_0.938rem] border-b-[1px] border-solid border-white">
                  <div className="relative leading-[150%] font-medium text-red">
                    Freelance Tour Guide Girişi
                  </div>
                  <div className="w-[0.063rem] relative box-border h-[1.625rem] hidden border-r-[1px] border-solid border-black" />
                  <div className="relative leading-[150%] font-medium">
                    Agenta Girişi
                  </div>
                  <div className="w-[0.063rem] relative box-border h-[1.625rem] hidden border-r-[1px] border-solid border-black" />
                  <div
                    className="w-[5.313rem] relative leading-[150%] font-medium text-white hidden cursor-pointer"
                    onClick={onHakkmzdaTextClick}
                  >
                    Hakkımızda
                  </div>
                  <div className="w-[0.063rem] relative box-border h-[1.625rem] hidden border-r-[1px] border-solid border-black" />
                  <div className="relative leading-[150%] font-medium">{`Yardım & Destek`}</div>
                </div>
              </div>
              <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-between border-b-[1px] border-solid border-white">
                <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[0rem_1.5rem]">
                  <img
                    className="w-[9.188rem] relative h-[1.688rem] object-cover"
                    alt=""
                    src="/logo@2x.png"
                  />
                  <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start gap-[0rem_2rem]">
                    <div className="relative leading-[150%] font-medium text-color">
                      Ana Sayfa
                    </div>
                    <div
                      className="relative leading-[150%] font-medium cursor-pointer"
                      onClick={onLinkTwoTextClick}
                    >
                      Turlar
                    </div>
                    <div
                      className="relative leading-[150%] font-medium cursor-pointer"
                      onClick={onLinkThreeTextClick}
                    >
                      Rotalar
                    </div>
                    <div
                      className="flex flex-row items-center justify-center gap-[0rem_0.25rem] cursor-pointer"
                      onClick={openNavbar5}
                    >
                      <div className="relative leading-[150%] font-medium">
                        Daha Fazla
                      </div>
                      <img
                        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/chevron-down.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-[0rem_1rem]">
                  <div
                    className="flex flex-row items-center justify-center py-[0.5rem] px-[1.25rem] cursor-pointer border-[1px] border-solid border-white"
                    onClick={openLoginComponentFrame}
                  >
                    <div className="relative leading-[150%]">Kayıt Ol</div>
                  </div>
                  <div className="bg-black flex flex-row items-center justify-center py-[0.5rem] px-[1.25rem] text-white border-[1px] border-solid border-black">
                    <div className="relative leading-[150%]">Button</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[94.5rem] flex flex-row items-center justify-between relative text-center text-[3.5rem] text-white">
              <img
                className="w-[94.5rem] relative h-[54rem] object-cover z-[0]"
                alt=""
                src="/dalle-20240205-0013-1@2x.png"
              />
              <div className="my-0 mx-[!important] absolute top-[21.563rem] left-[14.063rem] flex flex-row items-center justify-center gap-[0rem_6.438rem] z-[1]">
                <div className="self-stretch w-[65.25rem] flex flex-col items-center justify-start z-[0]">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <h1
                      className="m-0 relative text-inherit leading-[120%] font-bold font-inherit [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] [-webkit-text-stroke:33px_#fff]"
                      id="Kesfet"
                    >
                      <p className="m-0">{`Keşfet, Karşılaştır, Yola Çık `}</p>
                      <p className="m-0">CimriTur'la Dünya Senin!</p>
                    </h1>
                  </div>
                </div>
                <div className="my-0 mx-[!important] absolute top-[17.563rem] left-[0rem] rounded-31xl bg-gainsboro overflow-hidden flex flex-col items-center justify-start p-[0.625rem] gap-[0.625rem] z-[1] text-left text-[1rem] text-black">
                  <div className="my-0 mx-[!important] absolute top-[0rem] left-[1.063rem] h-[6.625rem] flex flex-col items-center justify-center gap-[0.625rem_0rem] z-[0]">
                    <b className="w-[10.438rem] absolute my-0 mx-[!important] top-[calc(50%_-_41px)] left-[calc(50%_-_113.42px)] leading-[150%] inline-block h-[1.998rem] shrink-0 z-[0]">
                      Gitmek istediğiniz yer
                    </b>
                    <div className="w-[15.625rem] relative h-[2.631rem] z-[1]">
                      <div className="absolute top-[calc(50%_-_21.05px)] left-[calc(50%_-_125px)] rounded-[30px] bg-white w-[15.625rem] h-[2.631rem]" />
                      <div className="absolute top-[-0.01rem] left-[0rem] rounded-xl w-[15.625rem] h-[2.625rem] flex flex-row items-center justify-between p-[0.625rem] box-border">
                        <img
                          className="w-[0.859rem] relative my-0 mx-[!important] rounded-31xl h-[1.364rem] z-[0]"
                          alt=""
                          src="/union.svg"
                        />
                        <textarea
                          className="[border:none] bg-[transparent] font-medium font-text-tiny-normal text-[1rem] [outline:none] w-[11.103rem] absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_89px)] leading-[150%] text-black text-left inline-block h-[1.998rem] z-[1]"
                          placeholder="Tur veya Bölge Arayınız"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="my-0 mx-[!important] absolute top-[0rem] left-[18.625rem] h-[6.625rem] flex flex-col items-center justify-center gap-[0.625rem_0rem] z-[1]">
                    <b className="w-[4.986rem] absolute my-0 mx-[!important] top-[calc(50%_-_40px)] left-[calc(50%_-_105.36px)] leading-[150%] inline-block h-[1.998rem] shrink-0 z-[0]">
                      Max. Fiyat
                    </b>
                    <div className="w-[15.625rem] relative h-[2.69rem] z-[1]">
                      <div className="absolute top-[calc(50%_-_21.52px)] left-[calc(50%_-_125px)] rounded-31xl bg-white w-[15.625rem] h-[2.631rem]" />
                      <div className="absolute top-[-0.024rem] left-[0rem] rounded-xl w-[15.625rem] h-[2.688rem] overflow-hidden">
                        <img
                          className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_111px)] rounded-31xl w-[1.145rem] h-[1.384rem]"
                          alt=""
                          src="/vector.svg"
                        />
                        <textarea
                          className="[border:none] bg-[transparent] h-auto font-medium font-text-tiny-normal text-[1rem] [outline:none] absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_79px)] leading-[150%] text-black text-left inline-block w-[4.92rem]"
                          placeholder="Max. Fiyat"
                          rows={1}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="my-0 mx-[!important] absolute top-[0rem] left-[36.188rem] h-[6.625rem] flex flex-col items-center justify-center gap-[0.625rem_0rem] z-[2]">
                    <b className="w-[6.183rem] absolute my-0 mx-[!important] top-[calc(50%_-_39px)] left-[calc(50%_-_109.1px)] leading-[150%] inline-block h-[1.998rem] shrink-0 z-[0]">
                      Tarih Seçiniz
                    </b>
                    <div className="w-[15.625rem] relative h-[2.631rem] z-[1]">
                      <div className="absolute top-[calc(50%_-_21.05px)] left-[calc(50%_-_125px)] rounded-31xl bg-white w-[15.625rem] h-[2.631rem]" />
                      <div className="absolute top-[-0.024rem] left-[0rem] rounded-xl w-[15.625rem] h-[2.625rem]">
                        <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_74px)] leading-[150%] font-medium inline-block w-[6.116rem] h-[1.998rem]">
                          Tarih Seçiniz
                        </div>
                        <img
                          className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_106px)] rounded-31xl w-[1.145rem] h-[1.384rem]"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="my-0 mx-[!important] absolute top-[1.75rem] left-[53.75rem] rounded-31xl bg-darkslateblue overflow-hidden flex flex-col items-end justify-center p-[0.625rem] z-[3] text-center text-white">
                    <div className="w-[2.003rem] absolute my-0 mx-[!important] top-[0.829rem] left-[3.686rem] leading-[150%] font-extrabold inline-block h-[1.531rem] shrink-0 [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] z-[0]">
                      Ara
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[28.438rem] flex flex-col items-center justify-center font-poppins">
          <div className="self-stretch flex-1 bg-white overflow-hidden flex flex-col items-center justify-start py-[1.25rem] pr-[4rem] pl-[3.125rem] gap-[1.25rem_0rem]">
            <div className="w-[87.5rem] h-[3.125rem] flex flex-row items-center justify-start">
              <div className="w-[36.25rem] relative h-[2.375rem]">
                <div className="absolute w-full top-[0%] left-[0%] leading-[120%] font-semibold inline-block">
                  Yakınınızdaki Acentalar
                </div>
              </div>
            </div>
            <div className="w-[86.125rem] flex flex-row flex-wrap items-center justify-start py-[0rem] px-[3.125rem] box-border gap-[2.438rem] text-center text-[1.563rem] text-white">
              <div className="flex-1 h-[17.188rem] flex flex-col items-center justify-center">
                <div className="self-stretch flex-1 relative">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/cappadociahotairballoontours111-1@2x.png"
                  />
                  <img
                    className="absolute h-[19.25%] w-2/5 top-[41.81%] right-[60%] bottom-[38.93%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/adsfremovebgpreview-1@2x.png"
                  />
                  <div className="absolute h-full w-[38.89%] top-[-0.34%] right-[0%] bottom-[0.34%] left-[61.11%] rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none bg-gray-200 [backdrop-filter:blur(4px)]" />
                  <div className="absolute h-[30.48%] w-[26%] top-[40.41%] left-[69.33%] leading-[150%] font-medium inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                    <p className="m-0">Turlara</p>
                    <p className="m-0">Göz At</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 h-[17.188rem] flex flex-col items-center justify-start">
                <div className="self-stretch flex-1 relative">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/placeholder-image@2x.png"
                  />
                  <img
                    className="absolute h-[18.87%] w-2/5 top-[1.97%] right-[60%] bottom-[79.16%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/adsfremovebgpreview-1@2x.png"
                  />
                  <div className="absolute h-[99.34%] w-[38.89%] top-[0.66%] right-[0.06%] bottom-[0%] left-[61.06%] rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none bg-gray-200 [backdrop-filter:blur(4px)]" />
                  <div className="absolute h-[29.88%] w-[26%] top-[40.27%] left-[69.33%] leading-[150%] font-medium inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                    <p className="m-0">Turlara</p>
                    <p className="m-0">Göz At</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 h-[17.188rem] flex flex-col items-center justify-start">
                <div className="self-stretch flex-1 relative">
                  <img
                    className="absolute h-full w-[99.89%] top-[0%] right-[0.11%] bottom-[0%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/placeholder-image@2x.png"
                  />
                  <img
                    className="absolute h-[19%] w-[39.96%] top-[79.61%] right-[60.04%] bottom-[1.39%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/adsfremovebgpreview-1@2x.png"
                  />
                  <div className="absolute h-full w-[38.85%] top-[0%] right-[0%] bottom-[0%] left-[61.15%] rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none bg-gray-200 [backdrop-filter:blur(4px)]" />
                  <div className="absolute h-[30.08%] w-[25.97%] top-[41.19%] left-[69.26%] leading-[150%] font-medium inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                    <p className="m-0">Turlara</p>
                    <p className="m-0">Göz At</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[84.375rem] h-[3.125rem] flex flex-row items-center justify-end text-[1rem] font-text-tiny-normal">
              <div className="flex flex-row items-start justify-start">
                <div className="w-[8.125rem] box-border flex flex-row items-center justify-center py-[0.75rem] px-[1.5rem] border-[1px] border-solid border-black">
                  <div className="relative leading-[150%]">Tüm Acentalar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden flex flex-col items-center justify-start py-[1.25rem] px-[4rem] gap-[1.563rem] font-poppins">
          <div className="w-[86.938rem] flex flex-row items-start justify-start">
            <div className="flex-1 flex flex-col items-center justify-start">
              <div className="w-[86.813rem] relative leading-[120%] font-semibold inline-block">
                Konumunuza Yakın Turlar
              </div>
            </div>
          </div>
          <div className="self-stretch h-[47.729rem] overflow-hidden shrink-0 flex flex-col items-start justify-center text-[1.25rem] text-white font-text-tiny-normal">
            <div className="self-stretch bg-white h-[41.375rem] flex flex-col items-start justify-start gap-[3rem]">
              <div className="self-stretch flex-1 relative overflow-x-auto">
                <div className="absolute top-[0.021rem] left-[0rem] w-[18.75rem] h-[28.125rem]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/placeholder-image@2x.png"
                  />
                  <div className="absolute h-[15.78%] w-full top-[84.22%] right-[0%] bottom-[0%] left-[0%] rounded-t-none rounded-b-xl bg-gray-300 [backdrop-filter:blur(4px)] flex flex-col items-start justify-center py-[0rem] px-[0.938rem] box-border">
                    <div className="w-[16.813rem] relative h-[1.875rem]">
                      <div className="absolute top-[0.031rem] left-[13.563rem] leading-[150%] font-semibold">
                        2 Gün
                      </div>
                      <div className="absolute top-[0rem] left-[0rem] leading-[150%] font-semibold">
                        Efes Antik Kent
                      </div>
                    </div>
                    <div className="w-[16.813rem] h-[2.125rem] flex flex-row items-start justify-between">
                      <div className="w-[17.313rem] flex flex-row items-center justify-start py-[0.125rem] px-[0rem] box-border gap-[0rem_0.625rem]">
                        <img
                          className="w-[1.008rem] relative h-[1.585rem]"
                          alt=""
                          src="/vector.svg"
                        />
                        <div className="relative leading-[150%] font-semibold">
                          İzmir
                        </div>
                      </div>
                      <div className="relative leading-[150%] font-semibold">
                        1299 TL
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0rem] left-[20.25rem] w-[18.75rem] h-[28.125rem]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/placeholder-image@2x.png"
                  />
                  <div className="absolute h-[15.78%] w-full top-[84.22%] right-[0%] bottom-[0%] left-[0%] rounded-t-none rounded-b-xl bg-gray-300 [backdrop-filter:blur(4px)] flex flex-col items-start justify-center py-[0rem] px-[0.938rem] box-border">
                    <div className="w-[16.813rem] relative h-[1.875rem]">
                      <div className="absolute top-[0.031rem] left-[13.563rem] leading-[150%] font-semibold">
                        2 Gün
                      </div>
                      <div className="absolute top-[0rem] left-[0rem] leading-[150%] font-semibold">
                        Efes Antik Kent
                      </div>
                    </div>
                    <div className="w-[16.813rem] h-[2.125rem] flex flex-row items-start justify-between">
                      <div className="w-[17.313rem] flex flex-row items-center justify-start py-[0.125rem] px-[0rem] box-border gap-[0rem_0.625rem]">
                        <img
                          className="w-[1.008rem] relative h-[1.585rem]"
                          alt=""
                          src="/vector.svg"
                        />
                        <div className="relative leading-[150%] font-semibold">
                          İzmir
                        </div>
                      </div>
                      <div className="relative leading-[150%] font-semibold">
                        1299 TL
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0rem] left-[40.5rem] w-[18.75rem] h-[28.125rem]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/placeholder-image@2x.png"
                  />
                  <div className="absolute h-[15.78%] w-full top-[84.22%] right-[0%] bottom-[0%] left-[0%] rounded-t-none rounded-b-xl bg-gray-300 [backdrop-filter:blur(4px)] flex flex-col items-start justify-center py-[0rem] px-[0.938rem] box-border">
                    <div className="w-[16.813rem] relative h-[1.875rem]">
                      <div className="absolute top-[0.031rem] left-[13.563rem] leading-[150%] font-semibold">
                        2 Gün
                      </div>
                      <div className="absolute top-[0rem] left-[0rem] leading-[150%] font-semibold">
                        Efes Antik Kent
                      </div>
                    </div>
                    <div className="w-[16.813rem] h-[2.125rem] flex flex-row items-start justify-between">
                      <div className="w-[17.313rem] flex flex-row items-center justify-start py-[0.125rem] px-[0rem] box-border gap-[0rem_0.625rem]">
                        <img
                          className="w-[1.008rem] relative h-[1.585rem]"
                          alt=""
                          src="/vector.svg"
                        />
                        <div className="relative leading-[150%] font-semibold">
                          İzmir
                        </div>
                      </div>
                      <div className="relative leading-[150%] font-semibold">
                        1299 TL
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0rem] left-[60.75rem] w-[18.75rem] h-[28.125rem]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/placeholder-image@2x.png"
                  />
                  <div className="absolute h-[15.78%] w-full top-[84.22%] right-[0%] bottom-[0%] left-[0%] rounded-t-none rounded-b-xl bg-gray-300 [backdrop-filter:blur(4px)] flex flex-col items-start justify-center py-[0rem] px-[0.938rem] box-border">
                    <div className="w-[16.813rem] relative h-[1.875rem]">
                      <div className="absolute top-[0.031rem] left-[13.563rem] leading-[150%] font-semibold">
                        2 Gün
                      </div>
                      <div className="absolute top-[0rem] left-[0rem] leading-[150%] font-semibold">
                        Efes Antik Kent
                      </div>
                    </div>
                    <div className="w-[16.813rem] h-[2.125rem] flex flex-row items-start justify-between">
                      <div className="w-[17.313rem] flex flex-row items-center justify-start py-[0.125rem] px-[0rem] box-border gap-[0rem_0.625rem]">
                        <img
                          className="w-[1.008rem] relative h-[1.585rem]"
                          alt=""
                          src="/vector.svg"
                        />
                        <div className="relative leading-[150%] font-semibold">
                          İzmir
                        </div>
                      </div>
                      <div className="relative leading-[150%] font-semibold">
                        1299 TL
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0rem] left-[81rem] w-[18.75rem] h-[28.125rem]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/placeholder-image@2x.png"
                  />
                  <div className="absolute h-[15.78%] w-full top-[84.22%] right-[0%] bottom-[0%] left-[0%] rounded-t-none rounded-b-xl bg-gray-300 [backdrop-filter:blur(4px)] flex flex-col items-start justify-center py-[0rem] px-[0.938rem] box-border">
                    <div className="w-[16.813rem] relative h-[1.875rem]">
                      <div className="absolute top-[0.031rem] left-[13.563rem] leading-[150%] font-semibold">
                        2 Gün
                      </div>
                      <div className="absolute top-[0rem] left-[0rem] leading-[150%] font-semibold">
                        Efes Antik Kent
                      </div>
                    </div>
                    <div className="w-[16.813rem] h-[2.125rem] flex flex-row items-start justify-between">
                      <div className="w-[17.313rem] flex flex-row items-center justify-start py-[0.125rem] px-[0rem] box-border gap-[0rem_0.625rem]">
                        <img
                          className="w-[1.008rem] relative h-[1.585rem]"
                          alt=""
                          src="/vector.svg"
                        />
                        <div className="relative leading-[150%] font-semibold">
                          İzmir
                        </div>
                      </div>
                      <div className="relative leading-[150%] font-semibold">
                        1299 TL
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0rem] left-[101.25rem] w-[18.75rem] h-[28.125rem]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/placeholder-image@2x.png"
                  />
                  <div className="absolute h-[15.78%] w-full top-[84.22%] right-[0%] bottom-[0%] left-[0%] rounded-t-none rounded-b-xl bg-gray-300 [backdrop-filter:blur(4px)] flex flex-col items-start justify-center py-[0rem] px-[0.938rem] box-border">
                    <div className="w-[16.813rem] relative h-[1.875rem]">
                      <div className="absolute top-[0.031rem] left-[13.563rem] leading-[150%] font-semibold">
                        2 Gün
                      </div>
                      <div className="absolute top-[0rem] left-[0rem] leading-[150%] font-semibold">
                        Efes Antik Kent
                      </div>
                    </div>
                    <div className="w-[16.813rem] h-[2.125rem] flex flex-row items-start justify-between">
                      <div className="w-[17.313rem] flex flex-row items-center justify-start py-[0.125rem] px-[0rem] box-border gap-[0rem_0.625rem]">
                        <img
                          className="w-[1.008rem] relative h-[1.585rem]"
                          alt=""
                        />
                        <div className="relative leading-[150%] font-semibold">
                          İzmir
                        </div>
                      </div>
                      <div className="relative leading-[150%] font-semibold">
                        1299 TL
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0rem] left-[121.5rem] w-[18.75rem] h-[28.125rem]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/placeholder-image@2x.png"
                  />
                  <div className="absolute h-[15.78%] w-full top-[84.22%] right-[0%] bottom-[0%] left-[0%] rounded-t-none rounded-b-xl bg-gray-300 [backdrop-filter:blur(4px)] flex flex-col items-start justify-center py-[0rem] px-[0.938rem] box-border">
                    <div className="w-[16.813rem] relative h-[1.875rem]">
                      <div className="absolute top-[0.031rem] left-[13.563rem] leading-[150%] font-semibold">
                        2 Gün
                      </div>
                      <div className="absolute top-[0rem] left-[0rem] leading-[150%] font-semibold">
                        Efes Antik Kent
                      </div>
                    </div>
                    <div className="w-[16.813rem] h-[2.125rem] flex flex-row items-start justify-between">
                      <div className="w-[17.313rem] flex flex-row items-center justify-start py-[0.125rem] px-[0rem] box-border gap-[0rem_0.625rem]">
                        <img
                          className="w-[1.008rem] relative h-[1.585rem]"
                          alt=""
                        />
                        <div className="relative leading-[150%] font-semibold">
                          İzmir
                        </div>
                      </div>
                      <div className="relative leading-[150%] font-semibold">
                        1299 TL
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0rem] left-[141.75rem] w-[18.75rem] h-[28.125rem]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/placeholder-image@2x.png"
                  />
                  <div className="absolute h-[15.78%] w-full top-[84.22%] right-[0%] bottom-[0%] left-[0%] rounded-t-none rounded-b-xl bg-gray-300 [backdrop-filter:blur(4px)] flex flex-col items-start justify-center py-[0rem] px-[0.938rem] box-border">
                    <div className="w-[16.813rem] relative h-[1.875rem]">
                      <div className="absolute top-[0.031rem] left-[13.563rem] leading-[150%] font-semibold">
                        2 Gün
                      </div>
                      <div className="absolute top-[0rem] left-[0rem] leading-[150%] font-semibold">
                        Efes Antik Kent
                      </div>
                    </div>
                    <div className="w-[16.813rem] h-[2.125rem] flex flex-row items-start justify-between">
                      <div className="w-[17.313rem] flex flex-row items-center justify-start py-[0.125rem] px-[0rem] box-border gap-[0rem_0.625rem]">
                        <img
                          className="w-[1.008rem] relative h-[1.585rem]"
                          alt=""
                        />
                        <div className="relative leading-[150%] font-semibold">
                          İzmir
                        </div>
                      </div>
                      <div className="relative leading-[150%] font-semibold">
                        1299 TL
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0rem] left-[162rem] w-[18.75rem] h-[28.125rem]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/placeholder-image@2x.png"
                  />
                  <div className="absolute h-[15.78%] w-full top-[84.22%] right-[0%] bottom-[0%] left-[0%] rounded-t-none rounded-b-xl bg-gray-300 [backdrop-filter:blur(4px)] flex flex-col items-start justify-center py-[0rem] px-[0.938rem] box-border">
                    <div className="w-[16.813rem] relative h-[1.875rem]">
                      <div className="absolute top-[0.031rem] left-[13.563rem] leading-[150%] font-semibold">
                        2 Gün
                      </div>
                      <div className="absolute top-[0rem] left-[0rem] leading-[150%] font-semibold">
                        Efes Antik Kent
                      </div>
                    </div>
                    <div className="w-[16.813rem] h-[2.125rem] flex flex-row items-start justify-between">
                      <div className="w-[17.313rem] flex flex-row items-center justify-start py-[0.125rem] px-[0rem] box-border gap-[0rem_0.625rem]">
                        <img
                          className="w-[1.008rem] relative h-[1.585rem]"
                          alt=""
                        />
                        <div className="relative leading-[150%] font-semibold">
                          İzmir
                        </div>
                      </div>
                      <div className="relative leading-[150%] font-semibold">
                        1299 TL
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0rem] left-[182.25rem] w-[18.75rem] h-[28.125rem]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/placeholder-image@2x.png"
                  />
                  <div className="absolute h-[15.78%] w-full top-[84.22%] right-[0%] bottom-[0%] left-[0%] rounded-t-none rounded-b-xl bg-gray-300 [backdrop-filter:blur(4px)] flex flex-col items-start justify-center py-[0rem] px-[0.938rem] box-border">
                    <div className="w-[16.813rem] relative h-[1.875rem]">
                      <div className="absolute top-[0.031rem] left-[13.563rem] leading-[150%] font-semibold">
                        2 Gün
                      </div>
                      <div className="absolute top-[0rem] left-[0rem] leading-[150%] font-semibold">
                        Efes Antik Kent
                      </div>
                    </div>
                    <div className="w-[16.813rem] h-[2.125rem] flex flex-row items-start justify-between">
                      <div className="w-[17.313rem] flex flex-row items-center justify-start py-[0.125rem] px-[0rem] box-border gap-[0rem_0.625rem]">
                        <img
                          className="w-[1.008rem] relative h-[1.585rem]"
                          alt=""
                        />
                        <div className="relative leading-[150%] font-semibold">
                          İzmir
                        </div>
                      </div>
                      <div className="relative leading-[150%] font-semibold">
                        1299 TL
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[82.938rem] flex flex-row items-center justify-between">
                <div className="w-[4.5rem] flex flex-row items-center justify-between">
                  <div className="w-[0.5rem] relative rounded-[50%] bg-black h-[0.5rem]" />
                  <div className="w-[0.5rem] relative rounded-[50%] [background:linear-gradient(#d9d9d9,_#d9d9d9),_#8d8d8d] h-[0.5rem]" />
                  <div className="w-[0.5rem] relative rounded-[50%] [background:linear-gradient(#d9d9d9,_#d9d9d9),_#8d8d8d] h-[0.5rem]" />
                  <div className="w-[0.5rem] relative rounded-[50%] [background:linear-gradient(#d9d9d9,_#d9d9d9),_#8d8d8d] h-[0.5rem]" />
                  <div className="w-[0.5rem] relative rounded-[50%] [background:linear-gradient(#d9d9d9,_#d9d9d9),_#8d8d8d] h-[0.5rem]" />
                </div>
                <div className="w-[6.938rem] flex flex-row items-center justify-between">
                  <div className="rounded-31xl flex flex-row items-center justify-center p-[0.75rem] border-[1px] border-solid border-black">
                    <img
                      className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className="rounded-31xl flex flex-row items-center justify-center p-[0.75rem] border-[1px] border-solid border-black">
                    <img
                      className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[82.25rem] flex flex-row items-center justify-end text-[1rem] text-black">
                <div className="w-[6.625rem] box-border flex flex-row items-center justify-center py-[0.75rem] px-[1.5rem] border-[1px] border-solid border-black">
                  <div className="relative leading-[150%]">Tüm Turlar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden flex flex-col items-center justify-start py-[1.25rem] px-[4rem] gap-[1.563rem] font-poppins">
          <div className="w-[86.938rem] flex flex-row items-start justify-start">
            <div className="flex-1 flex flex-col items-center justify-start">
              <div className="w-[86.813rem] relative leading-[120%] font-semibold inline-block">
                En Çok Tercih Edilen Turlar
              </div>
            </div>
          </div>
          <div className="self-stretch h-[47.729rem] overflow-hidden shrink-0 flex flex-col items-start justify-center text-[1.25rem] text-white font-text-tiny-normal">
            <div className="self-stretch bg-white h-[41.375rem] flex flex-col items-start justify-start gap-[3rem]">
              <div className="self-stretch flex-1 relative overflow-x-auto">
                <div className="absolute top-[0.021rem] left-[0rem] w-[18.75rem] h-[28.125rem]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/placeholder-image@2x.png"
                  />
                  <div className="absolute h-[15.78%] w-full top-[84.22%] right-[0%] bottom-[0%] left-[0%] rounded-t-none rounded-b-xl bg-gray-300 [backdrop-filter:blur(4px)] flex flex-col items-start justify-center py-[0rem] px-[0.938rem] box-border">
                    <div className="w-[16.813rem] relative h-[1.875rem]">
                      <div className="absolute top-[0.031rem] left-[13.563rem] leading-[150%] font-semibold">
                        2 Gün
                      </div>
                      <div className="absolute top-[0rem] left-[0rem] leading-[150%] font-semibold">
                        Efes Antik Kent
                      </div>
                    </div>
                    <div className="w-[16.813rem] h-[2.125rem] flex flex-row items-start justify-between">
                      <div className="w-[17.313rem] flex flex-row items-center justify-start py-[0.125rem] px-[0rem] box-border gap-[0rem_0.625rem]">
                        <img
                          className="w-[1.008rem] relative h-[1.585rem]"
                          alt=""
                          src="/vector.svg"
                        />
                        <div className="relative leading-[150%] font-semibold">
                          İzmir
                        </div>
                      </div>
                      <div className="relative leading-[150%] font-semibold">
                        1299 TL
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0rem] left-[20.25rem] w-[18.75rem] h-[28.125rem]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/placeholder-image@2x.png"
                  />
                  <div className="absolute h-[15.78%] w-full top-[84.22%] right-[0%] bottom-[0%] left-[0%] rounded-t-none rounded-b-xl bg-gray-300 [backdrop-filter:blur(4px)] flex flex-col items-start justify-center py-[0rem] px-[0.938rem] box-border">
                    <div className="w-[16.813rem] relative h-[1.875rem]">
                      <div className="absolute top-[0.031rem] left-[13.563rem] leading-[150%] font-semibold">
                        2 Gün
                      </div>
                      <div className="absolute top-[0rem] left-[0rem] leading-[150%] font-semibold">
                        Efes Antik Kent
                      </div>
                    </div>
                    <div className="w-[16.813rem] h-[2.125rem] flex flex-row items-start justify-between">
                      <div className="w-[17.313rem] flex flex-row items-center justify-start py-[0.125rem] px-[0rem] box-border gap-[0rem_0.625rem]">
                        <img
                          className="w-[1.008rem] relative h-[1.585rem]"
                          alt=""
                          src="/vector.svg"
                        />
                        <div className="relative leading-[150%] font-semibold">
                          İzmir
                        </div>
                      </div>
                      <div className="relative leading-[150%] font-semibold">
                        1299 TL
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0rem] left-[40.5rem] w-[18.75rem] h-[28.125rem]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/placeholder-image@2x.png"
                  />
                  <div className="absolute h-[15.78%] w-full top-[84.22%] right-[0%] bottom-[0%] left-[0%] rounded-t-none rounded-b-xl bg-gray-300 [backdrop-filter:blur(4px)] flex flex-col items-start justify-center py-[0rem] px-[0.938rem] box-border">
                    <div className="w-[16.813rem] relative h-[1.875rem]">
                      <div className="absolute top-[0.031rem] left-[13.563rem] leading-[150%] font-semibold">
                        2 Gün
                      </div>
                      <div className="absolute top-[0rem] left-[0rem] leading-[150%] font-semibold">
                        Efes Antik Kent
                      </div>
                    </div>
                    <div className="w-[16.813rem] h-[2.125rem] flex flex-row items-start justify-between">
                      <div className="w-[17.313rem] flex flex-row items-center justify-start py-[0.125rem] px-[0rem] box-border gap-[0rem_0.625rem]">
                        <img
                          className="w-[1.008rem] relative h-[1.585rem]"
                          alt=""
                          src="/vector.svg"
                        />
                        <div className="relative leading-[150%] font-semibold">
                          İzmir
                        </div>
                      </div>
                      <div className="relative leading-[150%] font-semibold">
                        1299 TL
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0rem] left-[60.75rem] w-[18.75rem] h-[28.125rem]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/placeholder-image@2x.png"
                  />
                  <div className="absolute h-[15.78%] w-full top-[84.22%] right-[0%] bottom-[0%] left-[0%] rounded-t-none rounded-b-xl bg-gray-300 [backdrop-filter:blur(4px)] flex flex-col items-start justify-center py-[0rem] px-[0.938rem] box-border">
                    <div className="w-[16.813rem] relative h-[1.875rem]">
                      <div className="absolute top-[0.031rem] left-[13.563rem] leading-[150%] font-semibold">
                        2 Gün
                      </div>
                      <div className="absolute top-[0rem] left-[0rem] leading-[150%] font-semibold">
                        Efes Antik Kent
                      </div>
                    </div>
                    <div className="w-[16.813rem] h-[2.125rem] flex flex-row items-start justify-between">
                      <div className="w-[17.313rem] flex flex-row items-center justify-start py-[0.125rem] px-[0rem] box-border gap-[0rem_0.625rem]">
                        <img
                          className="w-[1.008rem] relative h-[1.585rem]"
                          alt=""
                          src="/vector.svg"
                        />
                        <div className="relative leading-[150%] font-semibold">
                          İzmir
                        </div>
                      </div>
                      <div className="relative leading-[150%] font-semibold">
                        1299 TL
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0rem] left-[81rem] w-[18.75rem] h-[28.125rem]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/placeholder-image@2x.png"
                  />
                  <div className="absolute h-[15.78%] w-full top-[84.22%] right-[0%] bottom-[0%] left-[0%] rounded-t-none rounded-b-xl bg-gray-300 [backdrop-filter:blur(4px)] flex flex-col items-start justify-center py-[0rem] px-[0.938rem] box-border">
                    <div className="w-[16.813rem] relative h-[1.875rem]">
                      <div className="absolute top-[0.031rem] left-[13.563rem] leading-[150%] font-semibold">
                        2 Gün
                      </div>
                      <div className="absolute top-[0rem] left-[0rem] leading-[150%] font-semibold">
                        Efes Antik Kent
                      </div>
                    </div>
                    <div className="w-[16.813rem] h-[2.125rem] flex flex-row items-start justify-between">
                      <div className="w-[17.313rem] flex flex-row items-center justify-start py-[0.125rem] px-[0rem] box-border gap-[0rem_0.625rem]">
                        <img
                          className="w-[1.008rem] relative h-[1.585rem]"
                          alt=""
                          src="/vector.svg"
                        />
                        <div className="relative leading-[150%] font-semibold">
                          İzmir
                        </div>
                      </div>
                      <div className="relative leading-[150%] font-semibold">
                        1299 TL
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0rem] left-[101.25rem] w-[18.75rem] h-[28.125rem]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/placeholder-image@2x.png"
                  />
                  <div className="absolute h-[15.78%] w-full top-[84.22%] right-[0%] bottom-[0%] left-[0%] rounded-t-none rounded-b-xl bg-gray-300 [backdrop-filter:blur(4px)] flex flex-col items-start justify-center py-[0rem] px-[0.938rem] box-border">
                    <div className="w-[16.813rem] relative h-[1.875rem]">
                      <div className="absolute top-[0.031rem] left-[13.563rem] leading-[150%] font-semibold">
                        2 Gün
                      </div>
                      <div className="absolute top-[0rem] left-[0rem] leading-[150%] font-semibold">
                        Efes Antik Kent
                      </div>
                    </div>
                    <div className="w-[16.813rem] h-[2.125rem] flex flex-row items-start justify-between">
                      <div className="w-[17.313rem] flex flex-row items-center justify-start py-[0.125rem] px-[0rem] box-border gap-[0rem_0.625rem]">
                        <img
                          className="w-[1.008rem] relative h-[1.585rem]"
                          alt=""
                        />
                        <div className="relative leading-[150%] font-semibold">
                          İzmir
                        </div>
                      </div>
                      <div className="relative leading-[150%] font-semibold">
                        1299 TL
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0rem] left-[121.5rem] w-[18.75rem] h-[28.125rem]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/placeholder-image@2x.png"
                  />
                  <div className="absolute h-[15.78%] w-full top-[84.22%] right-[0%] bottom-[0%] left-[0%] rounded-t-none rounded-b-xl bg-gray-300 [backdrop-filter:blur(4px)] flex flex-col items-start justify-center py-[0rem] px-[0.938rem] box-border">
                    <div className="w-[16.813rem] relative h-[1.875rem]">
                      <div className="absolute top-[0.031rem] left-[13.563rem] leading-[150%] font-semibold">
                        2 Gün
                      </div>
                      <div className="absolute top-[0rem] left-[0rem] leading-[150%] font-semibold">
                        Efes Antik Kent
                      </div>
                    </div>
                    <div className="w-[16.813rem] h-[2.125rem] flex flex-row items-start justify-between">
                      <div className="w-[17.313rem] flex flex-row items-center justify-start py-[0.125rem] px-[0rem] box-border gap-[0rem_0.625rem]">
                        <img
                          className="w-[1.008rem] relative h-[1.585rem]"
                          alt=""
                        />
                        <div className="relative leading-[150%] font-semibold">
                          İzmir
                        </div>
                      </div>
                      <div className="relative leading-[150%] font-semibold">
                        1299 TL
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0rem] left-[141.75rem] w-[18.75rem] h-[28.125rem]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/placeholder-image@2x.png"
                  />
                  <div className="absolute h-[15.78%] w-full top-[84.22%] right-[0%] bottom-[0%] left-[0%] rounded-t-none rounded-b-xl bg-gray-300 [backdrop-filter:blur(4px)] flex flex-col items-start justify-center py-[0rem] px-[0.938rem] box-border">
                    <div className="w-[16.813rem] relative h-[1.875rem]">
                      <div className="absolute top-[0.031rem] left-[13.563rem] leading-[150%] font-semibold">
                        2 Gün
                      </div>
                      <div className="absolute top-[0rem] left-[0rem] leading-[150%] font-semibold">
                        Efes Antik Kent
                      </div>
                    </div>
                    <div className="w-[16.813rem] h-[2.125rem] flex flex-row items-start justify-between">
                      <div className="w-[17.313rem] flex flex-row items-center justify-start py-[0.125rem] px-[0rem] box-border gap-[0rem_0.625rem]">
                        <img
                          className="w-[1.008rem] relative h-[1.585rem]"
                          alt=""
                        />
                        <div className="relative leading-[150%] font-semibold">
                          İzmir
                        </div>
                      </div>
                      <div className="relative leading-[150%] font-semibold">
                        1299 TL
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0rem] left-[162rem] w-[18.75rem] h-[28.125rem]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/placeholder-image@2x.png"
                  />
                  <div className="absolute h-[15.78%] w-full top-[84.22%] right-[0%] bottom-[0%] left-[0%] rounded-t-none rounded-b-xl bg-gray-300 [backdrop-filter:blur(4px)] flex flex-col items-start justify-center py-[0rem] px-[0.938rem] box-border">
                    <div className="w-[16.813rem] relative h-[1.875rem]">
                      <div className="absolute top-[0.031rem] left-[13.563rem] leading-[150%] font-semibold">
                        2 Gün
                      </div>
                      <div className="absolute top-[0rem] left-[0rem] leading-[150%] font-semibold">
                        Efes Antik Kent
                      </div>
                    </div>
                    <div className="w-[16.813rem] h-[2.125rem] flex flex-row items-start justify-between">
                      <div className="w-[17.313rem] flex flex-row items-center justify-start py-[0.125rem] px-[0rem] box-border gap-[0rem_0.625rem]">
                        <img
                          className="w-[1.008rem] relative h-[1.585rem]"
                          alt=""
                        />
                        <div className="relative leading-[150%] font-semibold">
                          İzmir
                        </div>
                      </div>
                      <div className="relative leading-[150%] font-semibold">
                        1299 TL
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0rem] left-[182.25rem] w-[18.75rem] h-[28.125rem]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/placeholder-image@2x.png"
                  />
                  <div className="absolute h-[15.78%] w-full top-[84.22%] right-[0%] bottom-[0%] left-[0%] rounded-t-none rounded-b-xl bg-gray-300 [backdrop-filter:blur(4px)] flex flex-col items-start justify-center py-[0rem] px-[0.938rem] box-border">
                    <div className="w-[16.813rem] relative h-[1.875rem]">
                      <div className="absolute top-[0.031rem] left-[13.563rem] leading-[150%] font-semibold">
                        2 Gün
                      </div>
                      <div className="absolute top-[0rem] left-[0rem] leading-[150%] font-semibold">
                        Efes Antik Kent
                      </div>
                    </div>
                    <div className="w-[16.813rem] h-[2.125rem] flex flex-row items-start justify-between">
                      <div className="w-[17.313rem] flex flex-row items-center justify-start py-[0.125rem] px-[0rem] box-border gap-[0rem_0.625rem]">
                        <img
                          className="w-[1.008rem] relative h-[1.585rem]"
                          alt=""
                        />
                        <div className="relative leading-[150%] font-semibold">
                          İzmir
                        </div>
                      </div>
                      <div className="relative leading-[150%] font-semibold">
                        1299 TL
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[0rem_70.563rem]">
                <div className="w-[4.5rem] flex flex-row items-center justify-between">
                  <div className="w-[0.5rem] relative rounded-[50%] bg-black h-[0.5rem]" />
                  <div className="w-[0.5rem] relative rounded-[50%] [background:linear-gradient(#d9d9d9,_#d9d9d9),_#8d8d8d] h-[0.5rem]" />
                  <div className="w-[0.5rem] relative rounded-[50%] [background:linear-gradient(#d9d9d9,_#d9d9d9),_#8d8d8d] h-[0.5rem]" />
                  <div className="w-[0.5rem] relative rounded-[50%] [background:linear-gradient(#d9d9d9,_#d9d9d9),_#8d8d8d] h-[0.5rem]" />
                  <div className="w-[0.5rem] relative rounded-[50%] [background:linear-gradient(#d9d9d9,_#d9d9d9),_#8d8d8d] h-[0.5rem]" />
                </div>
                <div className="w-[6.938rem] flex flex-row items-center justify-between">
                  <div className="rounded-31xl flex flex-row items-center justify-center p-[0.75rem] border-[1px] border-solid border-black">
                    <img
                      className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className="rounded-31xl flex flex-row items-center justify-center p-[0.75rem] border-[1px] border-solid border-black">
                    <img
                      className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[82.25rem] flex flex-row items-center justify-end text-[1rem] text-black">
                <div className="w-[6.625rem] box-border flex flex-row items-center justify-center py-[0.75rem] px-[1.5rem] border-[1px] border-solid border-black">
                  <div className="relative leading-[150%]">Tüm Turlar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-light-grey overflow-hidden flex flex-row items-center justify-start py-[7rem] px-[4rem] text-center">
          <div className="w-[86.5rem] flex flex-row items-center justify-center gap-[0rem_3.125rem]">
            <div className="flex-1 h-[22.75rem] flex flex-col items-center justify-center gap-[1.5rem_0rem]">
              <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem_0rem]">
                <img
                  className="w-[3rem] relative h-[3rem]"
                  alt=""
                  src="/group.svg"
                />
                <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem_0rem]">
                  <b className="self-stretch relative leading-[130%]">
                    Sizin İçin En Uygun Tur
                  </b>
                  <div className="self-stretch relative text-[1rem] leading-[150%]">
                    Hayalinizdeki tatil deneyimini sunan seçkin tur seçenekleri
                    için buradayız.
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start pt-[1rem] px-[0rem] pb-[0rem] gap-[0rem_1.5rem] text-left text-[1rem]">
                <div className="flex flex-row items-center justify-center py-[0.75rem] px-[1.5rem] border-[1px] border-solid border-black">
                  <div className="relative leading-[150%]">Üye Ol</div>
                </div>
                <div className="flex flex-row items-center justify-center gap-[0rem_0.5rem]">
                  <div className="relative leading-[150%]">Daha Fazla</div>
                  <img
                    className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                    alt=""
                    src="/icon--chevronright.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-start gap-[1.5rem_0rem]">
              <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem_0rem]">
                <img
                  className="w-[3rem] relative h-[3rem]"
                  alt=""
                  src="/vector.svg"
                />
                <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem_0rem]">
                  <b className="self-stretch relative leading-[130%]">
                    Kolay Üyelik
                  </b>
                  <div className="self-stretch relative text-[1rem] leading-[150%]">
                    Hızlı ve kolay üyelik süreciyle, anında tatil planlamaya
                    başlayın.
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start pt-[1rem] px-[0rem] pb-[0rem] gap-[0rem_1.5rem] text-left text-[1rem]">
                <div className="flex flex-row items-center justify-center py-[0.75rem] px-[1.5rem] border-[1px] border-solid border-black">
                  <div className="relative leading-[150%]">Üye Ol</div>
                </div>
                <div className="flex flex-row items-center justify-center gap-[0rem_0.5rem]">
                  <div className="relative leading-[150%]">Daha Fazla</div>
                  <img
                    className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                    alt=""
                    src="/icon--chevronright.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-start gap-[1.5rem_0rem]">
              <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem_0rem]">
                <img
                  className="w-[3rem] relative h-[3rem] overflow-hidden shrink-0"
                  alt=""
                  src="/mingcutechoiceline.svg"
                />
                <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem_0rem]">
                  <b className="self-stretch relative leading-[130%]">
                    En Uygun Yüzlerce Seçenek
                  </b>
                  <div className="self-stretch relative text-[1rem] leading-[150%]">
                    Bütçenize uygun birçok seçenek arasından seçim yaparak
                    unutulmaz bir tatil deneyimi yaşayın.
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start pt-[1rem] px-[0rem] pb-[0rem] gap-[0rem_1.5rem] text-left text-[1rem]">
                <div className="flex flex-row items-center justify-center py-[0.75rem] px-[1.5rem] border-[1px] border-solid border-black">
                  <div className="relative leading-[150%]">Üye Ol</div>
                </div>
                <div className="flex flex-row items-center justify-center gap-[0rem_0.5rem]">
                  <div className="relative leading-[150%]">Daha Fazla</div>
                  <img
                    className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                    alt=""
                    src="/icon--chevronright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden flex flex-col items-center justify-start py-[1.25rem] px-[4rem] text-[1.25rem] text-white">
          <div className="w-[86.5rem] relative h-[43.563rem]">
            <div className="absolute top-[4.25rem] left-[0.438rem] bg-white w-[86.063rem] h-[34.125rem] overflow-hidden flex flex-col items-start justify-start gap-[3rem]">
              <div className="self-stretch flex-1 relative overflow-x-auto">
                <div className="absolute top-[0rem] left-[20.813rem] w-[19.438rem] h-[28.125rem]">
                  <div className="absolute top-[0rem] left-[0rem] w-[19.438rem] h-[28.125rem]">
                    <img
                      className="absolute top-[0rem] left-[0rem] rounded-xl w-[19.438rem] h-[28.125rem] object-cover"
                      alt=""
                      src="/placeholder-image@2x.png"
                    />
                    <div className="absolute top-[23.688rem] left-[0rem] rounded-t-none rounded-b-xl bg-gray-300 [backdrop-filter:blur(4px)] w-[19.438rem] h-[4.438rem] flex flex-col items-start justify-center py-[0rem] px-[0.938rem] box-border">
                      <div className="w-[18.5rem] relative h-[1.875rem]">
                        <div className="absolute top-[0.031rem] left-[13.938rem] leading-[150%] font-semibold">
                          2 Gün
                        </div>
                        <div className="absolute top-[0rem] left-[0rem] leading-[150%] font-semibold">
                          Anıtkabir
                        </div>
                      </div>
                      <div className="w-[17.313rem] h-[2.125rem] flex flex-row items-start justify-between">
                        <div className="w-[17.313rem] flex flex-row items-center justify-start py-[0.125rem] px-[0rem] box-border gap-[0rem_0.625rem]">
                          <img
                            className="w-[1.008rem] relative h-[1.585rem]"
                            alt=""
                            src="/vector.svg"
                          />
                          <div className="relative leading-[150%] font-semibold">
                            Ankara
                          </div>
                        </div>
                        <div className="relative leading-[150%] font-semibold">
                          1299 TL
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="absolute top-[1.313rem] left-[16.563rem] w-[1.875rem] h-[1.875rem]"
                    alt=""
                    src="/kalp--favori-animated.svg"
                  />
                </div>
                <div className="absolute top-[0rem] left-[41.625rem] w-[18.75rem] h-[28.125rem]">
                  <div className="absolute top-[0rem] left-[0rem] w-[18.75rem] h-[28.125rem]">
                    <img
                      className="absolute top-[0rem] left-[0.009rem] rounded-xl w-[18.741rem] h-[28.125rem] object-cover"
                      alt=""
                      src="/placeholder-image@2x.png"
                    />
                    <div className="absolute top-[23.688rem] left-[0rem] rounded-t-none rounded-b-xl bg-gray-300 [backdrop-filter:blur(4px)] w-[18.75rem] h-[4.438rem] flex flex-col items-start justify-center py-[0rem] px-[0.938rem] box-border">
                      <div className="w-[16.813rem] relative h-[1.875rem]">
                        <div className="absolute top-[0rem] left-[0rem] leading-[150%] font-semibold">
                          Dolmabahçe Sarayı
                        </div>
                        <div className="absolute top-[0.031rem] left-[13.938rem] leading-[150%] font-semibold">
                          2 Gün
                        </div>
                      </div>
                      <div className="w-[16.813rem] h-[2.125rem] flex flex-row items-start justify-between">
                        <div className="w-[17.313rem] flex flex-row items-center justify-start py-[0.125rem] px-[0rem] box-border gap-[0rem_0.625rem]">
                          <img
                            className="w-[1.008rem] relative h-[1.585rem]"
                            alt=""
                            src="/vector.svg"
                          />
                          <div className="relative leading-[150%] font-semibold">
                            İstanbul
                          </div>
                        </div>
                        <div className="relative leading-[150%] font-semibold">
                          1299 TL
                        </div>
                      </div>
                    </div>
                    <img
                      className="absolute top-[1.25rem] right-[1rem] w-[1.875rem] h-[1.875rem]"
                      alt=""
                      src="/kalp--favori-animated.svg"
                    />
                  </div>
                  <img
                    className="absolute top-[0rem] left-[0rem] w-[7.304rem] h-[5.185rem] object-contain"
                    alt=""
                    src="/frame-76@2x.png"
                  />
                </div>
                <div className="absolute top-[0rem] left-[61.75rem] w-[18.75rem] h-[28.125rem]">
                  <div className="absolute top-[0rem] left-[0rem] w-[18.75rem] h-[28.125rem]">
                    <img
                      className="absolute top-[0rem] left-[0rem] rounded-xl w-[18.75rem] h-[28.125rem] object-cover"
                      alt=""
                      src="/placeholder-image@2x.png"
                    />
                    <div className="absolute top-[23.688rem] left-[0rem] rounded-t-none rounded-b-xl bg-gray-300 [backdrop-filter:blur(4px)] w-[18.75rem] h-[4.438rem] flex flex-col items-start justify-center py-[0rem] px-[0.938rem] box-border">
                      <div className="w-[16.813rem] relative h-[1.875rem]">
                        <div className="absolute top-[0rem] left-[0rem] leading-[150%] font-semibold">
                          Efes Antik Kent
                        </div>
                        <div className="absolute top-[0.031rem] left-[13.938rem] leading-[150%] font-semibold">
                          2 Gün
                        </div>
                      </div>
                      <div className="w-[16.813rem] h-[2.125rem] flex flex-row items-start justify-between">
                        <div className="w-[17.313rem] flex flex-row items-center justify-start py-[0.125rem] px-[0rem] box-border gap-[0rem_0.625rem]">
                          <img
                            className="w-[1.008rem] relative h-[1.585rem]"
                            alt=""
                            src="/vector.svg"
                          />
                          <div className="relative leading-[150%] font-semibold">
                            İzmir
                          </div>
                        </div>
                        <div className="relative leading-[150%] font-semibold">
                          1299 TL
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="absolute top-[0rem] left-[0rem] w-[7.304rem] h-[5.185rem] object-contain"
                    alt=""
                    src="/frame-76@2x.png"
                  />
                </div>
                <div className="absolute top-[0rem] left-[82.563rem] w-[19.438rem] h-[28.125rem]">
                  <div className="absolute top-[0rem] left-[0rem] w-[19.438rem] h-[28.125rem]">
                    <img
                      className="absolute top-[0rem] left-[0rem] rounded-xl w-[19.438rem] h-[28.125rem] object-cover"
                      alt=""
                      src="/placeholder-image@2x.png"
                    />
                    <div className="absolute top-[23.688rem] left-[0rem] rounded-t-none rounded-b-xl bg-gray-300 [backdrop-filter:blur(4px)] w-[19.438rem] h-[4.438rem] flex flex-col items-start justify-center py-[0rem] px-[0.938rem] box-border">
                      <div className="w-[16.813rem] relative h-[1.875rem]">
                        <div className="absolute top-[0rem] left-[0rem] leading-[150%] font-semibold">
                          Anıtkabir
                        </div>
                      </div>
                      <div className="w-[17.313rem] h-[2.125rem] flex flex-row items-start justify-between">
                        <div className="w-[17.313rem] flex flex-row items-center justify-start py-[0.125rem] px-[0rem] box-border gap-[0rem_0.625rem]">
                          <img
                            className="w-[1.008rem] relative h-[1.585rem]"
                            alt=""
                            src="/vector.svg"
                          />
                          <div className="relative leading-[150%] font-semibold">
                            Ankara
                          </div>
                        </div>
                        <div className="relative leading-[150%] font-semibold">
                          1299 TL
                        </div>
                      </div>
                    </div>
                    <img
                      className="absolute top-[1.188rem] left-[15.875rem] w-[1.875rem] h-[1.875rem]"
                      alt=""
                    />
                  </div>
                </div>
                <div className="absolute top-[0rem] left-[103.375rem] w-[18.75rem] h-[28.125rem]">
                  <div className="absolute top-[0rem] left-[0rem] w-[18.75rem] h-[28.125rem]">
                    <img
                      className="absolute top-[0rem] left-[0.009rem] rounded-xl w-[18.741rem] h-[28.125rem] object-cover"
                      alt=""
                      src="/placeholder-image@2x.png"
                    />
                    <div className="absolute top-[23.688rem] left-[0rem] rounded-t-none rounded-b-xl bg-gray-300 [backdrop-filter:blur(4px)] w-[18.75rem] h-[4.438rem] flex flex-col items-start justify-center py-[0rem] px-[0.938rem] box-border">
                      <div className="w-[16.813rem] relative h-[1.875rem]">
                        <div className="absolute top-[0rem] left-[0rem] leading-[150%] font-semibold">
                          Dolmabahçe Sarayı
                        </div>
                      </div>
                      <div className="w-[16.813rem] h-[2.125rem] flex flex-row items-start justify-between">
                        <div className="w-[17.313rem] flex flex-row items-center justify-start py-[0.125rem] px-[0rem] box-border gap-[0rem_0.625rem]">
                          <img
                            className="w-[1.008rem] relative h-[1.585rem]"
                            alt=""
                          />
                          <div className="relative leading-[150%] font-semibold">
                            İstanbul
                          </div>
                        </div>
                        <div className="relative leading-[150%] font-semibold">
                          1299 TL
                        </div>
                      </div>
                    </div>
                    <img
                      className="absolute top-[1.188rem] left-[13.601rem] w-[1.606rem] h-[1.875rem]"
                      alt=""
                    />
                  </div>
                </div>
                <div className="absolute top-[0rem] left-[0rem] w-[18.75rem] h-[28.125rem]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/placeholder-image@2x.png"
                  />
                  <div className="absolute h-[15.78%] w-full top-[84.22%] right-[0%] bottom-[0%] left-[0%] rounded-t-none rounded-b-xl bg-gray-300 [backdrop-filter:blur(4px)] flex flex-col items-start justify-center py-[0rem] px-[0.938rem] box-border">
                    <div className="w-[16.813rem] relative h-[1.875rem]">
                      <div className="absolute top-[0.031rem] left-[13.563rem] leading-[150%] font-semibold">
                        2 Gün
                      </div>
                      <div className="absolute top-[0rem] left-[0rem] leading-[150%] font-semibold">
                        Efes Antik Kent
                      </div>
                    </div>
                    <div className="w-[16.813rem] h-[2.125rem] flex flex-row items-start justify-between">
                      <div className="w-[17.313rem] flex flex-row items-center justify-start py-[0.125rem] px-[0rem] box-border gap-[0rem_0.625rem]">
                        <img
                          className="w-[1.008rem] relative h-[1.585rem]"
                          alt=""
                          src="/vector.svg"
                        />
                        <div className="relative leading-[150%] font-semibold">
                          İzmir
                        </div>
                      </div>
                      <div className="relative leading-[150%] font-semibold">
                        1299 TL
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[82rem] flex flex-row items-center justify-between">
                <div className="w-[4.5rem] flex flex-row items-center justify-between">
                  <div className="w-[0.5rem] relative rounded-[50%] bg-black h-[0.5rem]" />
                  <div className="w-[0.5rem] relative rounded-[50%] [background:linear-gradient(#d9d9d9,_#d9d9d9),_#8d8d8d] h-[0.5rem]" />
                  <div className="w-[0.5rem] relative rounded-[50%] [background:linear-gradient(#d9d9d9,_#d9d9d9),_#8d8d8d] h-[0.5rem]" />
                  <div className="w-[0.5rem] relative rounded-[50%] [background:linear-gradient(#d9d9d9,_#d9d9d9),_#8d8d8d] h-[0.5rem]" />
                  <div className="w-[0.5rem] relative rounded-[50%] [background:linear-gradient(#d9d9d9,_#d9d9d9),_#8d8d8d] h-[0.5rem]" />
                </div>
                <div className="w-[6.938rem] flex flex-row items-center justify-between">
                  <div className="rounded-31xl flex flex-row items-center justify-center p-[0.75rem] border-[1px] border-solid border-black">
                    <img
                      className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className="rounded-31xl flex flex-row items-center justify-center p-[0.75rem] border-[1px] border-solid border-black">
                    <img
                      className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[0rem] left-[2.25rem] w-[84.375rem] flex flex-row items-center justify-between text-[2rem] text-black">
              <div className="w-[53.125rem] flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-center justify-start">
                  <b className="w-[56.75rem] relative leading-[120%] inline-block">
                    Popüler Turlar
                  </b>
                </div>
              </div>
              <div className="w-[6.625rem] box-border flex flex-row items-center justify-center py-[0.75rem] px-[1.5rem] text-[1rem] border-[1px] border-solid border-black">
                <div className="relative leading-[150%]">Tüm Turlar</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-light-grey overflow-hidden flex flex-col items-center justify-start pt-[3.125rem] px-[4rem] pb-[6.25rem] gap-[3.125rem_0rem] text-center text-[1rem]">
          <div className="w-[51.75rem] flex flex-col items-center justify-start gap-[1rem_0rem]">
            <div className="w-[3.375rem] relative leading-[150%] font-semibold hidden">
              Explore
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem_0rem] text-[3rem]">
              <b className="self-stretch relative leading-[120%]">Blog</b>
              <div className="self-stretch relative text-[1.125rem] leading-[150%]">
                Keşfedin, öğrenin ve dünyayı paylaşın: Sitemizdeki her yazı,
                sizi farklı dünyalara götüren bir kapı aralıyor
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[1.563rem_0rem] text-left text-[0.875rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[3rem_0rem]">
              <div className="self-stretch flex flex-row items-start justify-start gap-[0rem_4rem]">
                <div className="flex-1 flex flex-row items-center justify-start gap-[0rem_2rem]">
                  <img
                    className="flex-1 relative rounded-xl max-w-full overflow-hidden h-[15.625rem] object-cover"
                    alt=""
                    src="/placeholder-image@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem_0rem]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem_0rem]">
                      <div className="self-stretch relative leading-[150%] font-semibold">
                        Adventure
                      </div>
                      <b className="self-stretch relative text-[1.5rem] leading-[140%]">
                        Uncover the Hidden Gems of Europe
                      </b>
                      <div className="self-stretch relative text-[1rem] leading-[150%]">
                        Embark on a journey through the picturesque landscapes
                        and vibrant cities of Europe.
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_1rem]">
                      <img
                        className="w-[3rem] relative h-[3rem] object-cover"
                        alt=""
                        src="/placeholder-image@2x.png"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="self-stretch relative leading-[150%] font-semibold">
                          John Doe
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_0.5rem]">
                          <div className="relative leading-[150%]">
                            11 Jan 2022
                          </div>
                          <div className="relative text-[1.125rem] leading-[150%]">
                            •
                          </div>
                          <div className="relative leading-[150%]">
                            5 min read
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-start gap-[0rem_2rem]">
                  <img
                    className="flex-1 relative rounded-xl max-w-full overflow-hidden h-[15.625rem] object-cover"
                    alt=""
                    src="/placeholder-image@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem_0rem]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem_0rem]">
                      <div className="self-stretch relative leading-[150%] font-semibold">
                        Culture
                      </div>
                      <b className="self-stretch relative text-[1.5rem] leading-[140%]">
                        Immerse Yourself in the Rich Heritage of Asia
                      </b>
                      <div className="self-stretch relative text-[1rem] leading-[150%]">
                        Discover the ancient traditions, breathtaking temples,
                        and mouthwatering cuisine of Asia.
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_1rem]">
                      <img
                        className="w-[3rem] relative h-[3rem] object-cover"
                        alt=""
                        src="/placeholder-image@2x.png"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="self-stretch relative leading-[150%] font-semibold">
                          Jane Smith
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_0.5rem]">
                          <div className="relative leading-[150%]">
                            11 Jan 2022
                          </div>
                          <div className="relative text-[1.125rem] leading-[150%]">
                            •
                          </div>
                          <div className="relative leading-[150%]">
                            5 min read
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[0rem_4rem]">
                <div className="flex-1 flex flex-row items-center justify-start gap-[0rem_2rem]">
                  <img
                    className="w-[19.688rem] relative rounded-xl h-[15.625rem] object-cover"
                    alt=""
                    src="/placeholder-image@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem_0rem]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem_0rem]">
                      <div className="self-stretch relative leading-[150%] font-semibold">
                        Nature
                      </div>
                      <b className="self-stretch relative text-[1.5rem] leading-[140%]">
                        Explore the Wonders of South America
                      </b>
                      <div className="self-stretch relative text-[1rem] leading-[150%]">
                        Experience the breathtaking landscapes, diverse
                        wildlife, and vibrant cultures of South America.
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_1rem]">
                      <img
                        className="w-[3rem] relative h-[3rem] object-cover"
                        alt=""
                        src="/placeholder-image@2x.png"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="self-stretch relative leading-[150%] font-semibold">
                          Michael Johnson
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_0.5rem]">
                          <div className="relative leading-[150%]">
                            11 Jan 2022
                          </div>
                          <div className="relative text-[1.125rem] leading-[150%]">
                            •
                          </div>
                          <div className="relative leading-[150%]">
                            5 min read
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-start gap-[0rem_2rem]">
                  <img
                    className="w-[19.688rem] relative rounded-xl h-[15.625rem] object-cover"
                    alt=""
                    src="/placeholder-image@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem_0rem]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem_0rem]">
                      <div className="self-stretch relative leading-[150%] font-semibold">
                        Adventure
                      </div>
                      <b className="self-stretch relative text-[1.5rem] leading-[140%]">
                        Discover the Beauty of Africa
                      </b>
                      <div className="self-stretch relative text-[1rem] leading-[150%]">
                        Embark on a safari and witness the majestic wildlife and
                        stunning landscapes of Africa.
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_1rem]">
                      <img
                        className="w-[3rem] relative h-[3rem] object-cover"
                        alt=""
                        src="/placeholder-image@2x.png"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="self-stretch relative leading-[150%] font-semibold">
                          John Doe
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_0.5rem]">
                          <div className="relative leading-[150%]">
                            11 Jan 2022
                          </div>
                          <div className="relative text-[1.125rem] leading-[150%]">
                            •
                          </div>
                          <div className="relative leading-[150%]">
                            5 min read
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center py-[0.75rem] px-[1.5rem] text-[1rem] border-[1px] border-solid border-black">
              <div className="relative leading-[150%]">Bloglar</div>
            </div>
          </div>
        </div>
        <div className="self-stretch relative h-[40.639rem] text-center text-[2.25rem]">
          <div className="absolute top-[-0.021rem] left-[0rem] bg-white w-[94.938rem] overflow-hidden flex flex-col items-center justify-center py-[7rem] px-[4rem] box-border gap-[5rem_0rem]">
            <div className="flex flex-col items-start justify-start gap-[1.5rem_0rem]">
              <b className="w-[35rem] relative leading-[120%] inline-block">
                Müşteri Yorumlarımız
              </b>
              <div className="w-[35rem] relative text-[1.125rem] leading-[150%] inline-block">
                Müşterilerimizin bize dair ne söylediklerini okuyun
              </div>
            </div>
            <div className="self-stretch overflow-x-auto flex flex-row items-center justify-start gap-[0rem_2rem] text-left text-[1.125rem]">
              <div className="w-[26.25rem] box-border shrink-0 flex flex-col items-start justify-start p-[2rem] gap-[1.5rem_0rem] border-[1px] border-solid border-black">
                <div className="overflow-hidden flex flex-row items-start justify-start gap-[0rem_0.25rem]">
                  <img
                    className="w-[1.25rem] relative h-[1.181rem]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[1.25rem] relative h-[1.181rem]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[1.25rem] relative h-[1.181rem]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[1.25rem] relative h-[1.181rem]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[1.25rem] relative h-[1.181rem]"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem_0rem]">
                  <div className="self-stretch relative leading-[150%]">
                    Harika bir deneyim yaşadım, herkese tavsiye ederim!
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[0rem_1.25rem] text-[1rem]">
                    <img
                      className="w-[3.5rem] relative rounded-[50%] h-[3.5rem] object-cover"
                      alt=""
                      src="/avatar-image@2x.png"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[150%] font-semibold">
                        John Doe
                      </div>
                      <div className="relative leading-[150%]">
                        CEO, ABC Company
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[26.25rem] box-border shrink-0 flex flex-col items-start justify-start p-[2rem] gap-[1.5rem_0rem] border-[1px] border-solid border-black">
                <div className="overflow-hidden flex flex-row items-start justify-start gap-[0rem_0.25rem]">
                  <img
                    className="w-[1.25rem] relative h-[1.181rem]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[1.25rem] relative h-[1.181rem]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[1.25rem] relative h-[1.181rem]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[1.25rem] relative h-[1.181rem]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[1.25rem] relative h-[1.181rem]"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem_0rem]">
                  <div className="self-stretch relative leading-[150%]">
                    Hizmetleri çok memnun edici, tekrar tercih edeceğim.
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[0rem_1.25rem] text-[1rem]">
                    <img
                      className="w-[3.5rem] relative rounded-[50%] h-[3.5rem] object-cover"
                      alt=""
                      src="/avatar-image@2x.png"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[150%] font-semibold">
                        Jane Smith
                      </div>
                      <div className="relative leading-[150%]">
                        Marketing Manager, XYZ Inc.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[26.25rem] box-border shrink-0 flex flex-col items-start justify-start p-[2rem] gap-[1.5rem_0rem] border-[1px] border-solid border-black">
                <div className="overflow-hidden flex flex-row items-start justify-start gap-[0rem_0.25rem]">
                  <img
                    className="w-[1.25rem] relative h-[1.181rem]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[1.25rem] relative h-[1.181rem]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[1.25rem] relative h-[1.181rem]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[1.25rem] relative h-[1.181rem]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-[1.25rem] relative h-[1.181rem]"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem_0rem]">
                  <div className="self-stretch relative leading-[150%]">
                    Personel çok ilgili, her sorunuma hızlı çözüm buldular.
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[0rem_1.25rem] text-[1rem]">
                    <img
                      className="w-[3.5rem] relative rounded-[50%] h-[3.5rem] object-cover"
                      alt=""
                      src="/avatar-image@2x.png"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[150%] font-semibold">
                        Mark Johnson
                      </div>
                      <div className="relative leading-[150%]">
                        CTO, XYZ Corporation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[26.25rem] box-border shrink-0 flex flex-col items-start justify-start p-[2rem] gap-[1.5rem_0rem] border-[1px] border-solid border-black">
                <div className="overflow-hidden flex flex-row items-start justify-start gap-[0rem_0.25rem]">
                  <img
                    className="w-[1.25rem] relative h-[1.181rem]"
                    alt=""
                    src="/vector.svg"
                  />
                  <img className="w-[1.25rem] relative h-[1.181rem]" alt="" />
                  <img className="w-[1.25rem] relative h-[1.181rem]" alt="" />
                  <img className="w-[1.25rem] relative h-[1.181rem]" alt="" />
                  <img className="w-[1.25rem] relative h-[1.181rem]" alt="" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem_0rem]">
                  <div className="self-stretch relative leading-[150%]">
                    Fiyat-performans açısından harika bir seçenek, pişman
                    olmayacaksınız!
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[0rem_1.25rem] text-[1rem]">
                    <img
                      className="w-[3.5rem] relative rounded-[50%] h-[3.5rem] object-cover"
                      alt=""
                      src="/avatar-image@2x.png"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[150%] font-semibold">
                        Emily Davis
                      </div>
                      <div className="relative leading-[150%]">
                        Marketing Director, ABC Corp
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-light-grey h-[40.639rem] overflow-hidden shrink-0 flex flex-col items-center justify-start py-[7rem] px-[4rem] box-border gap-[5rem_0rem] text-center text-[1rem]">
          <div className="w-[48rem] flex flex-col items-center justify-start gap-[1rem_0rem]">
            <div className="relative leading-[150%] font-semibold">Destek</div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem_0rem] text-[2.25rem]">
              <b className="self-stretch relative leading-[120%]">
                Destek İle İletişime Geçin
              </b>
              <div className="self-stretch relative text-[1.125rem] leading-[150%]">
                Sorularınız mı var? Yardıma mı ihtiyacınız var? Destek
                ekibimizle iletişime geçin.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[0rem_2rem] text-[2rem]">
            <div className="flex-1 flex flex-col items-center justify-start gap-[1.5rem_0rem]">
              <img
                className="w-[3rem] relative h-[3rem] overflow-hidden shrink-0"
                alt=""
                src="/icon--envelope.svg"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem_0rem]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1rem_0rem]">
                  <b className="self-stretch relative leading-[130%]">Email</b>
                  <div className="self-stretch relative text-[1rem] leading-[150%]">
                    Bir sorunuz mu var ya da yardıma mı ihtiyacınız var?
                    Rezervasyonlarınız veya diğer herhangi bir soru için destek
                    ekibimizle iletişime geçin
                  </div>
                </div>
                <div className="self-stretch relative text-[1rem] [text-decoration:underline] leading-[150%]">
                  cimritur@gmail.com
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-start gap-[1.5rem_0rem]">
              <img
                className="w-[3rem] relative h-[3rem] overflow-hidden shrink-0"
                alt=""
                src="/icon--messagedetail.svg"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem_0rem]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1rem_0rem]">
                  <b className="self-stretch relative leading-[130%]">
                    Canlı Destek
                  </b>
                  <div className="self-stretch relative text-[1rem] leading-[150%]">
                    Destek ekibimizle sohbet başlatın
                  </div>
                </div>
                <div className="self-stretch relative text-[1rem] [text-decoration:underline] leading-[150%]">
                  Yeni bir sohbet başlat
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-start gap-[1.5rem_0rem]">
              <img
                className="w-[3rem] relative h-[3rem] overflow-hidden shrink-0"
                alt=""
                src="/icon--phone.svg"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem_0rem]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1rem_0rem]">
                  <b className="self-stretch relative leading-[130%]">
                    Telefon
                  </b>
                  <div className="self-stretch relative text-[1rem] leading-[150%]">
                    Bizimle sohbet başlatın.
                  </div>
                </div>
                <div className="self-stretch relative text-[1rem] [text-decoration:underline] leading-[150%]">
                  +90 (555) 000-0000
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-start gap-[1.5rem_0rem]">
              <img
                className="w-[3rem] relative h-[3rem] overflow-hidden shrink-0"
                alt=""
                src="/icon--map.svg"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem_0rem]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1rem_0rem]">
                  <b className="self-stretch relative leading-[130%]">Ofis</b>
                  <div className="self-stretch relative text-[1rem] leading-[150%]">
                    Yardım etmek için buradayız.
                  </div>
                </div>
                <div className="self-stretch relative text-[1rem] [text-decoration:underline] leading-[150%]">
                  Ankara, Bilkent Üniversitesi C Building
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[40.639rem] overflow-hidden shrink-0 flex flex-col items-start justify-start py-[7rem] px-[4rem] box-border bg-cover bg-no-repeat bg-[top] text-[3rem] text-white">
          <div className="w-[48rem] flex flex-col items-start justify-start gap-[1rem_0rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem_0rem]">
              <b className="self-stretch relative leading-[120%]">
                Heyecan verici seyahat güncellemeleri için abone olun.
              </b>
              <div className="self-stretch relative text-[1.125rem] leading-[150%]">
                Yeni turlar, seyahat ipuçları ve özel teklifler hakkında bilgi
                sahibi olun.
              </div>
            </div>
            <div className="w-[32.063rem] flex flex-col items-start justify-start pt-[1rem] px-[0rem] pb-[0rem] box-border gap-[1rem_0rem] text-[1rem]">
              <div className="self-stretch flex flex-row items-start justify-start gap-[0rem_1rem]">
                <div className="flex-1 bg-white flex flex-row items-center justify-start p-[0.75rem] border-[1px] border-solid border-black">
                  <div className="flex-1 relative leading-[150%] text-transparent !bg-clip-text [background:linear-gradient(#000,_#000),_#505050] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    ....
                  </div>
                </div>
                <div className="w-[6.563rem] bg-black box-border flex flex-row items-center justify-center py-[0.75rem] px-[1.5rem] border-[1px] border-solid border-black">
                  <div className="relative leading-[150%]">Abone Ol</div>
                </div>
              </div>
              <div className="self-stretch relative text-[0.75rem] leading-[150%]">
                Katılarak, Şartlar ve Koşullarımızı kabul etmiş olursunuz.
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start py-[5rem] px-[4rem] gap-[5rem_0rem] text-[0.875rem]">
          <div className="w-[82rem] flex flex-row items-start justify-start gap-[0rem_4rem]">
            <div className="w-[54rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[2rem_0rem]">
              <img
                className="w-[3.938rem] relative h-[1.688rem] overflow-hidden shrink-0"
                alt=""
                src="/logo.svg"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem_0rem]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem_0rem]">
                  <div className="self-stretch relative leading-[150%] font-semibold">
                    Address:
                  </div>
                  <div className="self-stretch relative leading-[150%]">
                    Ankara, Türkiye
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem_0rem]">
                  <div className="self-stretch relative leading-[150%] font-semibold">
                    Contact:
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative [text-decoration:underline] leading-[150%]">
                      555-123-4567
                    </div>
                    <div className="self-stretch relative [text-decoration:underline] leading-[150%]">
                      info@CimriTur.com
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[0rem_0.75rem]">
                  <img
                    className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                    alt=""
                    src="/icon--facebook.svg"
                  />
                  <img
                    className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                    alt=""
                    src="/icon--instagram.svg"
                  />
                  <img
                    className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                    alt=""
                    src="/icon--x.svg"
                  />
                  <img
                    className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                    alt=""
                    src="/icon--linkedin.svg"
                  />
                  <img
                    className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                    alt=""
                    src="/icon--youtube.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[0rem_1.5rem] text-[1rem]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.75rem_0rem]">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Our Story
                </div>
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Our Team
                </div>
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Our Mission
                </div>
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Our Values
                </div>
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Contact Us
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.75rem_0rem]">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Web Design
                </div>
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Graphic Design
                </div>
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Digital Marketing
                </div>
                <div className="self-stretch relative leading-[150%] font-semibold">
                  SEO Services
                </div>
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Content Writing
                </div>
              </div>
            </div>
          </div>
          <div className="w-[82rem] flex flex-col items-start justify-start gap-[2rem_0rem]">
            <div className="self-stretch relative bg-black h-[0.063rem]" />
            <div className="self-stretch flex flex-row items-start justify-between">
              <div className="relative leading-[150%]">
                © 2023 CimriTur. Tüm hakları gizlidir.
              </div>
              <div className="flex flex-row items-start justify-start gap-[0rem_1.5rem]">
                <div className="relative [text-decoration:underline] leading-[150%]">
                  Privacy Policy
                </div>
                <div className="relative [text-decoration:underline] leading-[150%]">
                  Terms of Service
                </div>
                <div className="relative [text-decoration:underline] leading-[150%]">
                  Cookie Policy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isNavbar5Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNavbar5}
        >
          <Navbar onClose={closeNavbar5} />
        </PortalPopup>
      )}
      {isLoginComponentFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLoginComponentFrame}
        >
          <LoginComponentFrame onClose={closeLoginComponentFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default MacBookPro16;
