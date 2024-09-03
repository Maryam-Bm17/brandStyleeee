import React from 'react';
import './Pagination.css';

export default function Pagination() {
  return (
    <>
           <section className="products__pagination">
            <div className="container">
               <div className="row margin-right">
                <div className="col-12">
                    <ul className="pagination__wrapper">
                        <li className="pagination__item pagination__item--active">1</li>
                        <li className="pagination__item">2</li>
                        <li className="pagination__item">3</li>
                        <li className="pagination__item">4</li>
                        <li className="pagination__item">5</li>

                    </ul>
                </div>
               </div>
            </div>
         </section>
    </>
  )
}
