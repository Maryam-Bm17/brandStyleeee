import React from 'react'
import HeaderSection from '../HeaderSection/HeaderSection';
import { BsSuitHeart } from "react-icons/bs";
import { BsSuitHeartFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './TrendingSection.css';

import { Autoplay, Pagination } from 'swiper/modules';


export default function TrendingSection({ bestSellerProducts }) {
    console.log(bestSellerProducts);
    return (
        <>
            <section className="trending">
                <div className="container">

                    <HeaderSection title="جدید ترین محصولات" />
                    <div className="trending__slider">

                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                300: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1024: {
                                    slidesPerView: 4,
                                },
                            }}
                            modules={[Autoplay, Pagination]}

                            className="swiperTrend"
                        >
                            {bestSellerProducts.map((product,index) => (
                                <SwiperSlide key={index}>
                                    <div className="product-card__wrapper">
                                        <div className="product-card">
                                            <Link to={`/Product/${product.url}`} className="product-card__img__wrapper">
                                                <img src={product.img} className="img-primary" alt="" />
                                                <img src={product.cover} className="img-hover"
                                                    alt="" />
                                            </Link>
                                            <button className="heart-empty__btn">
                                                <BsSuitHeart className='heart-empty__icon' />
                                            </button>
                                            <button className="heart-fill__btn">
                                                <BsSuitHeartFill className='heart-fill__icon' />
                                            </button>

                                        </div>
                                        <div className="product-card__details">
                                            <h4 className="product-card__title">
                                                {product.name}     
                                           </h4>
                                            <div className="product-card__price">
                                                <p className="product__price-off">{product.price.toLocaleString()}
                                                    <span> تومان</span>
                                                </p>
                                                <p className="product__price">{(product.price - (product.price * (0.1))).toLocaleString()}
                                                    <span> تومان</span>
                                                </p>


                                            </div>


                                        </div>
                                    </div>
                                </SwiperSlide>

                            ))}


                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}
