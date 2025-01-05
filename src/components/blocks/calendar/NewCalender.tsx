import React from "react";

const NewCalender = () => {
  return (
    <section className="relative bg-stone-50 py-10">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 overflow-x-auto">
        <div className="flex flex-col md:flex-row max-md:gap-3 items-center justify-between mb-5">
          <div className=" w-full flex items-center justify-center gap-4">
            <h6 className="text-[20px] font-[700] text-[#424242]">
              2024년 12월
            </h6>
          </div>
        </div>
        <div className=" relative">
          <div className="grid grid-cols-7 border-t border-gray-200 sticky top-0 left-0 bg-[#F1F3F6] w-full">
            <div className="p-3.5 flex items-center justify-center text-[16px] font-[700]  text-[#A2ABAF]">
              일
            </div>
            <div className="p-3.5 flex items-center justify-center text-[16px] font-[700]  text-[#A2ABAF]">
              월
            </div>
            <div className="p-3.5 flex items-center justify-center text-[16px] font-[700]  text-[#A2ABAF]">
              화
            </div>
            <div className="p-3.5 flex items-center justify-center text-[16px] font-[700]  text-[#A2ABAF]">
              수
            </div>
            <div className="p-3.5 flex items-center justify-center text-[16px] font-[700]  text-[#A2ABAF]">
              목
            </div>
            <div className="p-3.5 flex items-center justify-center text-[16px] font-[700]  text-[#A2ABAF]">
              금
            </div>
            <div className="p-3.5 flex items-center justify-center text-[16px] font-[700]  text-[#A2ABAF]">
              토
            </div>
          </div>
          <div className=" grid-cols-7 sm:grid w-full overflow-x-auto">
            <div className="h-32 lg:h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex justify-end px-2">
                <span className="text-xs font-semibold text-[#F05858]">1</span>
              </div>
            </div>

            <div className="h-32 lg:h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex justify-end px-2">
                <span className="text-xs font-semibold text-gray-400">10</span>
              </div>
            </div>

            <div className="h-32 lg:h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex justify-end px-2">
                <span className="text-xs font-semibold text-gray-400">3</span>
              </div>
            </div>

            <div className="h-32 lg:h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex justify-end px-2">
                <span className="text-xs font-semibold text-gray-400">4</span>
              </div>
            </div>

            <div className="h-32 lg:h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex justify-end px-2">
                <span className="text-xs font-semibold text-gray-400">5</span>
              </div>
            </div>

            <div className="h-32 lg:h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex justify-end px-2">
                <span className="text-xs font-semibold text-gray-400">6</span>
              </div>
            </div>

            <div className="h-32 lg:h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex justify-end px-2">
                <span className="text-xs font-semibold text-[#429FFF]">7</span>
              </div>
            </div>

            <div className="h-32 lg:h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex justify-end px-2">
                <span className="text-xs font-semibold text-[#F05858]">8</span>
              </div>
            </div>

            <div className="h-32 lg:h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex justify-end px-2">
                <span className="text-xs font-semibold text-gray-400">9</span>
              </div>
            </div>

            <div className="h-32 lg:h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex justify-end px-2">
                <span className="text-xs font-semibold text-gray-400">10</span>
              </div>
            </div>

            <div className="min-h-32 h-auto lg:min-h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex flex-col items-end justify-between px-2">
                <span className="text-xs font-semibold text-gray-400">11</span>
                <div className="flex flex-col">
                  <div className=" border-l-2 flex flex-col gap-0 px-1 border-[#FE1C1C] bg-[#F7D5D4]">
                    <span className="text-[11px] font-[400] text-grey-font-light">
                      06:00 - 07:30
                    </span>
                    <p className="text-[11px] font-[400] text-grey-font-light ">
                      미니 008 궤도 브레이크 전남 고흥군 시흥리
                    </p>
                  </div>

                  <div className=" border-l-2 flex flex-col gap-0 px-1 bg-[#DBE2F4] border-[#5881C9]">
                    <span className="text-[11px] font-[400] text-grey-font-light">
                      06:00 - 07:30
                    </span>
                    <p className="text-[11px] font-[400] text-grey-font-light ">
                      미니 008 궤도 브레이크 전남 고흥군 시흥리
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-32 lg:h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex flex-col items-end justify-between px-2">
                <span className="text-xs font-semibold text-gray-400">12</span>
                <div className=" border-l-2 flex flex-col gap-0 px-1 border-[#FE1C1C] bg-[#F7D5D4]">
                  <span className="text-[11px] font-[400] text-grey-font-light">
                    06:00 - 07:30
                  </span>
                  <p className="text-[11px] font-[400] text-grey-font-light ">
                    미니 008 궤도 브레이크 전남 고흥군 시흥리
                  </p>
                </div>
              </div>
            </div>

            <div className="h-32 lg:h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex justify-end px-2">
                <span className="text-xs font-semibold text-gray-400">13</span>
              </div>
            </div>

            <div className="h-32 lg:h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex justify-end px-2">
                <span className="text-xs font-semibold text-[#429FFF]">14</span>
              </div>
            </div>

            <div className="h-32 lg:h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex justify-end px-2">
                <span className="text-xs font-semibold text-[#F05858]">15</span>
              </div>
            </div>

            <div className="h-32 lg:h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex justify-end px-2">
                <span className="text-xs font-semibold text-gray-400">16</span>
              </div>
            </div>

            <div className="h-32 lg:h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex justify-end px-2">
                <span className="text-xs font-semibold text-gray-400">17</span>
              </div>
            </div>
            <div className="h-32 lg:h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex justify-end px-2">
                <span className="text-xs font-semibold text-gray-400">18</span>
              </div>
            </div>

            <div className="h-32 lg:h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex justify-end px-2">
                <span className="text-xs font-semibold text-gray-400">19</span>
              </div>
            </div>

            <div className="h-32 lg:h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex justify-end px-2">
                <span className="text-xs font-semibold text-gray-400">20</span>
              </div>
            </div>

            <div className="h-32 lg:h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex justify-end px-2">
                <span className="text-xs font-semibold text-[#429FFF]">21</span>
              </div>
            </div>

            <div className="h-32 lg:h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex justify-end px-2">
                <span className="text-xs font-semibold text-[#F05858]">22</span>
              </div>
            </div>

            <div className="h-32 lg:h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex justify-end px-2">
                <span className="text-xs font-semibold text-gray-400">23</span>
              </div>
            </div>

            <div className="h-32 lg:h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex justify-end px-2">
                <span className="text-xs font-semibold text-gray-400">24</span>
              </div>
            </div>
            <div className="h-32 lg:h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex justify-end px-2">
                <span className="text-xs font-semibold text-gray-400">25</span>
              </div>
            </div>

            <div className="h-32 lg:h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex justify-end px-2">
                <span className="text-xs font-semibold text-gray-400">26</span>
              </div>
            </div>

            <div className="h-32 lg:h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex justify-end px-2">
                <span className="text-xs font-semibold text-gray-400">27</span>
              </div>
            </div>

            <div className="h-32 lg:h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex justify-end px-2">
                <span className="text-xs font-semibold text-[#429FFF]">28</span>
              </div>
            </div>

            <div className="h-32 lg:h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex justify-end px-2">
                <span className="text-xs font-semibold text-[#F05858]">29</span>
              </div>
            </div>

            <div className="h-32 lg:h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex justify-end px-2">
                <span className="text-xs font-semibold text-gray-400">30</span>
              </div>
            </div>

            <div className="h-32 lg:h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex justify-end px-2">
                <span className="text-xs font-semibold text-gray-400">31</span>
              </div>
            </div>
            <div className="h-32 lg:h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex justify-end px-2">
                <span className="text-xs font-semibold text-gray-400"></span>
              </div>
            </div>

            <div className="h-32 lg:h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex justify-end px-2">
                <span className="text-xs font-semibold text-gray-400"></span>
              </div>
            </div>

            <div className="h-32 lg:h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex justify-end px-2">
                <span className="text-xs font-semibold text-gray-400"></span>
              </div>
            </div>

            <div className="h-32 lg:h-28 border-t border-[#DADFE2] flex items-end transition-all hover:bg-stone-100 py-2">
              <div className=" w-full h-full border-r border-gray-200 flex justify-end px-2">
                <span className="text-xs font-semibold text-[#429FFF]"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewCalender;
