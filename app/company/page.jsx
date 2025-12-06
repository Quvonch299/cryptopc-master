import ComponyTitle from '@/components/Compony/compony-title'
import React from 'react'
import ComponyPhone from '@/components/Compony/compony-phone'
import ComponyCard from '@/components/Compony/compony-card'
import ComponyText from '@/components/Compony/compony-text'

export default function compony() {
  return (
    <div>
      <ComponyTitle />
      <ComponyPhone />
      <ComponyCard/>
      <ComponyText />
    </div>
  )
}
