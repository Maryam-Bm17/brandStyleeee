import React from 'react';
import './SendBox.css';
import DeliveryIcon from '../../../public/svg/DeliveryIcon';
import ReturnIcon from '../../../public/svg/ReturnIcon';



export default function SendBox(props) {
    return (
        <>
            <div className="col-12 col-sm-6 col-lg-4">
                <div className="send__item send__item__style">
                    <div className="send__item__content">
                        <h4 className="send__item__title">{props.title}</h4>
                        <p className="send__item__desc">اگر می خواهید از لورم استفاده کنید باید مطمئن شوید که هر
                            چیزی وجود دارد

                        </p>
                    </div>
                    <div className="send__item__icon">

                        {props.icon}                    </div>
                </div>
            </div>
        </>
    )
}
