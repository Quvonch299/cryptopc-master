"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlinePlus } from "react-icons/ai";

export default function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    {
      title: "Как запустить Crypto T Bank?",
      content: `
Чтобы запустить Crypto T Bank следуйте инструкции:
1. Откройте Telegram (если нет аккаунта, зарегистрируйтесь)
2. Найдите официального бота по юзернейму: @cryptotbank_wallet
3. Нажмите на кнопки «Начать» → «Открыть Wallet».
      `,
    },
    {
      title: "Как пополнить баланс Crypto T Bank?",
      content: "Здесь будет информация о пополнении баланса.",
    },
    {
      title: "Как оплатить криптовалютой по СБП QR коду через Crypto T Bank?",
      content: "Здесь будет инструкция по оплате криптовалютой.",
    },
    {
      title: "Как активировать промокод в Crypto T Bank?",
      content: "Здесь будет инструкция по активации промокода.",
    },
  ];

  return (
    <div className="bg-[#FBFBFD] rounded-t-[50px] pb-[100px] -translate-y-[250px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-[100px] mb-[50px]">
          <h2 className="font-manrope font-bold text-[48px] max-sm:text-[28px]  leading-[110%] tracking-[-1px] text-center pt-[100px]">
            Как начать?
          </h2>
        </div>
        <div className="flex flex-col gap-[20px]">
          
        {data.map((item, index) => (
          <div key={index} className=" rounded-2xl  bg-[#F3F3F3]  p-[20px] sm:p-4">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-left"
            >
              <span className="text-[24px] sm:text-[20px] font-semibold text-black">
                {item.title}
              </span>

              <motion.span
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-xl font-bold"
              >
                <AiOutlinePlus />
              </motion.span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 text-gray-700 whitespace-pre-line text-[20px] sm:text-[16px]">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
        </div>


        <div className="flex justify-center mt-[50px]">
          <button className="text-[#FFFF] bg-[#181818] hover:bg-[#5D5D5F] duration-500 hover:cursor-pointer w-[265px] sm:w-[220px] h-[52px] rounded-[10px]">
            Справочный центр
          </button>
        </div>
      </div>
    </div>
  );
}
