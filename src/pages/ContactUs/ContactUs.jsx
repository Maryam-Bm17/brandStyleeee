import React from 'react'
import './ContactUs.css';
import Header from '../../components/Header/Header';
import FooterSection from '../../components/FooterSection/FooterSection';

export default function ContactUs() {
  return (
    <>
      <Header />
      <main className="main">
      <section className="login-header">
        <div className="container">
            <div className="row margin-right alignItemsJustify">


                    <div className="col-12 col-sm-6 col-xl-4">
                        <div className="login__wrapper">
                            <h2 className="login__title"> تماس با ما </h2>

                            <form action="" className="login__form">
                                <div className="login__form__item">
                                    <label ></label>
                                    <input type="text" name="" id="name" className="name" placeholder="نام و نام خانوادگی" />
                                </div>
                                <div className="login__form__item">
                                    <label ></label>
                                    <input type="text" name="" id="email" className="email" placeholder="ایمیل" />
                                </div>
                                <div className="login__form__item">
                                    <label ></label>
                                    <input type="text" name="" id="phone" className="phone" placeholder="شماره تماس" />
                                </div>
                                <div className="col-12 ">
                                    <textarea required="required" name="" id="" className=" comment__textarea" rows="4" placeholder="یک دیدگاه بنویسید:"></textarea>
                                </div>
                                <button className="btn__link login__form__btn">ارسال</button>

                            </form>
                        </div>
                    </div>

            </div>
        </div>
    </section>
      </main>
      <FooterSection />
    </>
  )
}
