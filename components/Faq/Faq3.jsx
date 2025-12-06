"use client";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

export default function Faq3() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex == index ? null : index);
  };

  const data = [
    {
      title: "Как устроена оплата в Crypto TBank?",
      content: `Оплата в работает Crypto TBank по системе P2C (purchase-to-crypto), где криптовалюта обменивается на оплаченный товар/услугу:
1. Пользователь сканирует QR-код для оплаты по СПБ
2. Запрос на оплату переводится верифицированному контрагенту
3. Контрагент оплачивает счёт
4. Antarctic Wallet списывает криптовалюту с вашего баланса, как результат обмена`
    },
    {
      title: "Какими валютами можно оплачивать в Crypto TBank?",
      content: `В данный момент доступна оплата через USDT и TON. Если вы используете TON для оплаты, учитывайте установленный минимальный лимит в 1 TON на операцию.`
    },
    {
      title: "Как вернуть деньги за товар/услугу в Crypto TBank?",
      content: `Чтобы вернуть деньги:
1. Откройте нужный вам платёж в истории транзакций
2. Выберите функцию «Спорить»
3. Выберите сумму и причину
4. Ожидайте изменения статуса в течение 24 часов после заявки.`
    },
    {
      title: "Как продать криптовалюту на карту в Crypto TBank?",
      content: `Чтобы продать криптовалюту на карту:
1. В разделе «Оплатить или продать» выберите «Продажа USDT»
2. Введите необходимые данные
3. Ожидайте поступления в течение 2–3 минут.`
    },
    {
      title: "Есть ли комиссия в Crypto TBank?",
      content: `Да, есть комиссии:
• Для USDT в сети TRC20 — $2.75
• Для TON в сети TON — 0.27 TON
• Для USDT в сети TON — $0`
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-[100px]">
      <div className="mt-[100px] mb-[50px]">
        <h2 className="font-manrope font-bold text-[48px] leading-[110%] tracking-[-1px] text-center max-sm:text-[36px]">
          Платежи
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
            <span className="text-[24px] font-bold max-sm:text-[20px]">{item.title}</span>

            <motion.span
              animate={{ rotate: openIndex == index ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-[24px] font-bold max-sm:text-lg mt-1"
            >
              <AiOutlinePlus />
            </motion.span>
          </button>

          <AnimatePresence>
            {openIndex == index && (
              <motion.div
                key="content"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden mt-2 text-gray-700"
              >
                <pre style={{ fontFamily: 'manrope' }} className="font-manrope text-[20px] max-sm:text-[18px] whitespace-pre-wrap">
                  {item.content}
                </pre>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
