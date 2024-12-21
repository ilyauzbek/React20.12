import React, { useEffect } from "react";
import s from "./Hero.module.scss";
import Button from "../Button/Button";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Инициализация AOS с продолжительностью анимации 1200ms
  }, []);

  return (
    <>
      <section className={s.hero}>
        <div className="container">
          <div className={s.wrap}>
            <div className={s.box} data-aos="fade-up">
              <h1 data-aos="fade-right" data-aos-delay="300">
                <span>Dive</span> Into The Depths <br />
                Of <span>Virtual Reality</span>
              </h1>

              <p data-aos="fade-left" data-aos-delay="500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore nisl tincidunt
                eget. Lectus mauris eros in vitae.
              </p>

              <div className={s.bi} data-aos="zoom-in" data-aos-delay="700">
                <Button>BUILD YOUR WORLD</Button>
                <img src="/Arrow.png" alt="" />
              </div>
            </div>

            <img
              src="/Maskgroup.png"
              alt=""
              className={s.mask}
              data-aos="fade-up"
              data-aos-delay="900"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
