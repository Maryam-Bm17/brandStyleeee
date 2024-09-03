import React from 'react';
import './SendSection.css';
import SendBox from '../SendBox/SendBox';
import { GiReturnArrow } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";

export default function SendSection() {
    return (
        <>
            <section className="send">
                <div className="container">
                    <div className="row margin-right">
                        <div className="send__wrapper">
                            <SendBox title="ارسال رایگان" icon={<TbTruckDelivery className='item__icon'/>} />
                            <SendBox title="تا 30 روز بازگشت وجه" icon={<GiReturnArrow className='item__icon'/>} />
                            <SendBox title="پشتیبانی 24 ساعته" icon={<BiSupport className='item__icon' />} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
