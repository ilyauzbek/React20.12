import React from 'react'
import s from './Level.module.scss'

const Level = () => {
  return (
    <>
    <section className={s.level}>
        <div className="container">
            <div className={s.wrap}>
                <div className={s.card}>
                    <h2>01</h2>
                    <p>3D Conception
                    & Design</p>
                </div>
                <div className={s.card}>
                    <h2>02</h2>
                    <p>Interaction
                    Design</p>
                </div>
                <div className={s.card}>
                    <h2>03</h2>
                    <p>VR World
                    User Testing</p>
                </div>
                <div className={s.card}>
                    <h2>04</h2>
                    <p>Hydra VR
                    Deploy</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Level