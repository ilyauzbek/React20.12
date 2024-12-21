import React, { useEffect } from 'react';
import s from './Header.module.scss';
import Button from '../Button/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });  // инициализация с продолжительностью анимации 1000ms
  }, []);

  return (
    <>
      <header className={s.header}>
        <div className="container">
          <nav className={s.nav} data-aos="fade-down">
            <div className={s.logo} data-aos="fade-right">
              <img src="/Frame.png" alt="" />
              <img src="/TextH.png" alt="" />
            </div>

            <div className={s.menu} >
              <a data-aos="fade-left" delay="1200" href="">About </a>
              <a data-aos="fade-left" delay="1600" href="">SERVICES</a>
              <a data-aos="fade-left" delay="2000" href="">TECHNOLOGIES</a>
              <a data-aos="fade-left" delay="2200" href="">HOW TO</a>
            </div>

            <div className={s.btns} data-aos="fade-left">
              <button className={s.btn}>CONTACT US</button>
              <Button>JOIN HYDRA</Button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
