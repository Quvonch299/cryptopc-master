import Image from 'next/image'
import React from 'react'

export default function AboutQRcody() {
  return (
    <div className=" bg-[#F3F3F3] translate-y-[50px]  h-[850px]  rounded-b-[50px]">
      <div className="bg-[#181818] h-[515px] w-full  rounded-b-[50px] p-6">
        <h2 className="text-white pt-[120px] max-sm:text-[28px] text-center text-[48px] font-bold">
          Как платить по QR коду
        </h2>

        <div className=" grid grid-cols-3 max-sm:grid-cols-1 gap-6 max-w-7xl mx-auto mt-10">
          <div className='relative bg-[#FBFBFD]  rounded-[30px]'>
<div className='bg-[#FF4200] mt-[30px] ml-[30px] w-[34px] rounded-[10px] flex justify-center items-center h-[34px]'>
  <h1 className='text-[20px] font-bold  text-[#FFFF]'>1</h1>
</div>
<h2 className='mt-[10px] ml-[30px]  text-[#181818] font-bold text-[18px]'>Авторизуйтесь через бот в Telegram</h2>
<p className='mt-[15px] ml-[30px]'>@cryptotbank_wallet</p>

<Image className='z-10 ml-[85px] mt-[30px]' src={'/aboutephone1.png'} width={230} height={462} alt='q'/>



<Image className=' z-0 absolute bottom-0' src={'/circle.png'} width={400} height={400} alt='1'/>
          </div>
          <div className='relative bg-[#FBFBFD]  rounded-[30px]'>
<div className='bg-[#FF4200] mt-[30px] ml-[30px] w-[34px] rounded-[10px] flex justify-center items-center h-[34px]'>
  <h1 className='text-[20px] font-bold  text-[#FFFF]'>2</h1>
</div>
<h2 className='mt-[10px] ml-[30px]  text-[#181818] font-bold text-[18px]'>Авторизуйтесь через бот в Telegram</h2>
<p className='mt-[15px] ml-[30px]'>@cryptotbank_wallet</p>

<Image className='z-10 ml-[85px] mt-[30px]' src={'/aboutephone2.png'} width={230} height={462} alt='q'/>



<Image className=' -z-0 absolute top-0 ' src={'/circle2.png'} width={400} height={400} alt='1'/>
          </div>
          <div className='relative bg-[#FBFBFD]  rounded-[30px]'>
<div className='bg-[#FF4200] mt-[30px] ml-[30px] w-[34px] rounded-[10px] flex justify-center items-center h-[34px]'>
  <h1 className='text-[20px] font-bold  text-[#FFFF]'>3</h1>
</div>
<h2 className='mt-[10px] ml-[30px]  text-[#181818] font-bold text-[18px]'>Авторизуйтесь через бот в Telegram</h2>
<p className='mt-[15px] ml-[30px]'>@cryptotbank_wallet</p>

<Image className='z-10 ml-[85px] mt-[30px]' src={'/aboutephone3.png'} width={230} height={462} alt='q'/>



<Image className=' -z-0 absolute bottom-0' src={'/circle.png'} width={400} height={400} alt='1'/>
          </div>
      </div>
    </div>
   
    </div>
  );
}
