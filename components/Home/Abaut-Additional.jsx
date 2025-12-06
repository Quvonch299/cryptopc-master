'use client'
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function AbouteAdditional() {
  return (
    <div className="bg-[#F7F7F7] rounded-t-[50px] pb-[100px] -translate-y-[100px]">

    <div className=" max-w-7xl m-auto  ">
      <div className="text-center pt-[100px] ">
        <h2 className="text-[48px]  font-bold max-sm:text-[28px]  mb-10">Дополнительно</h2>
        <p className="text-[22px] text-[#6F6F6F]  max-sm:text-[16px] ">
          Оплачивайте зарубежные сервисы прямо у нас. Просто выберите сервис,<br/>
          введите сумму — и наслаждайтесь любимыми подписками без ограничений
        </p>
      </div>
      <div className=" mt-[100px] max-sm:felx max-sm:flex-col  bg-[#0C0C0C] rounded-[30px] flex items-center gap-[20px] p-[50px]">
        <div className="bg-[linear-gradient(113.4deg,#FF4200_-0.76%,#FF8E4C_91.06%)] text-white rounded-[15px] max-sm:w-[333px] max-sm:h-[200px]  w-[480px] h-[200px] rounded-[30px]">
          <h3 className=" mt-[73px] max-sm:mt-[103px] font-bold ml-[30px] text-[24px] max-sm:text-[20px]">Оплата сервисов</h3>
          <p className=" text-[20px] ml-[30px] max-sm:text-[16px]">
            Пополнение баланса любимых <br/> зарубежных сервисов в пару кликов
          </p>
        </div>
       
        <div className="bg-white rounded-[30px] w-[200px] max-sm:w-[333px] max-sm:h-[150px] h-[200px] flex items-center justify-center">
          <Image src="/netflix.png" alt="Netflix" width={160} height={43} className="max-sm:w-[180px] " />
        </div>
        <div className="bg-white rounded-[30px] w-[200px] max-sm:w-[333px] max-sm:h-[150px] h-[200px] flex items-center justify-center">
          <Image src="/steam.png" alt="Steam" width={160} height={48} className="max-sm:w-[180px] max-sm:h-[54px] " />
        </div>
        <div className="bg-white rounded-[30px] w-[200px] max-sm:w-[333px] max-sm:h-[150px] h-[200px] flex items-center justify-center">
          <Image src="/spotify.png" alt="Spotify" width={160} height={48} className="max-sm:w-[180px] max-sm:h-[54px] " />
        </div>
      </div>
    </div>
    <div className="flex justify-center gap-[10px] mt-[50px] mb-[100px] max-sm:hidden">
      <div className="h-14 w-14 bg-[#181818] rounded-[15px] flex justify-center items-center text-[#FFFF]"><FaArrowLeft /></div>
      <div className="h-14 w-14 bg-[#181818] rounded-[15px] flex justify-center items-center text-[#FFFF]"><FaArrowRight /></div>
    </div>
    </div>
  );
}
