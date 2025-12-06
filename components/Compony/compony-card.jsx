export default function ComponyCard() {
  const items = [
    {
      title: "Простота использования",
      desc: "Всё работает через Telegram просто, понятно и прозрачно",
      color: "bg-[#F3F3F3]",
      bg: "bg-[#FF8E4C]",
      svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.7299 3.51001L15.4899 7.03001C15.7299 7.52002 16.3699 7.99001 16.9099 8.08001L20.0999 8.61001C22.1399 8.95001 22.6199 10.43 21.1499 11.89L18.6699 14.37C18.2499 14.79 18.0199 15.6 18.1499 16.18L18.8599 19.25C19.4199 21.68 18.1299 22.62 15.9799 21.35L12.9899 19.58C12.4499 19.26 11.5599 19.26 11.0099 19.58L8.01991 21.35C5.87991 22.62 4.57991 21.67 5.13991 19.25L5.84991 16.18C5.97991 15.6 5.74991 14.79 5.32991 14.37L2.84991 11.89C1.38991 10.43 1.85991 8.95001 3.89991 8.61001L7.08991 8.08001C7.61991 7.99001 8.25991 7.52002 8.49991 7.03001L10.2599 3.51001C11.2199 1.60001 12.7799 1.60001 13.7299 3.51001Z" stroke="#FBFBFD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    },
    {
      title: "Финансовая свобода",
      desc: "Управляй своими средствами напрямую без банков, границ и ограничений",
      color: "bg-[#FF4200] text-[#F3F3F3]",
      bg: "bg-[#FBFBFD]",
      svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H7.63C7.94 21.74 8.21 21.42 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C4.06 15 3.19 15.33 2.5 15.88V11.51C2.5 9.44001 4.18999 7.75 6.25999 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.5 12.41V7.84004C2.5 6.65004 3.23 5.59 4.34 5.17L12.28 2.17C13.52 1.7 14.85 2.62003 14.85 3.95003V7.75002" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22.5588 13.9702V16.0302C22.5588 16.5802 22.1188 17.0302 21.5588 17.0502H19.5988C18.5188 17.0502 17.5288 16.2602 17.4388 15.1802C17.3788 14.5502 17.6188 13.9602 18.0388 13.5502C18.4088 13.1702 18.9188 12.9502 19.4788 12.9502H21.5588C22.1188 12.9702 22.5588 13.4202 22.5588 13.9702Z" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 12H14" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 19C9 19.75 8.79 20.46 8.42 21.06C8.21 21.42 7.94 21.74 7.63 22C6.93 22.63 6.01 23 5 23C3.54 23 2.27 22.22 1.58 21.06C1.21 20.46 1 19.75 1 19C1 17.74 1.58 16.61 2.5 15.88C3.19 15.33 4.06 15 5 15C7.21 15 9 16.79 9 19Z" stroke="#181818" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.44141 18.9995L4.4314 19.9895L6.5614 18.0195" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    },
    {
      title: "Прозрачные условия",
      desc: "Без скрытых сборов и сложных процедур — всё ясно и под твоим контролем",
      color: "bg-[#F3F3F3]",
      bg: "bg-[#FF8E4C]",
      svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.4902 2.23L5.50016 4.11C4.35016 4.54 3.41016 5.9 3.41016 7.12V14.55C3.41016 15.73 4.19016 17.28 5.14016 17.99L9.44016 21.2C10.8502 22.26 13.1702 22.26 14.5802 21.2L18.8802 17.99C19.8302 17.28 20.6102 15.73 20.6102 14.55V7.12C20.6102 5.89 19.6702 4.53 18.5202 4.1L13.5302 2.23C12.6802 1.92 11.3202 1.92 10.4902 2.23Z" stroke="#FBFBFD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.0498 11.87L10.6598 13.48L14.9598 9.17999" stroke="#FBFBFD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    },
    {
      title: "Поддержка популярных сетей",
      desc: "Уже доступны TON и TRC-20, скоро BTC, ETH и BNB",
      color: "bg-black text-[#CBCBCB]",
      bg: "bg-[#FBFBFD]",
      svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23 15.97C23 19.84 19.87 22.97 16 22.97L17.05 21.22" stroke="url(#paint0_linear_161_4823)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1 7.96997C1 4.09997 4.13 0.969971 8 0.969971L6.95 2.71997" stroke="url(#paint1_linear_161_4823)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.61963 13.07H9.42963C10.0496 13.07 10.5596 13.63 10.5596 14.2C10.5596 14.82 10.0596 15.33 9.42963 15.33H6.61963V13.07Z" stroke="url(#paint2_linear_161_4823)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.61963 15.33H9.83963C10.5496 15.33 11.1296 15.83 11.1296 16.46C11.1296 17.08 10.5496 17.59 9.83963 17.59H6.61963V15.33Z" stroke="url(#paint3_linear_161_4823)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.41943 17.58V18.7" stroke="url(#paint4_linear_161_4823)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.41943 11.95V13.07" stroke="url(#paint5_linear_161_4823)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.8498 15.33C14.8498 18.74 12.0898 21.5 8.67977 21.5C5.26977 21.5 2.50977 18.74 2.50977 15.33C2.50977 11.92 5.26977 9.15997 8.67977 9.15997C8.83977 9.15997 8.98977 9.16999 9.15977 9.17999C12.1898 9.40999 14.6098 11.83 14.8398 14.86C14.8398 15.01 14.8498 15.16 14.8498 15.33Z" stroke="url(#paint6_linear_161_4823)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.4997 8.66998C21.4997 12.08 18.7397 14.84 15.3297 14.84H14.8397C14.6097 11.81 12.1897 9.38997 9.15967 9.15997V8.66998C9.15967 5.25998 11.9197 2.5 15.3297 2.5C18.7397 2.5 21.4997 5.25998 21.4997 8.66998Z" stroke="url(#paint7_linear_161_4823)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="paint0_linear_161_4823" x1="15.9234" y1="15.97" x2="23.6801" y2="19.3258" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF4200" />
            <stop offset="1" stopColor="#FF8E4C" />
          </linearGradient>
          <linearGradient id="paint1_linear_161_4823" x1="0.923438" y1="0.969971" x2="8.68006" y2="4.32584" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF4200" />
            <stop offset="1" stopColor="#FF8E4C" />
          </linearGradient>
          <linearGradient id="paint2_linear_161_4823" x1="6.57654" y1="13.07" x2="9.88018" y2="15.5618" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF4200" />
            <stop offset="1" stopColor="#FF8E4C" />
          </linearGradient>
          <linearGradient id="paint3_linear_161_4823" x1="6.5703" y1="15.33" x2="9.96945" y2="18.2648" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF4200" />
            <stop offset="1" stopColor="#FF8E4C" />
          </linearGradient>
          <linearGradient id="paint4_linear_161_4823" x1="8.4085" y1="17.58" x2="9.55319" y2="18.0222" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF4200" />
            <stop offset="1" stopColor="#FF8E4C" />
          </linearGradient>
          <linearGradient id="paint5_linear_161_4823" x1="8.4085" y1="11.95" x2="9.55319" y2="12.3922" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF4200" />
            <stop offset="1" stopColor="#FF8E4C" />
          </linearGradient>
          <linearGradient id="paint6_linear_161_4823" x1="2.3748" y1="9.15997" x2="16.0486" y2="15.0759" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF4200" />
            <stop offset="1" stopColor="#FF8E4C" />
          </linearGradient>
          <linearGradient id="paint7_linear_161_4823" x1="9.0247" y1="2.5" x2="22.6985" y2="8.41591" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF4200" />
            <stop offset="1" stopColor="#FF8E4C" />
          </linearGradient>
        </defs>
      </svg>


    },
    {
      title: "Мгновенные платежи",
      desc: "Переводы и оплаты проходят за секунды без посредников, задержек и скрытых комиссий",
      color: "bg-[#F3F3F3]",
      bg: "bg-[#FF8E4C]",
      svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.0901 13.28H9.1801V20.48C9.1801 22.16 10.0901 22.5 11.2001 21.24L18.7701 12.64C19.7001 11.59 19.3101 10.72 17.9001 10.72H14.8101V3.52002C14.8101 1.84002 13.9001 1.50002 12.7901 2.76002L5.2201 11.36C4.3001 12.42 4.6901 13.28 6.0901 13.28Z" stroke="#FBFBFD" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    },
    {
      title: "Оплата в привычных местах",
      desc: "Пользуйся цифровыми активами в магазинах и онлайн-сервисах по всему миру",
      color: "bg-black text-[#CBCBCB]",
      bg: "bg-[#FBFBFD]",
      svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.37988 12L10.7899 14.42L15.6199 9.58002" stroke="url(#paint0_linear_626_1338)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.7499 2.45001C11.4399 1.86001 12.5699 1.86001 13.2699 2.45001L14.8499 3.81001C15.1499 4.07001 15.7099 4.28001 16.1099 4.28001H17.8099C18.8699 4.28001 19.7399 5.15001 19.7399 6.21001V7.91001C19.7399 8.30001 19.9499 8.87001 20.2099 9.17001L21.5699 10.75C22.1599 11.44 22.1599 12.57 21.5699 13.27L20.2099 14.85C19.9499 15.15 19.7399 15.71 19.7399 16.11V17.81C19.7399 18.87 18.8699 19.74 17.8099 19.74H16.1099C15.7199 19.74 15.1499 19.95 14.8499 20.21L13.2699 21.57C12.5799 22.16 11.4499 22.16 10.7499 21.57L9.16988 20.21C8.86988 19.95 8.30988 19.74 7.90988 19.74H6.17988C5.11988 19.74 4.24988 18.87 4.24988 17.81V16.1C4.24988 15.71 4.03988 15.15 3.78988 14.85L2.43988 13.26C1.85988 12.57 1.85988 11.45 2.43988 10.76L3.78988 9.17001C4.03988 8.87001 4.24988 8.31001 4.24988 7.92001V6.20001C4.24988 5.14001 5.11988 4.27001 6.17988 4.27001H7.90988C8.29988 4.27001 8.86988 4.06001 9.16988 3.80001L10.7499 2.45001Z" stroke="url(#paint1_linear_626_1338)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="paint0_linear_626_1338" x1="8.3007" y1="9.58002" x2="15.0134" y2="13.9243" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF4200" />
            <stop offset="1" stopColor="#FF8E4C" />
          </linearGradient>
          <linearGradient id="paint1_linear_626_1338" x1="1.78605" y1="2.00751" x2="23.9553" y2="11.6001" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF4200" />
            <stop offset="1" stopColor="#FF8E4C" />
          </linearGradient>
        </defs>
      </svg>

    },
  ];

  return (
   <div className="mb-[100px]">
<div className="text-center">
<h2 className="text-[48px] font-bold mt-[100px] mb-[100px] max-md:text-[36px] max-sm:text-[28px]">
Почему нам доверяют
</h2>
</div>


<div
className="grid grid-cols-3 gap-5 max-w-7xl mx-auto p-5 max-sm:grid-cols-1"
>
{items.map((item, i) => (
<div
key={i}
className={`${item.color} rounded-[30px] p-[30px] shadow-lg w-full`}
>
<div
className={`w-14 h-14 rounded-[15px] flex items-center justify-center ${item.bg}`}
>
{item.svg}
</div>


<h3 className="font-bold text-[24px] mt-10 max-sm:mt-6">{item.title}</h3>
<p className="text-[20px] leading-relaxed max-sm:text-[18px]">{item.desc}</p>
</div>
))}
</div>
</div>
  );
}
