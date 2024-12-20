import React, { children } from 'react'
import s from './Button.module.scss'

const Button = ({ Children }) => {
  return (
   <>
   
   <button className={s.btn}>{children}</button>
   </>
  )
}

export default Button