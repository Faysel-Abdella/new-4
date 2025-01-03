import React from "react";

const Preview = () => {
  return (
    <div className="w-full bg-white p-10">
      <div className="grid grid-cols-12 gap-y-[40px]">
        <p className="col-span-1 text-[#A3A6AB] items-center">상태</p>
        <p className="col-span-11 items-center">발송 완료 또는 취소</p>
        <p className="col-span-1 text-[#A3A6AB] items-center">구분</p>
        <div className="flex items-center  col-span-11 w-full">
          <div className="col-span-5 w-full">장비사업자</div>
          <div className="flex items-center gap-[20px] col-span-6 w-full">
            <p className="text-[#A3A6AB]">대상설정</p>
            <p>이용자 선택(00명)</p>
          </div>
        </div>
        <p className="col-span-1 text-[#A3A6AB] ">분류</p>
        <div className="flex items-center col-span-11 w-full">
          <div className="col-span-5 w-full">전체이용자</div>
          <div className="flex items-center gap-[20px] col-span-6 w-full">
            <p className="text-[#A3A6AB]">발송일시</p>
            <p>예약(2024-12-01 11시 00분)</p>
          </div>
        </div>

        <p className="col-span-1 text-[#A3A6AB]  items-center">제목</p>
        <div className="col-span-11 items-center">제목 텍스트</div>
        <p className="col-span-1 text-[#A3A6AB]  items-center">푸시 타이틀</p>
        <div className="col-span-11 items-center">타이틀 텍스트</div>
        <p className="col-span-1 text-[#A3A6AB]  items-center">푸시 내용</p>
        <div className="col-span-11 items-center">내용 텍스트 텍스트</div>
        <p className="col-span-1 text-[#A3A6AB]  items-center">랜딩페이지</p>
        <div className="col-span-11 items-center ">https://www.url.com</div>
      </div>
    </div>
  );
};

export default Preview;
