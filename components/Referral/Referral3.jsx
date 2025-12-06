import React from 'react'

export default function Referral3() {
  return (
    <div className="bg-[#FBFBFD] -translate-y-[80px] rounded-t-[50px]">
      <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8">

        <div>
          <h2 className="font-manrope flex text-center flex-col mb-[40px] pt-[100px] font-bold text-[48px] leading-[110%] tracking-[-1px] text-center max-sm:text-[32px]">
            Зарабатывай вместе с 3х уровневой <br className="max-sm:hidden" /> 
            реферальной программой
          </h2>

          <p className="text-center text-[22px] max-sm:text-[18px] leading-[130%]">
            Приглашай, строй команду <br className="max-sm:hidden" />
            и увеличивай доход без ограничений
          </p>
        </div>

        <div className="flex justify-center gap-[20px] mt-[100px] max-sm:flex-col max-sm:items-center">
          <div className="w-[400px] h-[120px] max-sm:w-[333px] max-sm:h-[88px] rounded-2xl px-5 py-4 flex items-center gap-4 bg-[#F5F5F5] text-black">
            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-black">
              <span className="text-white text-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19.9201 15.05L13.4001 8.53001C12.6301 7.76001 11.3701 7.76001 10.6001 8.53001L4.08008 15.05" stroke="#FBFBFD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
            <div className="flex flex-col">
              <p className="font-manrope font-normal text-[20px] text-[#CBCBCB] leading-[130%] max-sm:text-[18px]">3 линия</p>
              <p className="font-manrope font-semibold text-[22px] leading-[110%] mt-1 max-sm:text-[20px]">0.05% от суммы оплаты</p>
            </div>
          </div>
          <div className="w-[400px] h-[120px] max-sm:w-[333px] max-sm:h-[88px] rounded-2xl px-5 py-4 flex items-center gap-4 bg-[#333333] text-white">
            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-white">
              <span className="text-[#FF7A00] text-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19.9201 15.05L13.4001 8.53001C12.6301 7.76001 11.3701 7.76001 10.6001 8.53001L4.08008 15.05" stroke="#FF4200" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
            <div className="flex flex-col">
              <p className="font-manrope font-normal text-[20px] text-[#CBCBCB] leading-[130%] max-sm:text-[18px]">2 линия</p>
              <p className="font-manrope font-semibold text-[22px] leading-[110%] mt-1 max-sm:text-[20px]">0.1% от суммы оплаты</p>
            </div>
          </div>
          <div className="w-[400px] h-[120px] max-sm:w-[333px] max-sm:h-[88px] rounded-2xl px-5 py-4 flex items-center gap-4 bg-[#1A1A1A] text-white">
            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-[#FF7A00]">
              <span className="text-white text-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19.9201 15.05L13.4001 8.53001C12.6301 7.76001 11.3701 7.76001 10.6001 8.53001L4.08008 15.05" stroke="#FBFBFD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
            <div className="flex flex-col">
              <p className="font-manrope font-normal text-[20px] text-[#CBCBCB] leading-[130%] max-sm:text-[18px]">1 линия</p>
              <p className="font-manrope font-semibold text-[22px] leading-[110%] mt-1 max-sm:text-[20px]">0.15% от суммы оплаты</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
