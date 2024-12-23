import React from 'react'
import s from './Card.module.scss'
import Button from '../Button/Button'

const Card = ({image, title, text}) => {
  return (
    <>
    <div className={s.card}>
        <img className={s.imag} src={image} alt="" />
        <h3 className={s.hh}>{title}</h3>
        <p className={s.pp}>{text}</p>
        <Button className={s.btnn}>TRY IT NOW</Button>
    </div>
    </>
  )
}

export default Card