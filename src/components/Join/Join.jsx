import React from 'react'
import s from './Join.module.scss'
import Button from '../Button/Button'

const Join = () => {
  return (
    <>
    
    <section className={s.join}>
        <div className="container">
            <div className={s.wrap}>
                <h2>JOIN HYDRA</h2>
                <p>Let’s Build Your VR Experience</p>



                <div className={s.input}>
                    <input type="text" placeholder='Last Name'/>
                    <input type="text" placeholder='First Name'/>

                </div>
                <div className={s.input1}>
                    <input type="text" placeholder='Email'/>
                    <input type="text" placeholder='Phone Number'/>

                </div>

                <div className={s.inp1}>
                <input  type="text" placeholder='Subject'/>
                </div>
                <div>
                <input className={s.inp} type="text"  placeholder='Tell Us Something...'/>
                </div>


                <Button>SEND TO HYDRA</Button>
            </div>
        </div>
    </section>
    </>
  )
}

export default Join