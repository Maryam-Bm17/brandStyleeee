import React from 'react';
import './WeblogBox.css';
import { Link } from 'react-router-dom';

export default function WeblogBox(props) {
    return (
        <>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3 weblog__box">
                <div className="weblog__item">
                    <div className="weblog__item__img">
                        <img src={props.img} className="item__img" alt="" />
                    </div>
                    <div className="weblog__content">
                        <Link to={props.href} className="weblog__content__title">

                            {props.title}
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}
