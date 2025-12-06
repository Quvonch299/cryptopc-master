import About1 from '@/components/Home/About1'
import About2 from '@/components/Home/About2'
import About3 from '@/components/Home/About3'
import React from 'react'
import AboutQRcody from '@/components/Home/About-QRcody'
import AboutBonus from '@/components/Home/About-Bonus'
import AbouteAdditional from '@/components/Home/Abaut-Additional'
import AbouteDependable from '@/components/Home/Aboute-Dependable'
import FrequentlyAskedQuestions from '@/components/Home/FrequentlyAskedQuestions'

export default function Hpme() {
  return (
    <div>
      <About1 />
      <About2 />
      <About3 />
      <AboutQRcody />
      <AboutBonus />
      <AbouteDependable />
      <AbouteAdditional />
      <FrequentlyAskedQuestions />
    </div>
  )
}
