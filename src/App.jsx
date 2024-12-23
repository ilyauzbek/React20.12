import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Contacts from './components/Contacts/Contacts'
import Introdiction from './components/Introdiction/Introdiction'
import About from './components/About/About'
import WhyB from './components/WhyB/WhyB'
import Tarifs from './components/Tarifs/Tarifs'
import Hardware from './components/Hardware/Hardware'
import Level from './components/Level/Level'


const App = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <Contacts/>
    <Introdiction/>
    <About/>
    <WhyB/>
    <Tarifs/>
    <Hardware/>
    <Introdiction/>
    <Level/>
    </>
  )
}

export default App