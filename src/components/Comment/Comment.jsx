import React from 'react';
import './Comment.css';

export default function Comment() {

  return (
    <>
      
      <section className="comment__wrapp">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="comment__title">نقد و بررسی ها</h3>
                    </div>
                    <div className="col-12">
                        <p className="comment__text">هیچ دیدگاهی برای این محصول نوشته نشده است.</p>
                    </div>
                    <div className="col-12">
                        <h4 className="comment__view__text">یک نظر ثبت کنید:</h4>
                    </div>
                    <div className="col-12 ">
                        <textarea required="required" name="" id="" className="comment__control comment__textarea" rows="4" placeholder="یک دیدگاه بنویسید:"></textarea>
                    </div>
                    <div className="col-12 col-sm-12 comment__details__wrapper">
                        <div className="col-12 col-sm-6 comment__input__name">
                            <input type="text" className="comment__control comment__input " name="" id="" placeholder="نام:" />
                        </div>
                        <div className="col-12 col-sm-6 comment__input__email">
                            <input type="text" className="comment__control comment__input " name="" id="" placeholder="ایمیل:" />
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn__link comment__btn">
                            ثبت کامنت
                        </button>
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}
