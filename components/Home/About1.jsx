import React from 'react'

export default function About1() {
    return (
        <div>
            <div className='max-w-7xl m-auto mt-[100px] text-center
                            px-4 sm:px-6 md:px-8'>

                <h2 className='text-[28px] sm:text-[28px] md:text-[48px] text-center font-bold leading-[1.2]'>
                    Плати криптовалютой <br />по QR-коду
                </h2>

                <p className='text-center text-[16px] sm:text-[18px] md:text-[22px] mt-6 sm:mt-8 md:mt-10 leading-[1.4]'>
                    Начни использовать цифровые активы<br />
                    в повседневной жизни без банков и обменников
                </p>

                <button className='w-[220px] sm:w-[260px] md:w-[300px]
                                   h-[48px] sm:h-[50px] md:h-[52px]
                                   rounded-[10px] 
                                   bg-[linear-gradient(113.4deg,#FF4200_-0.76%,#FF8E4C_91.06%)]
                                   text-[16px] sm:text-[18px] md:text-[20px]
                                   text-[#FBFBFD] mt-8 sm:mt-10'>
                    Открыть кошелек
                </button>

            </div>
        </div>
    )
}
