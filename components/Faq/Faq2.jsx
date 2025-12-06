"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlinePlus } from "react-icons/ai";

export default function Faq2() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex == index ? null : index);
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mt-[100px] mb-[50px]">
        <h2 className="font-manrope font-bold text-[48px] leading-[110%] tracking-[-1px] text-center max-sm:text-[28px]">
          Как начать?
        </h2>
      </div>

      {data.map((item, index) => (
        <div
          key={index}
          className="border-b border-gray-300 p-[20px] max-sm:p-[15px]"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center text-left  max-sm:items-start max-sm:gap-2"
          >
            <span className="text-[24px] font-semibold text-black max-sm:text-[18px]">
              {item.title}
            </span>

            <motion.span
              animate={{ rotate: openIndex === index ? 45 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-xl font-bold max-sm:text-lg mt-1"
            >
              <AiOutlinePlus />
            </motion.span>
          </button>

          <AnimatePresence>
            {openIndex == index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="mt-3 text-gray-700 whitespace-pre-line text-[20px] max-sm:text-[18px]">
                  {item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
