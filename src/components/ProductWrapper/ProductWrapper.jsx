import React, { useEffect, useState, useContext } from 'react';
import './ProductWrapper.css';

import { HiOutlineChevronRight } from "react-icons/hi2";
import { HiOutlineChevronLeft } from "react-icons/hi2";


export default function ProductWrapper({props}) {


    // const [allImages, setAllImages] = useState([]);
    // const [mainImages, setMainImages] = useState([]);
    // const [mainProductId, setMainProductId] = useState(null);


console.log(props);

    return (
        <>
            <section className="product__wrapper">
                <div className="container">

                    <div className="row row-mobile">
                        <div className="col-12 col-md-5 col-lg-6">


                            <div className="product__img__wrapper">
                                <ul className="product__img__list">
                                    {/* {mainImage.map((item, index) => (
                                        <li className="product__img__item" key={index}>
                                            <img className="product__img__img" src={item.image} alt=""
                                                data-src="/images/item1.png" />
                                        </li>
                                    ))} */}
                                    {/* <li className="product__img__item">
                                        <img className="product__img__img" src={mainProducts.img} alt=""
                                            data-src="/images/item1.png" />
                                    </li>
                                    <li className="product__img__item">
                                        <img className="product__img__img" src="/images/SHORT-DRESS-IN-GLAZE-TWEED-LIGHT-.png"
                                            alt="" data-src="/images/SHORT-DRESS-IN-GLAZE-TWEED-LIGHT-.png" />
                                    </li> */}
                                </ul>


                                <div className="product-card__wrapper__slide">

                                    <HiOutlineChevronRight className='chevron-right' />
                                    <div className="product-card__img">
                                        {/* <img src={img} id="img-primary" className="img-primary" alt="" /> */}


                                    </div>

                                    <HiOutlineChevronLeft className='chevron-left' />
                                </div>


                            </div>




                        </div>

                        <div className="col-md-6 col-lg-5 wrapper__desc">
                            <div className="col-12   padding__col ">
                                <div className="product__details">

                                    <div className="product-card__details__slide">
                                        <h4 className="product-card__title">
                                            {/* {name} */}
                                        </h4> 
                                        <div className="product-card__price-text">
                                               {/* <p className="product__price-off">{Number(props.price).toLocaleString()}
                                                <span> تومان</span>
                                            </p> 
                                             <p className="product__price">
                                                 {((props.price) - (props.price * (0.1))).toLocaleString()} 

                                                <span> تومان</span>
                                            </p>   */}


                                        </div>


                                    </div>
                                    <div className="product__color">
                                        <div className="product__color__header">
                                            <p className="product__color__text">رنگ:</p>
                                            <span className="color">سرخابی</span>
                                        </div>
                                        <ul className="product__color__list">
                                            <li className="product__color__item">
                                                <label className="color-btn">
                                                </label>
                                                <input type="radio" name="country-flags" className='color-btn__input' />


                                            </li>
                                            <li className="product__color__item">
                                                <label className="color-btn">
                                                </label>
                                                    <input type="radio" name="country-flags" className='color-btn__input' />
                                                    {/* <div className="color__wrapper color__wrapper--active"></div> */}
                                              
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="product__size">
                                        <ul className="product__size__list">
                                          {props.sizes.map(size => (
                                                   <li className="product__size__li product__size__li--active">
                                                   <label className="size__span">{size}</label>
                                                   <input type="radio" name={size} value={size} id={size} className="size__input"
                                                   />
                                               </li>
                                            ))} 
                                            {/* <li className="product__size__li product__size__li--active">
                                                <label className="size__span">XS</label>
                                                <input type="radio" name="size" value="XS" id="XS" className="size__input"
                                                />
                                            </li>
                                            <li className="product__size__li">
                                                <label className="size__span" >S</label>
                                                <input type="radio" name="size" value="S" id="S" className="size__input"
                                                />
                                            </li>
                                            <li className="product__size__li">
                                                <label className="size__span" >M</label>
                                                <input type="radio" name="size" value="M" id="M" className="size__input"
                                                />
                                            </li>
                                            <li className="product__size__li">
                                                <label className="size__span" >L</label>
                                                <input type="radio" name="size" value="L" id="L" className="size__input"
                                                />
                                            </li>
                                            <li className="product__size__li">
                                                <label className="size__span" >XL</label>
                                                <input type="radio" name="size" value="XL" id="XL" className="size__input"
                                                />
                                            </li> */}
                                        </ul>
                                    </div>

                                </div>
                                <div className="btn__link product__btn">
                                    اضافه کردن
                                </div>
                            </div>
                            <div className="col-12  padding__col  product__desc__wrapper" id="product__desc__wrapper">
                                <div className="product__desc">
                                    <div className="product__desc__summery">
                                          <p className="desc__summery">
                                            {/* {description} */}
                                        </p>  
                                    </div>
                                    {/* <div className="product__composition" id="product__composition">
                                        <p className="composition">
                                            <span>
                                                ترکیب بندی
                                            </span>

                                            ما با برنامه های نظارتی کار می کنیم تا از انطباق با استانداردهای اجتماعی، زیست
                                            محیطی
                                            و بهداشتی و ایمنی محصولات خود اطمینان حاصل کنیم. برای ارزیابی انطباق، ما برنامه
                                            ای
                                            از ممیزی ها و برنامه های بهبود مستمر ایجاد کرده ایم.
                                            پوسته بیرونی
                                            اورجینال
                                            100% پنبه
                                            گلدوزی
                                            100٪ پلی استر
                                            پوشش
                                            100% پنبه
                                            که حداقل شامل:
                                            پوسته بیرونی
                                            اورجینال
                                            100٪ پنبه ارگانیک دارای گواهی OCS
                                            گلدوزی
                                            100٪ پلی استر بازیافتی دارای گواهی RCS
                                            مواد تایید شده
                                            پلی استر بازیافتی دارای گواهی RCS
                                            امروزه پلی استر بازیافتی عمدتاً از زباله های پلاستیکی PET ساخته می شود.
                                        </p>
                                        <p className="care">
                                            <span>
                                                مراقبت از لباس
                                            </span>
                                            مراقبت از لباس، مراقبت از محیط زیست است.
                                            شستشو با دمای پایین تر و چرخه های ظریف چرخش روی لباس ها ملایم تر هستند و به
                                            محافظت
                                            از رنگ، شکل و ساختار پارچه کمک می کنند. علاوه بر این، میزان انرژی مصرفی در
                                            فرآیندهای
                                            مراقبت را کاهش می دهند.
                                        </p>
                                        <p className="origin">
                                            <span>
                                                اصل و نصب
                                            </span>
                                            ما با تامین کنندگان، کارگران، اتحادیه ها و سازمان های بین المللی خود کار می کنیم
                                            تا
                                            زنجیره تامینی را ایجاد کنیم که در آن حقوق بشر رعایت شده و ترویج شود و به اهداف
                                            توسعه
                                            پایدار سازمان ملل کمک کند.
                                            به لطف همکاری با تامین کنندگان ما، ما در تلاشیم تا امکانات و فرآیندهای مورد
                                            استفاده
                                            برای تولید محصولات خود را بشناسیم تا قابلیت ردیابی آنها را درک کنیم.
                                            ساخت هند
                                        </p>
                                    </div>
                                    <div className="btn__link product__open">بیشتر</div> */}
                                </div>
                            </div>

                        </div>
                    </div>




                </div>
            </section>
        </>
    )
}
