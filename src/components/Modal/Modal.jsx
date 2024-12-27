import React from 'react'
import s from './modal.module.scss'
import Button from '../Button/Button'

const Modal = ({ isModalOpen, onClose }) => {



  return (
    <>
    <div className={`${s.modal} ${isModalOpen ? s.active : ''} `}>
        <div className={s.box}>
            <h2>HI, I creator</h2>
            <p>Phone Number: +998 99 818 09 13</p>

           <div onClick={onClose}>
           <Button>Leave</Button>
           </div>

        </div>
    </div>
    </>
  )
}

export default Modal