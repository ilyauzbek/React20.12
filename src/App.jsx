import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Contacts from './components/Contacts/Contacts'
import Introdiction from './components/Introdiction/Introdiction'
import About from './components/About/About'
import WhyB from './components/WhyB/WhyB'

const App = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <Contacts/>
    <Introdiction/>
    <About/>
    <WhyB/>
    </>
  )
}

export default App