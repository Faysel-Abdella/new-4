import React from 'react'
import New from "@/src/app/assets/New.svg"
import Image from 'next/image'
interface  CustomerInquiryProps{
    title:string
    titleContainerStyles:string
    titleStyles:string
}
const CustomerInquiry = ({title,titleContainerStyles,titleStyles}:CustomerInquiryProps) => {
  return (
    <div  className={`rounded-[10px]  bg-white `}  >
    <div className={`border-b-1 ${titleContainerStyles} `} >
  <h3  className={`${titleStyles}`}>{title}</h3>
  </div>
  <div className='flex justify-between py-[18px]  px-[11px]'>
    <div className='flex flex-col gap-2'>
        <div className='flex gap-2 items-center'>
            <Image src={New} alt='New' width={30} height={30}/>
            <p className='text-sm  text-[#28A7E1]'>이건 어떻게 해야해요?</p>
        </div>
        <div className='flex gap-2 items-center'>
            <Image src={New} alt='New' width={30} height={30}/>
            <p className='text-sm text-[#28A7E1]'>뒤로가기 시 페이지가 이동되지 않아요</p>
        </div>
        <div className='flex gap-2 items-center'>
           <div className='w-[32px]'></div>
            <p className='text-sm text-[#28A7E1]'>매칭은 어떻게 해주나요?</p>
        </div>
        <div className='flex gap-2 items-center'>
           <div className='w-[32px]'></div>
            <p className='text-sm text-[#28A7E1]'>1:1 문의하기 테스트 입니다.</p>
        </div>
    </div>
    <div className='flex w-1/2   justify-around'>
        <div className='flex flex-col gap-2 items-center' >
            <p className='text-sm text-[#333333]'>대기</p>
            <p className='text-sm text-[#333333]'>대기</p>
            <p className='text-sm text-[#333333]'>답변 완료</p>
            <p className='text-sm text-[#333333]'>대기</p>
        </div>
        <div className='flex flex-col gap-2 items-center' >
            <p className='text-sm text-[#333333]'>2023.08.23 14:11:21</p>
            <p className='text-sm text-[#333333]'>2023.08.23 14:11:21</p>
            <p className='text-sm text-[#333333]'>2023.08.23 14:11:21</p>
            <p className='text-sm text-[#333333]'>2023.08.23 14:11:21</p>
            </div>
        
    </div>
  </div>
  </div>
  )
}

export default CustomerInquiry