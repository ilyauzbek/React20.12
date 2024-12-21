import React from 'react'
import s from './About.module.scss'
import Button from '../Button/Button'

const About = () => {
  return (
    <>
    <section>
        <div className="container">
            <div className={s.wrapper}>
                <img src="/pexels1.png" alt="" />

                <div className={s.aboutt}>
                    
                <h2>ABOUT</h2>
                <p className={s.pp}>HYDRA VR</p>
                <p className={s.pp2}>Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
n tempor.</p>
                <Button>LET’S GET IN TOUCH</Button>
                
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About