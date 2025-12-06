import React from 'react'
import CardStep from '../ui/CartStep'

export default function Referral2() {
  return (
    <div className='bg-[#F3F3F3] z-10 rounded-t-[50px] pb-[160px] -translate-y-[50px]'>
      <div className="max-w-7xl mx-auto max-sm:ml-[15px] max-sm:mr-[15px]">
        <div>
          <h2 className="font-manrope flex flex-col mb-10 pt-[100px]  max-sm:text-[28px] font-bold text-[48px] leading-[110%] tracking-[-1px] text-center"
          >Отправьте другу свою ссылку и <br className='max-sm:hidden'/>получайте бонусы</h2>
          <p className='text-center text-[22px] max-sm:text-[16px]'>Kоличество приглашённых не ограничено: чем <br/> больше друзей, тем больше бонусов.</p>
        </div>
        <div className='grid grid-cols-3 gap-5 max-sm:grid-cols-1 mt-[100px]'>
          <CardStep number={1} text={'Откройте раздел реферальной программы: Главная → Профиль → Реферальная программа'} />
          <CardStep number={2} text={'Выберите удобный способ: скопируйте реферальный код или или нажмите «Отправить ссылку»'} />
          <CardStep number={3} text={'Получай с приглашенных до 3-х уровней пользователей, % от оплат в приложении'} />
        </div>
      </div>
    </div>
  )
}
