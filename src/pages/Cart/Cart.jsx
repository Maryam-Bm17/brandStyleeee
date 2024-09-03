import React from 'react'
import './Cart.css';
import Header from '../../components/Header/Header';
import FooterSection from '../../components/FooterSection/FooterSection';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import CartBox from '../../components/CartBox/CartBox';

export default function Cart() {
  return (
    <>
      <Header />
      <main className="main">
        <BreadCrumb />
        <section className="card__main">
          <div className="container">
            <div className="row columnGap columnReverse">
              <div className="col-12 col-lg-8">
                <ul className="card__list">
                  <CartBox />
                  <CartBox />
                </ul>
              </div>
              <div className="col-12 col-lg-4">
                <div className="card__totals">
                  <h6 className="card__totals__heading">خلاصه سبد خرید</h6>
                  <table className="card__totals__table">

                    <tbody><tr className="card__totals__tr">
                      <td>مجموع سبد</td>
                      <td className="card__total__price">2100000 تومان</td>
                    </tr>
                      <tr className="card__totals__tr">
                        <td>حمل و نقل</td>
                        <td>رایگان</td>
                      </tr>
                      <tr className="card__totals__tr">
                        <td>مجموع</td>
                        <td className="total_price__all">2100000 تومان</td>
                      </tr>

                    </tbody></table>


                </div>
                <div className="btn__link card__totals__checkout">پرداخت صورتحساب</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  )
}
