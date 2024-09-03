import React from 'react';
import './FooterSection.css';
import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlineMobile } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";
import { BiLogoWhatsapp } from "react-icons/bi";
import { RiTelegramFill } from "react-icons/ri";
import { BsArrowUpShort } from "react-icons/bs";


export default function FooterSection() {
  return (
    <>
        <footer className="footer ">
        <div className="footer__top">

            <div className="container">
                <div className="row margin-right">

                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="footer__box">
                            <h4 className="footer__box__title">خدمات مشتریان</h4>
                            <ul className="footer__box__list">
                                <li className="footer__box__item">
                                    <a href="" className="footer__box__link">
                                        صفحه اصلی
                                    </a>
                                </li>
                                <li className="footer__box__item">
                                    <a href="" className="footer__box__link">
                                        ورود به حساب کاربری
                                    </a>
                                </li>
                                <li className="footer__box__item">
                                    <a href="" className="footer__box__link">
                                        لیست علاقه مندی ها
                                    </a>
                                </li>

                                <li className="footer__box__item">
                                    <a href="" className="footer__box__link">
                                        درباره ما
                                    </a>
                                </li>
                                <li className="footer__box__item">
                                    <a href="" className="footer__box__link">
                                        تماس با ما
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="footer__box">
                            <h4 className="footer__box__title"> دسته بندی</h4>
                            <ul className="footer__box__list">
                                <li className="footer__box__item">
                                    <a href="" className="footer__box__link">
                                        پوشاک آقایان
                                    </a>
                                </li>
                                <li className="footer__box__item">
                                    <a href="" className="footer__box__link">
                                        پوشاک بانوان
                                    </a>
                                </li>
                                <li className="footer__box__item">
                                    <a href="" className="footer__box__link">
                                        بیش ترین فروش
                                    </a>
                                </li>

                                <li className="footer__box__item">
                                    <a href="" className="footer__box__link">
                                        پرطرفدارها
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="footer__box">
                            <h4 className="footer__box__title">اطلاعات تماس</h4>
                            <ul className="footer__box__list">
                                <li className="footer__box__item">
                                    <a href="" className="footer__box__link__wrapper footer__box__link">
                                     
                                        <IoLocationOutline className='footer__icon' />
                                        <span>تهران، خیابان شریعتی</span>
                                    </a>
                                </li>
                                <li className="footer__box__item">
                                    <a href="" className="footer__box__link footer__box__link__wrapper">
                                     
                                        <TfiEmail className='footer__icon ' />
                                        <span>info@sitename.com</span>
                                    </a>
                                </li>
                                <li className="footer__box__item">
                                    <a href="" className="footer__box__link footer__box__link__wrapper">
                                  
                                        <AiOutlineMobile className='footer__icon ' />
                                        <span>09190000000</span>
                                    </a>
                                </li>



                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="footer__box">
                            <div className="footer__logos">
                                <a href="">
                                    <img src="./images/logo1.png" alt="" />
                                </a>

                            </div>
                            <div className="footer__socials">
                                <ul className="socials__list">
                                    <li className="socials__item">
                                        <a href="" className="socials__link">
                                         
                                            <IoLogoInstagram className='social__icon' />
                                        </a>
                                    </li>
                                    <li className="socials__item">
                                        <a href="" className="socials__link">
                                            
                                            <BiLogoWhatsapp className='social__icon' />
                                        </a>
                                    </li>
                                    <li className="socials__item">
                                        <a href="" className="socials__link">
                                       
                                            <RiTelegramFill className='social__icon' />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className="footer__bottom">
            <div className="container">
                <div className="row">


                    <div className="footer__bottom__content">
                        <p className="footer__bottom__text">تمامی حقوق برای brandStyle محفوظ می باشد.</p>
                    </div>

                </div>

            </div>

        </div>
        <a href="#" className="scrollUpp">
            
            <BsArrowUpShort className='arrowUpp'/>
        </a>
    </footer>
    </>
  )
}
