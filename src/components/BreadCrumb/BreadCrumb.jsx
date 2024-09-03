import React from 'react';
import './BreadCrumb.css';
import { GoChevronLeft } from "react-icons/go";
import { Link } from 'react-router-dom';

export default function BreadCrumb( {links} ) {
    console.log(links);
    console.log(links[1].title);
    return (
        <>
            <section className="shop-header">
                <div className="container">
                    <div className="row margin-right alignItems">

                        <div className="col-12  col-md-6">
                            <h2 className="shop-header__title">{links[1].title}</h2>
                        </div>
                        <div className="col-12  col-md-6">
                            <ul className="shop-header__links__list">
                                {links.map((link,index) => (
                                    <li key={index} className="shop-header__item">
                                        <Link to={`/${link.to}`}  className="shop-header__link">
                                            <span className={`shop-header__link__text ${link.className}`}>{link.title}</span>

                                            <GoChevronLeft className='shop-header__link__icon' />
                                        </Link>
                                    </li>
                                ))} 

                           
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
