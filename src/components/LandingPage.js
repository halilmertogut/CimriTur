import { useCallback } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const LandingPage = () => {
  const onHakkmzdaTextClick = useCallback(() => {
    // Please sync "About Us" to the project
  }, []);

  const onLinkTwoTextClick = useCallback(() => {
    // Please sync "Filtrasyon" to the project
  }, []);

  const onLinkThreeTextClick = useCallback(() => {
    // Please sync "Rotalar" to the project
  }, []);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[4.125rem] box-border gap-[1.563rem] tracking-[normal]">
<header className="bg-white flex flex-col items-center justify-center p-5 md:p-10 w-full text-black">
  {/* First Layer: Right-aligned items now moved to the top */}
  <div className="w-full flex justify-end items-center gap-4 mt-4 md:mt-0">
    <button className="text-black font-medium hover:text-red-500 transition-colors">
      Freelance Tour Guide Girişi
    </button>
    <div className="text-black font-medium">
      Acenta Girişi
    </div>
    <div className="text-black font-medium cursor-pointer">
      Yardım & Destek
    </div>
  </div>
  {/* Second Layer: Contains the logo, navigation, and buttons */}
  <div className="w-full md:flex md:justify-between md:items-center mt-4 md:mt-6">
    <div className="flex justify-between items-center w-full md:w-auto">
      <img
        className="h-12 w-auto object-contain"
        src="/logo@2x.png"
        alt="Logo"
        style={{ maxWidth: '100px' }} // Adjust logo size as needed
      />
      <nav className="hidden md:flex gap-4">
        <a href="#" className="text-black hover:text-red-500 transition-colors">
          Ana Sayfa
        </a>
        <a href="#" className="text-black hover:text-red-500 transition-colors">
          Turlar
        </a>
        <a href="#" className="text-black hover:text-red-500 transition-colors">
          Rotalar
        </a>
        <a href="#" className="flex items-center text-black hover:text-red-500 transition-colors">
          Daha Fazla
          <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </a>
      </nav>
    </div>
    <div className="flex gap-4 mt-4 md:mt-0">
      <button className="py-2 px-4 border border-gray-300 hover:bg-gray-100 transition-all">
        Kayıt Ol
      </button>
      <button className="py-2 px-4 bg-red-500 hover:bg-red-600 text-white transition-colors">
        Giriş Yap
      </button>
    </div>
  </div>
</header>






      <section className="w-full flex flex-row items-center justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
        <img
          className="h-[29rem] flex-1 relative max-w-full overflow-hidden object-cover"
          loading="lazy"
          alt=""
          src="/base@2x.png"
        />
      </section>
      <section className="w-[82.625rem] flex flex-col items-center justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-center text-[1rem] text-black font-text-small-link">
        <div className="self-stretch flex flex-col items-center justify-start gap-[1rem_0rem] max-w-full">
          <div className="relative leading-[150%] font-semibold">Latest</div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem_0rem] text-[3.5rem]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq450:text-[2.125rem] mq450:leading-[2.5rem] mq800:text-[2.813rem] mq800:leading-[3.375rem]">
              Discover the Best Blogs
            </h1>
            <div className="self-stretch relative text-[1.125rem] leading-[150%]">
              Stay up to date with our latest blog posts.
            </div>
          </div>
          <div className="flex flex-row items-end justify-start min-h-[5.625rem] max-w-full [row-gap:20px] text-left mq450:flex-wrap">
            <button className="cursor-pointer py-[0.5rem] px-[0.813rem] bg-[transparent] w-[5.5rem] box-border flex flex-row items-center justify-center border-[1px] border-solid border-black hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
              <div className="relative text-[1rem] leading-[150%] font-text-small-link text-black text-left">
                View all
              </div>
            </button>
            <div className="flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
              <div className="relative leading-[150%]">Technology</div>
            </div>
            <div className="flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
              <div className="relative leading-[150%]">Health</div>
            </div>
            <div className="flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
              <div className="relative leading-[150%]">Travel</div>
            </div>
            <div className="flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
              <div className="relative leading-[150%]">Food</div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[82.5rem] flex flex-row flex-wrap items-start justify-center py-[0rem] px-[1.25rem] box-border gap-[1.563rem_1.354rem] max-w-full text-left text-[0.875rem] text-black font-text-small-link">
        <div className="h-[24.375rem] flex-1 flex flex-col items-start justify-start min-w-[7.5rem]">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/base-1@2x.png"
          />
          <div className="self-stretch flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem]">
            <div className="self-stretch relative leading-[150%] font-semibold">
              Nature
            </div>
            <h3 className="m-0 self-stretch relative text-[1.25rem] leading-[140%] font-bold font-inherit mq450:text-[1rem] mq450:leading-[1.375rem]">
              Explore the Wonders of South America
            </h3>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start pt-[0.313rem] px-[0rem] pb-[0rem] text-[1rem]">
            <div className="flex-1 relative leading-[150%]">
              Experience the breathtaking landscapes, diverse wildlife, and
              vibrant cultures of South America.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start pt-[1.563rem] px-[0rem] pb-[0.313rem] gap-[0rem_1rem]">
            <img
              className="h-[3rem] w-[3rem] relative object-cover min-h-[3rem]"
              loading="lazy"
              alt=""
              src="/placeholder-image@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Halil Mert Öğüt
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_0.5rem]">
                <div className="relative leading-[150%]">11 Jan 2022</div>
                <div className="relative text-[1.125rem] leading-[150%]">•</div>
                <div className="relative leading-[150%]">5 min read</div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[24.375rem] flex-1 flex flex-col items-start justify-start min-w-[7.563rem]">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/base-2@2x.png"
          />
          <div className="self-stretch flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem]">
            <div className="self-stretch relative leading-[150%] font-semibold">
              Nature
            </div>
            <h3 className="m-0 self-stretch relative text-[1.25rem] leading-[140%] font-bold font-inherit mq450:text-[1rem] mq450:leading-[1.375rem]">
              Explore the Wonders of South America
            </h3>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start pt-[0.313rem] px-[0rem] pb-[0rem] text-[1rem]">
            <div className="flex-1 relative leading-[150%]">
              Experience the breathtaking landscapes, diverse wildlife, and
              vibrant cultures of South America.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start pt-[1.563rem] px-[0rem] pb-[0.313rem] gap-[0rem_1rem]">
            <img
              className="h-[3rem] w-[3rem] relative object-cover min-h-[3rem]"
              loading="lazy"
              alt=""
              src="/placeholder-image@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Halil Mert Öğüt
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_0.5rem]">
                <div className="relative leading-[150%]">11 Jan 2022</div>
                <div className="relative text-[1.125rem] leading-[150%]">•</div>
                <div className="relative leading-[150%]">5 min read</div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[24.375rem] flex-1 flex flex-col items-start justify-start min-w-[7.563rem]">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/base-2@2x.png"
          />
          <div className="self-stretch flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem]">
            <div className="self-stretch relative leading-[150%] font-semibold">
              Nature
            </div>
            <h3 className="m-0 self-stretch relative text-[1.25rem] leading-[140%] font-bold font-inherit mq450:text-[1rem] mq450:leading-[1.375rem]">
              Explore the Wonders of South America
            </h3>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start pt-[0.313rem] px-[0rem] pb-[0rem] text-[1rem]">
            <div className="flex-1 relative leading-[150%]">
              Experience the breathtaking landscapes, diverse wildlife, and
              vibrant cultures of South America.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start pt-[1.563rem] px-[0rem] pb-[0.313rem] gap-[0rem_1rem]">
            <img
              className="h-[3rem] w-[3rem] relative object-cover min-h-[3rem]"
              loading="lazy"
              alt=""
              src="/placeholder-image@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Halil Mert Öğüt
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_0.5rem]">
                <div className="relative leading-[150%]">11 Jan 2022</div>
                <div className="relative text-[1.125rem] leading-[150%]">•</div>
                <div className="relative leading-[150%]">5 min read</div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[24.375rem] flex-1 flex flex-col items-start justify-start min-w-[7.563rem]">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/base-2@2x.png"
          />
          <div className="self-stretch flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem]">
            <div className="self-stretch relative leading-[150%] font-semibold">
              Nature
            </div>
            <h3 className="m-0 self-stretch relative text-[1.25rem] leading-[140%] font-bold font-inherit mq450:text-[1rem] mq450:leading-[1.375rem]">
              Explore the Wonders of South America
            </h3>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start pt-[0.313rem] px-[0rem] pb-[0rem] text-[1rem]">
            <div className="flex-1 relative leading-[150%]">
              Experience the breathtaking landscapes, diverse wildlife, and
              vibrant cultures of South America.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start pt-[1.563rem] px-[0rem] pb-[0.313rem] gap-[0rem_1rem]">
            <img
              className="h-[3rem] w-[3rem] relative object-cover min-h-[3rem]"
              alt=""
              src="/placeholder-image@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Halil Mert Öğüt
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_0.5rem]">
                <div className="relative leading-[150%]">11 Jan 2022</div>
                <div className="relative text-[1.125rem] leading-[150%]">•</div>
                <div className="relative leading-[150%]">5 min read</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[82.5rem] flex flex-row flex-wrap items-start justify-center py-[0rem] px-[1.25rem] box-border gap-[1.563rem_1.313rem] max-w-full text-left text-[0.875rem] text-black font-text-small-link">
        <div className="flex-1 flex flex-col items-start justify-start min-w-[10.375rem] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <img
              className="self-stretch h-[9.25rem] relative max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/base-5@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem]">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Nature
              </div>
              <h3 className="m-0 self-stretch relative text-[1.25rem] leading-[140%] font-bold font-inherit mq450:text-[1rem] mq450:leading-[1.375rem]">
                Explore the Wonders of South America
              </h3>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start pt-[0.313rem] px-[0rem] pb-[0rem] box-border max-w-full text-[1rem]">
              <div className="flex-1 relative leading-[150%] inline-block max-w-full">
                Experience the breathtaking landscapes, diverse wildlife, and
                vibrant cultures of South America.
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start pt-[1.563rem] px-[0rem] pb-[0.313rem] gap-[0rem_1rem] mq450:flex-wrap">
              <img
                className="h-[3rem] w-[3rem] relative object-cover min-h-[3rem]"
                loading="lazy"
                alt=""
                src="/placeholder-image@2x.png"
              />
              <div className="w-[14.875rem] flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Halil Mert Öğüt
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_0.5rem]">
                  <div className="relative leading-[150%]">11 Jan 2022</div>
                  <div className="relative text-[1.125rem] leading-[150%]">
                    •
                  </div>
                  <div className="relative leading-[150%]">5 min read</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start min-w-[10.25rem] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <img
              className="self-stretch h-[9.25rem] relative max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/base-6@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem]">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Nature
              </div>
              <h3 className="m-0 self-stretch relative text-[1.25rem] leading-[140%] font-bold font-inherit mq450:text-[1rem] mq450:leading-[1.375rem]">
                Explore the Wonders of South America
              </h3>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start pt-[0.313rem] px-[0rem] pb-[0rem] box-border max-w-full text-[1rem]">
              <div className="flex-1 relative leading-[150%] inline-block max-w-full">
                Experience the breathtaking landscapes, diverse wildlife, and
                vibrant cultures of South America.
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start pt-[1.563rem] px-[0rem] pb-[0.313rem] gap-[0rem_1rem] mq450:flex-wrap">
              <img
                className="h-[3rem] w-[3rem] relative object-cover min-h-[3rem]"
                loading="lazy"
                alt=""
                src="/placeholder-image@2x.png"
              />
              <div className="w-[14.875rem] flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Halil Mert Öğüt
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_0.5rem]">
                  <div className="relative leading-[150%]">11 Jan 2022</div>
                  <div className="relative text-[1.125rem] leading-[150%]">
                    •
                  </div>
                  <div className="relative leading-[150%]">5 min read</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start min-w-[10.313rem] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <img
              className="self-stretch h-[9.25rem] relative max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/base-7@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem]">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Nature
              </div>
              <h3 className="m-0 self-stretch relative text-[1.25rem] leading-[140%] font-bold font-inherit mq450:text-[1rem] mq450:leading-[1.375rem]">
                Explore the Wonders of South America
              </h3>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start pt-[0.313rem] px-[0rem] pb-[0rem] box-border max-w-full text-[1rem]">
              <div className="flex-1 relative leading-[150%] inline-block max-w-full">
                Experience the breathtaking landscapes, diverse wildlife, and
                vibrant cultures of South America.
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start pt-[1.563rem] px-[0rem] pb-[0.313rem] gap-[0rem_1rem] mq450:flex-wrap">
              <img
                className="h-[3rem] w-[3rem] relative object-cover min-h-[3rem]"
                loading="lazy"
                alt=""
                src="/placeholder-image@2x.png"
              />
              <div className="w-[14.875rem] flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Halil Mert Öğüt
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_0.5rem]">
                  <div className="relative leading-[150%]">11 Jan 2022</div>
                  <div className="relative text-[1.125rem] leading-[150%]">
                    •
                  </div>
                  <div className="relative leading-[150%]">5 min read</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[82.5rem] flex flex-row flex-wrap items-start justify-center py-[0rem] px-[1.25rem] box-border gap-[1.563rem_1.354rem] max-w-full text-left text-[0.875rem] text-black font-text-small-link">
        <div className="h-[24.375rem] flex-1 flex flex-col items-start justify-start min-w-[7.563rem]">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/base-2@2x.png"
          />
          <div className="self-stretch flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem]">
            <div className="self-stretch relative leading-[150%] font-semibold">
              Nature
            </div>
            <h3 className="m-0 self-stretch relative text-[1.25rem] leading-[140%] font-bold font-inherit mq450:text-[1rem] mq450:leading-[1.375rem]">
              Explore the Wonders of South America
            </h3>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start pt-[0.313rem] px-[0rem] pb-[0rem] text-[1rem]">
            <div className="flex-1 relative leading-[150%]">
              Experience the breathtaking landscapes, diverse wildlife, and
              vibrant cultures of South America.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start pt-[1.563rem] px-[0rem] pb-[0.313rem] gap-[0rem_1rem]">
            <img
              className="h-[3rem] w-[3rem] relative object-cover min-h-[3rem]"
              loading="lazy"
              alt=""
              src="/placeholder-image@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Halil Mert Öğüt
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_0.5rem]">
                <div className="relative leading-[150%]">11 Jan 2022</div>
                <div className="relative text-[1.125rem] leading-[150%]">•</div>
                <div className="relative leading-[150%]">5 min read</div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[24.375rem] flex-1 flex flex-col items-start justify-start min-w-[7.563rem]">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/base-2@2x.png"
          />
          <div className="self-stretch flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem]">
            <div className="self-stretch relative leading-[150%] font-semibold">
              Nature
            </div>
            <h3 className="m-0 self-stretch relative text-[1.25rem] leading-[140%] font-bold font-inherit mq450:text-[1rem] mq450:leading-[1.375rem]">
              Explore the Wonders of South America
            </h3>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start pt-[0.313rem] px-[0rem] pb-[0rem] text-[1rem]">
            <div className="flex-1 relative leading-[150%]">
              Experience the breathtaking landscapes, diverse wildlife, and
              vibrant cultures of South America.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start pt-[1.563rem] px-[0rem] pb-[0.313rem] gap-[0rem_1rem]">
            <img
              className="h-[3rem] w-[3rem] relative object-cover min-h-[3rem]"
              loading="lazy"
              alt=""
              src="/placeholder-image@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Halil Mert Öğüt
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_0.5rem]">
                <div className="relative leading-[150%]">11 Jan 2022</div>
                <div className="relative text-[1.125rem] leading-[150%]">•</div>
                <div className="relative leading-[150%]">5 min read</div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[24.375rem] flex-1 flex flex-col items-start justify-start min-w-[7.563rem]">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/base-2@2x.png"
          />
          <div className="self-stretch flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem]">
            <div className="self-stretch relative leading-[150%] font-semibold">
              Nature
            </div>
            <h3 className="m-0 self-stretch relative text-[1.25rem] leading-[140%] font-bold font-inherit mq450:text-[1rem] mq450:leading-[1.375rem]">
              Explore the Wonders of South America
            </h3>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start pt-[0.313rem] px-[0rem] pb-[0rem] text-[1rem]">
            <div className="flex-1 relative leading-[150%]">
              Experience the breathtaking landscapes, diverse wildlife, and
              vibrant cultures of South America.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start pt-[1.563rem] px-[0rem] pb-[0.313rem] gap-[0rem_1rem]">
            <img
              className="h-[3rem] w-[3rem] relative object-cover min-h-[3rem]"
              loading="lazy"
              alt=""
              src="/placeholder-image@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Halil Mert Öğüt
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_0.5rem]">
                <div className="relative leading-[150%]">11 Jan 2022</div>
                <div className="relative text-[1.125rem] leading-[150%]">•</div>
                <div className="relative leading-[150%]">5 min read</div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[24.375rem] flex-1 flex flex-col items-start justify-start min-w-[7.5rem]">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/base-1@2x.png"
          />
          <div className="self-stretch flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem]">
            <div className="self-stretch relative leading-[150%] font-semibold">
              Nature
            </div>
            <h3 className="m-0 self-stretch relative text-[1.25rem] leading-[140%] font-bold font-inherit mq450:text-[1rem] mq450:leading-[1.375rem]">
              Explore the Wonders of South America
            </h3>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start pt-[0.313rem] px-[0rem] pb-[0rem] text-[1rem]">
            <div className="flex-1 relative leading-[150%]">
              Experience the breathtaking landscapes, diverse wildlife, and
              vibrant cultures of South America.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start pt-[1.563rem] px-[0rem] pb-[0.313rem] gap-[0rem_1rem]">
            <img
              className="h-[3rem] w-[3rem] relative object-cover min-h-[3rem]"
              alt=""
              src="/placeholder-image@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Halil Mert Öğüt
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_0.5rem]">
                <div className="relative leading-[150%]">11 Jan 2022</div>
                <div className="relative text-[1.125rem] leading-[150%]">•</div>
                <div className="relative leading-[150%]">5 min read</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[80.125rem] overflow-hidden flex flex-col items-start justify-start py-[7rem] px-[4rem] box-border bg-cover bg-no-repeat bg-[top] max-w-full text-left text-[3rem] text-white font-text-small-link mq1125:pl-[2rem] mq1125:pr-[2rem] mq1125:box-border mq1325:w-[calc(100%_-_40px)] mq800:pt-[4.563rem] mq800:pb-[4.563rem] mq800:box-border">
        <div className="w-[48rem] flex flex-col items-start justify-start gap-[1rem_0rem] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem_0rem]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq450:text-[1.813rem] mq450:leading-[2.188rem] mq800:text-[2.375rem] mq800:leading-[2.875rem]">
              Heyecan verici seyahat güncellemeleri için abone olun.
            </h1>
            <div className="self-stretch relative text-[1.125rem] leading-[150%]">
              Yeni turlar, seyahat ipuçları ve özel teklifler hakkında bilgi
              sahibi olun.
            </div>
          </div>
          <div className="w-[32.063rem] flex flex-col items-start justify-start pt-[1rem] px-[0rem] pb-[0rem] box-border gap-[1rem_0rem] max-w-full text-[0.75rem]">
            <div className="self-stretch h-[3rem] flex flex-row items-start justify-start gap-[0rem_1rem] max-w-full">
              <div className="flex-1 bg-white box-border flex flex-row items-center justify-start py-[0.75rem] pr-[0.813rem] pl-[0.688rem] max-w-[calc(100%_-_121px)] border-[1px] border-solid border-black">
                <input
                  className="w-full [border:none] [outline:none] font-text-small-link text-[1rem] bg-[transparent] h-[1.5rem] flex-1 relative leading-[150%] text-transparent !bg-clip-text [background:linear-gradient(#000,_#000),_#505050] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block min-w-[13.875rem] max-w-full"
                  placeholder="...."
                  type="text"
                />
              </div>
              <button className="cursor-pointer py-[0.75rem] px-[1.063rem] bg-black h-[3.125rem] w-[6.563rem] box-border flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-black hover:bg-darkslategray-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
                <div className="relative text-[1rem] leading-[150%] font-text-small-link text-white text-left">
                  Abone Ol
                </div>
              </button>
            </div>
            <div className="self-stretch relative leading-[150%]">
              Katılarak, Şartlar ve Koşullarımızı kabul etmiş olursunuz.
            </div>
          </div>
        </div>
      </section>
      <footer className="w-[80.125rem] bg-white overflow-hidden flex flex-col items-start justify-start py-[1.563rem] px-[0rem] box-border gap-[5rem_0rem] max-w-full text-left text-[0.875rem] text-black font-text-small-link mq450:gap-[5rem_0rem] mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border mq1325:w-[calc(100%_-_40px)] mq800:gap-[5rem_0rem]">
        <div className="self-stretch flex flex-row items-start justify-start gap-[0rem_4rem] max-w-full mq450:gap-[0rem_4rem] mq1125:flex-wrap mq800:gap-[0rem_4rem]">
          <div className="w-[54rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[2rem_0rem] min-w-[54rem] max-w-full mq450:gap-[2rem_0rem] mq1125:flex-1 mq1125:min-w-full">
            <img
              className="w-[3.938rem] h-[1.688rem] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/logo-1.svg"
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
                  <div className="self-stretch relative [text-decoration:underline] leading-[150%] whitespace-nowrap">
                    info@CimriTur.com
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] gap-[0rem_0.75rem]">
                <img
                  className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                  loading="lazy"
                  alt=""
                  src="/icon--facebook.svg"
                />
                <img
                  className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                  loading="lazy"
                  alt=""
                  src="/icon--instagram.svg"
                />
                <img
                  className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                  loading="lazy"
                  alt=""
                  src="/icon--x.svg"
                />
                <img
                  className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                  loading="lazy"
                  alt=""
                  src="/icon--linkedin.svg"
                />
                <img
                  className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                  loading="lazy"
                  alt=""
                  src="/icon--youtube.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-[22.125rem] overflow-hidden flex flex-row items-start justify-start gap-[0rem_1.5rem] min-w-[14.375rem] max-w-full text-[1rem]">
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
        <div className="self-stretch flex flex-col items-start justify-start gap-[2rem_0rem] max-w-full mq800:gap-[2rem_0rem]">
          <div className="self-stretch h-[0.063rem] relative bg-black" />
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq800:flex-wrap">
            <div className="relative leading-[150%]">
              © 2023 CimriTur. Tüm hakları gizlidir.
            </div>
            <div className="flex flex-row items-start justify-start gap-[0rem_1.5rem] max-w-full">
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
      </footer>
    </div>
  );
};

export default LandingPage;
