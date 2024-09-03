import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import './HomeSection.css';
import { Autoplay } from 'swiper/modules';



export default function HomeSection() {
    return (
        <>
            <section className="home">

                <Swiper
                    dir="rtl"

                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}

                    className="mySwiper">
                    <SwiperSlide>
                        <div className="home__content__desktop">
                            <div className="row">


                                <div className="home__baner__desktop">

                                    <div className="col-lg-4">
                                        <div className="home__banner__img home__banner__right">
                                            <img src="./images/05427420737-015-a1.png" alt="" />
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="home__baner__content">
                                            <h1 className="banner__content__title">بهترین کالکشن مد</h1>
                                            <p className="banner__content__text">کالکشن زنانه</p>
                                            <div className="banner__content__link btn__link">خرید</div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="home__banner__img home__banner__left">
                                            <img src="./images/05427420737-015-p.png" alt="" />
                                        </div>
                                    </div>
                                </div>



                                <div className="home__banner__mobile">
                                    <div className="home__banner__mobile__images banner__mobile__images__woman">
                                        <div className="col-6">
                                            <div className="home__banner__img__mobile banner__img__mobile__right">
                                                <img src="./images/05427420737-015-a1.png" alt="" />
                                            </div>
                                        </div>

                                        <div className="col-6">
                                            <div className="home__banner__img__mobile banner__img__mobile__left">
                                                <img src="./images/05427420737-015-p.png" alt="" />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="home__baner__content__mobile">
                                        <h1 className="banner__content__title">بهترین کالکشن مد</h1>
                                        <p className="banner__content__text">کالکشن زنانه</p>
                                        <div className="banner__content__link btn__link">خرید</div>
                                    </div>


                                </div>




                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home__content__desktop home__content__men">
                            <div className="row">


                                <div className="home__baner__desktop">

                                    <div className="col-lg-4">
                                        <div className="home__banner__img home__banner__right">
                                            <img src="./images/04147167706-p.png" alt="" />
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="home__baner__content">
                                            <h1 className="banner__content__title">بهترین کالکشن مد</h1>
                                            <p className="banner__content__text">کالکشن مردانه</p>
                                            <div className="banner__content__link btn__link">خرید</div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="home__banner__img home__banner__left">
                                            <img src="./images/04147167706-a1.png" alt="" />
                                        </div>
                                    </div>
                                </div>




                                <div className="home__banner__mobile">
                                    <div className="home__banner__mobile__images banner__mobile__images__men">
                                        <div className="col-6">
                                            <div className="home__banner__img__mobile banner__img__mobile__right">
                                                <img src="./images/04147167706-p.png" alt="" />
                                            </div>
                                        </div>

                                        <div className="col-6">
                                            <div className="home__banner__img__mobile  banner__img__mobile__left">
                                                <img src="./images/04147167706-a1.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home__baner__content__mobile">
                                        <h1 className="banner__content__title">بهترین کالکشن مد</h1>
                                        <p className="banner__content__text">کالکشن مردانه</p>
                                        <div className="banner__content__link btn__link">خرید</div>
                                    </div>

                                </div>



                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>






            </section>

        </>
    )
}
