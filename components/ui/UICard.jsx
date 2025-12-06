import Image from 'next/image';
import React from 'react'

export default function UiCard({ title, icon }) {
  return (
    <div className="w-full bg-[#FBFBFD] flex items-center gap-3 p-4 rounded-2xl  ">
      <div className="w-14 max-sm:h-[48px] max-sm:w-[48px] h-14 rounded-xl bg-[linear-gradient(113.4deg,#FF4200_-0.76%,#FF8E4C_91.06%)] flex items-center justify-center">
        {icon}
      </div>

      <h2 className="text-[22px] max-sm:text-[16px] font-medium text-gray-800">{title}</h2>
    </div>
  );
}
