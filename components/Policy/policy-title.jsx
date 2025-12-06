import React from 'react'

export default function PolicyTitle() {
  return (
  <div className='mt-[100px] mb-[50px]'>
    <div className='max-w-7xl m-auto'>
        <h2 className='text-[#181818] mb-10 text-[48px] font-bold'>Политика соблюдения требований ПОД/ФТ <br/> для Crypto T Bank</h2>
        <div className='flex flex-col gap-5'>

        <span className=''>
            <h2 className='text-[#181818] text-[24px] font-bold'>Дата вступления в силу:</h2>
            <p className='text-[20px] text-[#363636]'>28.07.2024</p>
        </span>
        <span >
            <h2 className='text-[#181818] text-[24px] font-bold'>Дата последнего пересмотра:</h2>
            <p className='text-[20px] text-[#363636]'>28.07.2024</p>
        </span>
        <span >
            <h2 className='text-[#181818] text-[24px] font-bold'>Утверждено</h2>
            <p className='text-[20px] text-[#363636]'>Crypto T Bank</p>
        </span>
        </div>
    </div>
  </div>
  )
}
