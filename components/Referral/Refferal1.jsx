import Image from 'next/image'
import React from 'react'

export default function Referral1() {
  return (
    <div className='bg-[#181818] relative h-[617px] mt-[100px] rounded-t-[50px] '>
      <div className='text-[#FFFF] flex justify-center items-center h-full flex-col '>
        <h2 className=" mb-10 max-sm:mb-5 font-manrope font-bold text-[48px] max-sm:text-[28px] leading-[110%] max-sm:w-[233px] tracking-[-1px] text-center"
        >Зарабатывайте вместе  с нами</h2>
        <p className='text-center max-sm:w-[257px] text-[22px] max-sm:text-[16px]'>Приглашайте друзей в Crypto T Bank <br className='max-sm:hidden'/>
          и получайте комиссию с их оплат по QR-коду. </p>
      </div>
      <Image
        className='absolute top-0'
        src="/linamleft.png"
        width={550}
        height={550}
        alt="logo"
      />
      <Image
        className='absolute top-0 right-0'
        src="/linamright.png"
        width={600}
        height={600}
        alt="logo"
      />
    </div>
  )
}
