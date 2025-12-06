import React from "react";
import UiCard from "@/components/ui/UICard";
import Image from "next/image";
export default function Faq1() {

  return (
    <div className="max-w-7xl m-auto bg-[#F3F3F3] rounded-[50px] max-sm:ml-[15px] max-sm:mr-[15px] h-max mt-[50px] p-10 max-sm:p-[30px]">
      <div className="text-center mt-[100px]">
        <h2 className="font-manrope flex flex-col mb-6 max-sm:text-[28px] font-bold text-[48px] leading-[110%] tracking-[-1px]">
          Помощь в решении вопросов
        </h2>
        <p className="text-[22px] max-sm:text-[16px] mt-10 leading-[140%]">
          Мы собрали всё самое важное о Crypto T Bank , чтобы <br />
          вы могли пользоваться сервисом легко и уверенно
        </p>
      </div>

      <div className=" grid-cols-2 max-sm:grid-cols-1 grid gap-5 mt-[100px] mb-[100px] max-sm:mb-[50px]">
        <div><UiCard icon={<Image src='/icons/Rocket.svg' alt='img' width={24} height={24} />} title={'Как начать'} /></div>
        <div><UiCard icon={<Image src='/icons/scan.svg' alt='img' width={24} height={24} />} title={'Платежи'} /></div>
        <div><UiCard icon={<Image src='/icons/Security.svg' alt='img' width={24} height={24} />} title={'Безопасность'} /></div>
        <div><UiCard icon={<Image src='/icons/quesition.svg' alt='img' width={24} height={24} />} title={'Общие вопросы'} /></div>
        <div><UiCard icon={<Image src='/icons/Gift.svg' alt='img' width={24} height={24} />} title={'Акции и промокоды'} /></div>
        <div><UiCard icon={<Image src='/icons/msg.svg' alt='img' width={24} height={24} />} title={'Служба поддержки'} /></div>
      </div>
    </div>
  );
}
