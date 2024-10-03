import React from 'react'
import Header from '../../components/header'
import Countries from '../../components/countries'
import Programs from '../../components/pragrams'
import Iframe from '../../components/iframe'
import Voulenteers from '../../components/Voulenteers'
import Survive from '../../components/survive'
import Health from '../../components/Health'
import Countributers from '../../components/countributers'
import Footer from '../../components/footer'

export default function page() {
  return (
    <div>
      <Header/>
      <Countries/>
      <Programs/>
      <Iframe/>
      <Survive/>
      <Voulenteers/>
      <Health/>
      <Countributers/>
      <Footer/>
      
      
    </div>
  )
}
