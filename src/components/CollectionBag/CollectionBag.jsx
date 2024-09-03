import React from 'react';
import './CollectionBag.css';

export default function CollectionBag() {
  return (
    <>
        <section className="collectionBag">
            <div className="container">
                <div className="row margin-right">
                    <div className="collectionBag__wrapper">
                        <div className="col-12  col-sm-6">
                            <div className="collectionBag__img">
                                <img src="./images/bag (2).jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 ">
                            <div className="collectionBag__details">
                                <h3 className="collectionBag__details__title">کیف گاروانی وارداتی برند valentino</h3>
                                <p className="collectionBag__details__desc">
                                    کیف وارداتی برند valentino پنج رنگ کلاسیک دارد

                                </p>
                                <a href="" className="btn__link collectionBag__details__link">الان امتحانش کن</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
