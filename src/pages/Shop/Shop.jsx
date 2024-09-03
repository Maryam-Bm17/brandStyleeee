import React, { useEffect, useState } from 'react'
import './Shop.css';

import Header from '../../components/Header/Header';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import FooterSection from '../../components/FooterSection/FooterSection';
import ProductBox from '../../components/ProductBox/ProductBox';
import Pagination from '../../components/Pagination/Pagination';

import FilterIcon from '../../../public/svg/FilterIcon.jsx';
import { useLocation } from 'react-router-dom';




export default function Shop() {

  const location = useLocation();

  const [pathName, setPathName] = useState([]);
  useEffect(() => {

    setPathName(location.pathname.slice(10));

  }, [location]);


  return (
    <>
      <Header />
      <main className='main'>
        {pathName.length !== 0 ? (   <BreadCrumb links={
          [{ id: 1, title: 'خانه', to: '' , className:''},
          { id: 2, title: 'فروشگاه', to: 'shop' , className:''},
          { id: 3, title: `${pathName === 'men' ? ('مردانه') : ('زنانه')}`, to: `${pathName === 'men' ? ('shop/men/men') : ('shop/women/women')}`, className:'header__link--active' }
          ]
        } />) :(
          <BreadCrumb links={
            [{ id: 1, title: 'خانه', to: '' , className:''},
            { id: 2, title: 'فروشگاه', to: 'shop' , className:''},
            ]
          } />
        )}
     
        <section className="btn-Wrapper">

          <div className="container">
            <div className="row margin-right alignItems">
              <div className="col-12 col-sm-6">
                <div className="select-dropdown">
                  <select className="select__sort ">
                    <option value="default">

                      مرتب سازی براساس

                    </option>
                    <option value="default">

                      محبوب ترین

                    </option>
                    <option value="default">
                      جدید ترین
                    </option>
                    <option value="default">

                      براساس هزینه کم به زیاد
                    </option>
                    <option value="default">

                      براساس هزینه زیاد به کم
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-sm-6 ">
                <div className="btn__item__filter">
                  <div className="btn__link  filter__btn">

                    <FilterIcon />
                    <a href="#" className="filter__btn__link">فیلتر</a>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </section>
        <section className="products__wrapper">
          <div className="container">
            <div className="row margin-right">

              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />

            </div>
          </div>
        </section>
        <Pagination />
      </main>
      <FooterSection />
    </>
  )
}
