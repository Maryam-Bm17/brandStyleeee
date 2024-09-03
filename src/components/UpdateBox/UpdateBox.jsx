import React from 'react'
import './UpdateBox.css';

export default function UpdateBox(props) {
    return (
        <div className="col-12 col-lg-6">
            <div className={props.className}>
                <div className="update__item__img item__img1">
                    <img src={props.img} alt="" />
                    <div className="update__item__details ">
                        <h2 className="update__item__title">تا 30% تخفیف لباس های تابستانی</h2>

                        <h4 className="update__item__desc">کالکشن جدید</h4>
                        <a href="" className="btn__link update__item__link">خرید</a>
                    </div>
                </div>

            </div>
            </div>
    )
}
