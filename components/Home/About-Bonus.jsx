import Image from 'next/image'
import React from 'react'

export default function AboutBonus() {
  return (
    <div className='pt-[100px] pb-[100px] bg-[linear-gradient(113.4deg,#FF4200_-0.76%,#FF8E4C_91.06%)]'>
      <div className='  max-w-7xl m-auto overflow-hidden flex max-sm:flex-col justify-between  max-h-[350px] max-sm:max-h-[700px] max-sm:ml-[15px] max-sm:mr-[15px] bg-[#FBFBFD] rounded-[50px]'>
        <div className=' ml-[50px] '>
            <h2 className='mt-[50px] text-[48px] font-bold w-[722px] max-sm:text-[28px] max-sm:w-[273px]  '>Зарабатывайте вместе с нами</h2>
            <p className='text-[24px] mt-[40px] max-sm:mt-[20px] max-sm:text-[16px] max-sm:w-[273px]'>Приглашайте друзей в Crypto T Bank и <br className='max-sm:hidden'/> получайте комиссию с их оплат по QR-коду</p>
            <button className='hover:bg-[#5D5D5F] duration-500 hover:cursor-pointer text-[20px] max-sm:text-[16px] mt-[40px] mb-[87px] font-medium bg-[#181818] text-[#FFFF] w-[265px] h-[52px] rounded-[10px] '>Подробнее</button>
        </div>
        <div className='items-center flex max-sm:-mt-5'>
            <Image className='rotate-[10deg]' src={'/sectionGift.png'} width={509} height={509} alt='section'/>
        </div>
      </div>
    </div>
  )
}
