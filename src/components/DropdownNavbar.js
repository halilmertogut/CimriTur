const DropdownNavbar = () => {
  return (
    <div className="w-[94.5rem] relative bg-white box-border overflow-hidden flex flex-col items-start justify-start max-w-full max-h-full text-left text-[1rem] text-black font-text-tiny-normal border-b-[1px] border-solid border-black">
      <div className="w-[94.5rem] box-border h-[4.5rem] overflow-hidden shrink-0 hidden flex-row items-center justify-between py-[0rem] px-[4rem] border-b-[1px] border-solid border-black">
        <div className="flex flex-row items-center justify-start gap-[0rem_1.5rem]">
          <img
            className="w-[3.938rem] relative h-[1.688rem] overflow-hidden shrink-0"
            alt=""
          />
          <div className="overflow-hidden flex flex-row items-start justify-start gap-[0rem_2rem]">
            <div className="relative leading-[150%]">Link One</div>
            <div className="relative leading-[150%]">Link Two</div>
            <div className="relative leading-[150%]">Link Three</div>
            <div className="flex flex-row items-center justify-center gap-[0rem_0.25rem]">
              <div className="relative leading-[150%]">Link Four</div>
              <img
                className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-[0rem_1rem]">
          <div className="flex flex-row items-center justify-center py-[0.5rem] px-[1.25rem] border-[1px] border-solid border-black">
            <div className="relative leading-[150%]">Button</div>
          </div>
          <div className="bg-black flex flex-row items-center justify-center py-[0.5rem] px-[1.25rem] text-white border-[1px] border-solid border-black">
            <div className="relative leading-[150%]">Button</div>
          </div>
        </div>
      </div>
      <div className="w-[94.5rem] overflow-hidden flex flex-row items-start justify-start">
        <div className="flex-1 overflow-hidden flex flex-row items-start justify-start py-[2rem] pr-[2rem] pl-[4rem] gap-[0rem_2rem]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[1rem_0rem]">
            <div className="self-stretch relative text-[0.875rem] leading-[150%] font-semibold">
              Page group one
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0.5rem] px-[0rem] gap-[0rem_0.75rem]">
              <img
                className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                alt=""
                src="/icon--relume.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Page One
                </div>
                <div className="self-stretch relative text-[0.875rem] leading-[150%]">
                  Lorem ipsum dolor sit amet consectetur elit
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0.5rem] px-[0rem] gap-[0rem_0.75rem]">
              <img
                className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                alt=""
                src="/icon--relume.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Page Two
                </div>
                <div className="self-stretch relative text-[0.875rem] leading-[150%]">
                  Lorem ipsum dolor sit amet consectetur elit
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0.5rem] px-[0rem] gap-[0rem_0.75rem]">
              <img
                className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                alt=""
                src="/icon--relume.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Page Three
                </div>
                <div className="self-stretch relative text-[0.875rem] leading-[150%]">
                  Lorem ipsum dolor sit amet consectetur elit
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0.5rem] px-[0rem] gap-[0rem_0.75rem]">
              <img
                className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                alt=""
                src="/icon--relume.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Page Four
                </div>
                <div className="self-stretch relative text-[0.875rem] leading-[150%]">
                  Lorem ipsum dolor sit amet consectetur elit
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[1rem_0rem]">
            <div className="self-stretch relative text-[0.875rem] leading-[150%] font-semibold">
              Page group two
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0.5rem] px-[0rem] gap-[0rem_0.75rem]">
              <img
                className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                alt=""
                src="/icon--relume.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Page Five
                </div>
                <div className="self-stretch relative text-[0.875rem] leading-[150%]">
                  Lorem ipsum dolor sit amet consectetur elit
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0.5rem] px-[0rem] gap-[0rem_0.75rem]">
              <img
                className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                alt=""
                src="/icon--relume.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Page Six
                </div>
                <div className="self-stretch relative text-[0.875rem] leading-[150%]">
                  Lorem ipsum dolor sit amet consectetur elit
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0.5rem] px-[0rem] gap-[0rem_0.75rem]">
              <img
                className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                alt=""
                src="/icon--relume.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Page Seven
                </div>
                <div className="self-stretch relative text-[0.875rem] leading-[150%]">
                  Lorem ipsum dolor sit amet consectetur elit
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0.5rem] px-[0rem] gap-[0rem_0.75rem]">
              <img
                className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                alt=""
                src="/icon--relume.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Page Eight
                </div>
                <div className="self-stretch relative text-[0.875rem] leading-[150%]">
                  Lorem ipsum dolor sit amet consectetur elit
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch w-[35rem] bg-light-grey overflow-hidden shrink-0 flex flex-col items-start justify-start py-[2rem] pr-[6rem] pl-[2rem] box-border gap-[1rem_0rem]">
          <div className="self-stretch relative text-[0.875rem] leading-[150%] font-semibold">
            Featured from Blog
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem_0rem]">
            <div className="self-stretch flex flex-row items-start justify-start py-[0.5rem] px-[0rem] gap-[0rem_1.5rem]">
              <img
                className="w-[10rem] relative h-[6.563rem] object-cover"
                alt=""
                src="/placeholder-image@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem_0rem]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem_0rem]">
                  <div className="self-stretch relative leading-[150%] font-semibold">
                    Article Title
                  </div>
                  <div className="self-stretch relative text-[0.875rem] leading-[150%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </div>
                </div>
                <div className="relative text-[0.875rem] [text-decoration:underline] leading-[150%]">
                  Read more
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0.5rem] px-[0rem] gap-[0rem_1.5rem]">
              <img
                className="w-[10rem] relative h-[6.563rem] object-cover"
                alt=""
                src="/placeholder-image@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem_0rem]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem_0rem]">
                  <div className="self-stretch relative leading-[150%] font-semibold">
                    Article Title
                  </div>
                  <div className="self-stretch relative text-[0.875rem] leading-[150%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </div>
                </div>
                <div className="relative text-[0.875rem] [text-decoration:underline] leading-[150%]">
                  Read more
                </div>
              </div>
            </div>
          </div>
          <div className="w-[8.5rem] h-[2rem] flex flex-row items-center justify-start py-[0.25rem] px-[0rem] box-border gap-[0rem_0.5rem]">
            <div className="relative leading-[150%]">Button</div>
            <img
              className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/icon--relume.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownNavbar;
