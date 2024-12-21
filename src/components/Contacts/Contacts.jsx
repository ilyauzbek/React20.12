import React, { useEffect } from "react";
import s from "./Contacts.module.scss";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Подключаем стили AOS

const Contacts = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Инициализация с продолжительностью анимации 1200ms
  }, []);

  return (
    <>
      <section>
        <div className={s.container}>
          <div className={s.wrapper}>

            <div className={s.wrap}>

              <div className={s.card} data-aos="fade-up">
                <div className={s.pay}>
                  <img src="/Page1.png" alt="" />

                  <div className={s.text}>
                    <h3>Pay Us a Visit</h3>
                    <p>Union St, Seattle, WA 98101, United States</p>
                  </div>
                </div>
              </div>

              <div className={s.card} data-aos="fade-up" data-aos-delay="200">
                <div className={s.pay}>
                  <img src="/phone1.png" alt="" />

                  <div className={s.text}>
                    <h3>Give Us a Call</h3>
                    <p>(110) 1111-1010</p>
                  </div>
                </div>
              </div>

              <div className={s.card3} data-aos="fade-up" data-aos-delay="400">
                <div className={s.pay}>
                  <img src="/mail.png" alt="" />

                  <div className={s.text}>
                    <h3>Send Us a Message</h3>
                    <p>Contact@HydraVTech.com</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
