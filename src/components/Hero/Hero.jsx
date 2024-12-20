import React from 'react'
import s from './Hero.module.scss'
import Button from '../Button/Button'

const Hero = () => {
  return (
    <>
    
    <section className={s.hero}>
      <div className="container">
        <div className={s.wrap}>
          <div className={s.box}>
            <h1><span>Dive</span> Into The Depths <span>Of Virtual Reality</span></h1>


            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore 
nisl tincidunt eget. Lectus mauris eros in vitae .</p>


            <div>
              <Button>BUILD YOUR WORLD</Button>
              <img src="/Arrow.png" alt="" />
            </div>
          </div>
        </div>



        <img src="/Maskgroup.png" alt="" />
      </div>
    </section>
    </>
  )
}

export default Hero