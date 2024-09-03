import React from 'react';
import './CartBox.css';



export default function CartBox() {
    return (
        <>
            <li className="card__item__wrapper">
                <div className="card__item__remove">
                    <svg className="card__item__icon">
                        <use href="#close-card-menu"></use>
                    </svg>
                </div>
                <div className="card__item__content">
                    <div className="card__item__details">
                        <h4 className="card__item__title">
                            پیراهن زارا
                        </h4>
                        <div className="card__item__color">
                            <span>رنگ:</span>
                            <h5>مشکی</h5>
                        </div>
                        <div className="card__item__size">
                            <span>اندازه:</span>
                            <h5>l</h5>
                        </div>
                        <div className="card-box__quantity">
                            <input type="button"   className="card-box__input-btn" />
                            <input type="text" min="1"  name="" id="card-box__input" />
                            <input type="button"  className="card-box__input-btn" />
                        </div>
                        <div className="card-box__price">
                            1,100,000 تومان
                        </div>
                    </div>
                    <div className="card__item__img  card-box__img">
                        <img src="./images/item1.jpg" alt="" />
                    </div>
                </div>
            </li>
        </>
    )
}
