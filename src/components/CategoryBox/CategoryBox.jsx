import React from 'react';
import './CategoryBox.css';
import { Link } from 'react-router-dom'


export default function CategoryBox(props) {
    return (
        <>
            <div className=" col-6  col-md-4 col-lg-3">
                <div className="categories__item">
                    <div className="categories__item__img">
                        <img src={props.img} alt="" />
                    </div>
                    <div className="categories__item__title">
                        <Link to={props.href} className="title__link">{props.title}</Link>
                    </div>

                </div>
            </div>
        </>
    )
}
