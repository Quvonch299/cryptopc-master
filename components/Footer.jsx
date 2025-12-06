
import React from 'react';
import { RiTelegram2Fill } from "react-icons/ri";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#151515] rounded-2xl p-[50px] ">
            <h3 className="text-[#FBFBFD] text-[24px] font-semibold">Crypto TBank</h3>
            <p className="mt-[20px] text-[20px]  leading-relaxed text-[#CBCBCB]">
              Начни использовать цифровые активы
              <br /> в повседневной жизни без банков и обменников
            </p>
          </div>

          <div className="bg-[#181818] rounded-2xl p-[50px] ">
            <h4 className="text-[#FBFBFD] text-[24px] font-semibold">Подписаться на новости</h4>
            <form className="mt-[39px] flex gap-3 items-center max-sm:flex-col">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 bg-[#363636]  placeholder:text-[#CBCBCB] placeholder:text-[22px] w-[273px] h-[52px]  rounded-[10px] px-5 py-[18px] outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="submit"
                className="rounded-[10px] w-[200px] max-sm:w-[273px] text-[20px] h-[52px] bg-gradient-to-r from-orange-500 to-orange-400 text-[#FBFBFD] font-medium shadow">
                Подписаться
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#151515] rounded-2xl p-[50px] ">
            <h5 className=" font-semibold mb-10 text-[24px] text-[#FBFBFD]">Кошелек</h5>
            <ul className="text-[#CBCBCB] space-y-2 text-[20px]">
              <li>Главная страница</li>
              <li>Как платить по QR коду</li>
              <li>Безопасность</li>
              <li>Дополнительные функции</li>
              <li>FAQ</li>
              <li>Реферальная программа</li>
            </ul>
          </div>

          <div className="bg-[#151515] rounded-2xl p-[50px]  ">
            <h5 className=" font-semibold mb-10 text-[24px] text-[#FBFBFD]">Компания</h5>
            <ul className="text-[#CBCBCB] space-y-2 text-[22px]">
              <li>О компании</li>
              <li>Контакты</li>
              <li>Политика AML</li>
              <li>Техподдержка</li>
            </ul>
          </div>

          <div className="bg-[#151515] rounded-2xl p-[50px] ">
            <h5 className="text-white font-semibold mb-10 text-[24px]">Соц сети</h5>
            <ul className="text-gray-400 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <FaInstagram size={24} className='text-[#FBFBFD]' /><p className='text-[22px] text-[#CBCBCB]'>Instagram*</p>
              </li>
              <li className="flex items-center gap-3"><RiTelegram2Fill size={24} className='text-[#FBFBFD]' /><p className='text-[22px] text-[#CBCBCB]'>Telegram</p></li>
              <li className="flex items-center gap-3"><FaFacebookF size={24} className='text-[#FBFBFD]' /><p className='text-[22px] text-[#CBCBCB]'>FaceBook</p></li>
            </ul>
            <p className="mt-[77px] text-[14px]  text-[#A6A6A7]">
              Instagram (принадлежит компании <br /> Meta, признанной экстремистской <br />
              и запрещённой на территории РФ)
            </p>
          </div>
        </div>

        <div className="text-center leading-[120%] text-gray-500">
          <p className='max-w-200 mx-auto '>
            * использование таких слов как "Оплата" и близких ему по смыслу подразумевает собой процесс, когда один участник сделки оплачивает товар или услугу, а в обмен получает криптовалюту.
          </p>
          <p className="mt-5">© 2025, Crypto T Bank</p>
        </div>
      </div>
    </footer>
  );
}
