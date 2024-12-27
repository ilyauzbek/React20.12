import React from 'react';
import s from './Manka.module.scss';

import 'swiper/css';
import 'swiper/css/autoplay'; // Импорт стилей для autoplay
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


const Manta = () => {
    return (
        <>
            <section className={s.manka}>
                <div className="container">
                    <div className={s.wrapper}>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            loop={true} // Бесконечная прокрутка
                            autoplay={{
                                delay: 3000, // Задержка между пролистыванием (в миллисекундах)
                                disableOnInteraction: false, // Продолжать автопрокрутку после взаимодействия
                            }}
                            modules={[Autoplay]} // Подключение модуля Autoplay
                        >
                            <SwiperSlide>
                                <div className={s.card}>
                                    <h2>Slide 1</h2>
                                    <p>Lorem ipsum dolor sit.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={s.card}>
                                    <h2>Slide 2</h2>
                                    <p>Lorem ipsum dolor sit.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={s.card}>
                                    <h2>Slide 3</h2>
                                    <p>Lorem ipsum dolor sit.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={s.card}>
                                    <h2>Slide 4</h2>
                                    <p>Lorem ipsum dolor sit.</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Manta;
