import Image from 'next/image'
import React from 'react'

export default function ComponyPhone() {
  return (
    <div className="mt-[100px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-5 items-start flex-col lg:flex-row">
          <div className="relative bg-[#FCECE2] w-full h-[350px] sm:h-[400px] lg:h-[640px] rounded-[30px] overflow-hidden flex justify-center items-center">
            <div className="relative bottom-0 w-[240px] h-[330px] sm:w-[300px] sm:h-[420px] lg:w-[400px] lg:h-[600px]">
              <Image
                src="/phone.png"
                alt="phone"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 w-full lg:w-auto order-1 lg:order-2">
            <div className="bg-[#F3F3F3] w-full lg:w-[715px] rounded-[30px] py-8 sm:py-12 lg:py-[60px] px-6 sm:px-8 lg:px-[50px]">
              <div className="bg-[#181818] h-12 w-12 sm:h-14 sm:w-14 rounded-[15px] flex justify-center items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M13.7299 3.51001L15.4899 7.03001C15.7299 7.52002 16.3699 7.99001 16.9099 8.08001L20.0999 8.61001C22.1399 8.95001 22.6199 10.43 21.1499 11.89L18.6699 14.37C18.2499 14.79 18.0199 15.6 18.1499 16.18L18.8599 19.25C19.4199 21.68 18.1299 22.62 15.9799 21.35L12.9899 19.58C12.4499 19.26 11.5599 19.26 11.0099 19.58L8.01991 21.35C5.87991 22.62 4.57991 21.67 5.13991 19.25L5.84991 16.18C5.97991 15.6 5.74991 14.79 5.32991 14.37L2.84991 11.89C1.38991 10.43 1.85991 8.95001 3.89991 8.61001L7.08991 8.08001C7.61991 7.99001 8.25991 7.52002 8.49991 7.03001L10.2599 3.51001C11.2199 1.60001 12.7799 1.60001 13.7299 3.51001Z"
                    stroke="#FBFBFD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h2 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold mt-6 sm:mt-8 lg:mt-[30px]">
                Наша цель
              </h2>
              <p className="mt-3 text-[16px] sm:text-[18px] lg:text-[20px] leading-[24px] sm:leading-[26px] lg:leading-[28px] opacity-90">
                Превратить криптовалюту из спекулятивного<br className="hidden sm:block" />
                инструмента в повседневный платёжный инструмент
              </p>
            </div>
            <div className="bg-[#F3F3F3] w-full lg:w-[715px] rounded-[30px] py-8 sm:py-12 lg:py-[60px] px-6 sm:px-8 lg:px-[50px]">
              <div className="bg-[#181818] h-12 w-12 sm:h-14 sm:w-14 rounded-[15px] flex justify-center items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M23 15.97C23 19.84 19.87 22.97 16 22.97L17.05 21.22" stroke="#FBFBFD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M1 7.96997C1 4.09997 4.13 0.969971 8 0.969971L6.95 2.71997" stroke="#FBFBFD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.61963 13.07H9.42963C10.0496 13.07 10.5596 13.63 10.5596 14.2C10.5596 14.82 10.0596 15.33 9.42963 15.33H6.61963V13.07Z" stroke="#FBFBFD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.61963 15.33H9.83963C10.5496 15.33 11.1296 15.83 11.1296 16.46C11.1296 17.08 10.5496 17.59 9.83963 17.59H6.61963V15.33Z" stroke="#FBFBFD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8.41943 17.58V18.7" stroke="#FBFBFD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8.41943 11.95V13.07" stroke="#FBFBFD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.8498 15.33C14.8498 18.74 12.0898 21.5 8.67977 21.5C5.26977 21.5 2.50977 18.74 2.50977 15.33C2.50977 11.92 5.26977 9.15997 8.67977 9.15997C12.0898 9.40999 14.6098 11.83 14.8398 14.86C14.8498 15.16 14.8498 15.33 14.8498 15.33Z" stroke="#FBFBFD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21.4997 8.66998C21.4997 12.08 18.7397 14.84 15.3297 14.84H14.8397C14.6097 11.81 12.1897 9.38997 9.15967 9.15997V8.66998C9.15967 5.25998 11.9197 2.5 15.3297 2.5C18.7397 2.5 21.4997 5.25998 21.4997 8.66998Z" stroke="#FBFBFD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold mt-6 sm:mt-8 lg:mt-[30px]">
                Создаем инфраструктуру
              </h2>
              <p className="mt-3 text-[16px] sm:text-[18px] lg:text-[20px] leading-[24px] sm:leading-[26px] lg:leading-[28px] opacity-90">
                Которая позволяет людям платить цифровыми<br className="hidden sm:block" />
                активами в привычных магазинах и сервисах
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
