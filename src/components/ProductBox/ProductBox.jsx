import React from 'react';
import './ProductBox.css';

import { BsSuitHeart } from "react-icons/bs";
import { BsSuitHeartFill } from "react-icons/bs";

export default function ProductBox() {
    return (
        <>
            <div className="col-6 col-md-4 col-lg-3">
                <div className="product-card__wrapper">
                    <div className="product-card">
                        <a href="" className="product-card__img__wrapper">
                            <img src="/images/item1.png" className="img-primary" alt="" />
                            <img src="/images/SHORT-DRESS-IN-GLAZE-TWEED-LIGHT-.png" className="img-hover" alt="" />
                        </a>
                        <button className="heart-empty__btn">
                            <BsSuitHeart className='heart-empty__icon' />
                        </button>
                        <button className="heart-fill__btn">
                            <BsSuitHeartFill className='heart-fill__icon' />
                        </button>

                    </div>
                    <div className="product-card__details">
                        <h4 className="product-card__title">
                            شومیز حریر
                        </h4>
                        <div className="product-card__price">
                            <p className="product__price-off">800,000
                                <span> تومان</span>
                            </p>
                            <p className="product__price">650,000
                                <span> تومان</span>
                            </p>


                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
