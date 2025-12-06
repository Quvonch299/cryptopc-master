export default function CardStep({number,text}) {
  return (
    <div className="w-full h-max bg-white rounded-2xl p-5" style={{ boxShadow: "0px 8px 15px 0px #53535326" }}>
      <div className="flex flex-col items-start gap-3">

        <div className="font-manrope font-bold text-[32px] leading-[100%] tracking-[0px] text-center  w-14 h-14 max-sm:w-[48px] max-sm:h-[48px] mb-2.5 rounded-[15px] bg-linear-to-b from-[#FF7A1A] to-[#FF4C1A] flex items-center justify-center text-white">
          {number}
        </div>

        <p className="font-manrope font-normal text-[20px] leading-[130%] tracking-[0px]">
       {text}
        </p>
      </div>
    </div>
  );
}
