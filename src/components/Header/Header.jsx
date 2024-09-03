import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './Header.css';

import BasketIcon from "../../../public/svg/BasketIcon.jsx";
import MenuIcon from '../../../public/svg/MenuIcon.jsx';
import MenuClose from '../../../public/svg/MenuClose.jsx';
import ArrowLeft from '../../../public/svg/ArrowLeft.jsx';
import AccountIcon from '../../../public/svg/AccountIcon.jsx';
import BackMenu from '../../../public/svg/BackMenu.jsx';
import SearchIcon from '../../../public/svg/SearchIcon.jsx';
import HeartIcon from '../../../public/svg/Heart.jsx';
import LoginIcon from '../../../public/svg/LoginIcon.jsx';
import ChevronLeft from '../../../public/svg/ChevronLeft.jsx';
import Menu from '../../../public/svg/Menu.jsx';
import CloseCardMenuIcon from '../../../public/svg/CloseCardMenuIcon.jsx';
import RemoveIcon from '../../../public/svg/RemoveIcon.jsx';

import HeartFill from '../../../public/svg/HeartFill.jsx';

import HeartEmpty from '../../../public/svg/HeartEmpty.jsx';

import HeartFull from '../../../public/svg/HeartFull.jsx';

import DeliveryIcon from '../../../public/svg/DeliveryIcon.jsx';

import ReturnIcon from '../../../public/svg/ReturnIcon.jsx';

import SupportIcon from '../../../public/svg/SupportIcon.jsx';

import LocationIcon from '../../../public/svg/LocationIcon.jsx';

import MobileIcon from '../../../public/svg/MobileIcon.jsx';

import Instagram from '../../../public/svg/Instagram.jsx';

import Whatsapp from '../../../public/svg/Whatsapp.jsx';

import Telegram from '../../../public/svg/Telegram.jsx';

import ArrowUp from '../../../public/svg/ArrowUp.jsx';

import MenuVector from '../../../public/svg/MenuVector';

import AuthContext from '../../Context/authContext.jsx';

import { AiOutlineMenu } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { IoHeartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";



export default function Header() {

  const [menus, setMenus] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:3000/menus`).then((res) => res.json())
      .then((menus) => {
        console.log(menus);
        setMenus(menus);

      })
  }, []);

  const authContext = useContext(AuthContext);

  return (
    <>
      <header className="header">

        <div className="container">

          <div className="nav-desktop">
            <div className="nav-desktop__right">
              <div className="nav-desktop__wrapper__icons">

                <AiOutlineMenu className='desktop-menu__icon' />



                <CloseCardMenuIcon className="desktop-close__icon" />
              </div>

              <div className="nav-desktop__logo">
                <img src="/images/logo.png" alt="" />
              </div>

              <ul className="nav-desktop__list">
                {menus.map((menu, index) => (
                  <li className="nav-desktop__item" key={index}>
                    <Link className="nav-desktop__link" to={menu.href} >{menu.title}</Link>
                    {menu.subMenus.length !== 0 && <div className="nav-desktop__sub-menu mega-menu single-column-menu">

                          {

                            menu.subMenus.map((sub, index) => (
                              <div className="nav-desktop__sub-menu__item" key={index}>
                                <Link className="nav-desktop__sub-menu__link" to={sub.href}>
                                  <span>{sub.title}</span>
                                </Link>
                              </div>
                            ))

                          }
                      
                      
                    </div>}

                  </li>
                ))}

              </ul>

            </div>

            <div className="nav-desktop__left">

              <div className="nav-desktop__links-wrapper">
                <a className="nav-desktop__link__item" href="">
                  <IoIosSearch className="nav-desktop__icon" />
                </a>
                <a className="nav-desktop__link__item basket__icon-desktop" href="">


                  <SlBasket className="nav-desktop__icon" />



                </a>
                <a className="nav-desktop__link__item" href="">
                  <IoHeartOutline className="nav-desktop__icon" />
                </a>
                {authContext.isLogedIn ? (<Link to="#" className='menu__btn-login'>
                  <span>{authContext.userInfos.firstname + "" + authContext.userInfos.lastname}</span>
                </Link>) : (
                  <Link to="/login" className='menu__btn-login'>
                    <FaRegUser />
                    <span>ورود | عضویت</span>
                  </Link>
                )}





              </div>
              <div className="desktop-left-menu__icon-wrapper">


                <AiOutlineMenu className="desktop-menu__icon" />

              </div>
            </div>
          </div>




          <div className="nav">
            <div className="nav__wrapper">



              <div className="nav__right">
                <ul className="nav__list">
                  <li className="nav__item nav-icon-basket">
                    <a href="" className="nav__link nav__link--active">
                      <SlBasket className='nav__icon' />
                      <span>سبد خرید</span>
                    </a>
                  </li>
                  <li className="nav__item">
                    {authContext.isLogedIn ? (<Link to="#" className="nav__link">

                      <span>{authContext.userInfos.firstname + "" + authContext.userInfos.lastname}</span>
                    </Link>) : (<Link to="/login" className="nav__link">
                      <FaRegUser className='nav__icon' />
                      <span>ورود | عضویت</span>
                    </Link>)}

                  </li>
                </ul>
              </div>

              <div className="nav__left">
                <ul className="nav__list">
                  <li className="nav__item">
                    <a href="" className="nav__link">
                      <IoIosSearch className='nav__icon' />
                      <span>جستجو</span>
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="" className="nav__link">
                      <IoHeartOutline className='nav__icon' />
                      <span> علاقه مندی </span>
                    </a>
                  </li>
                </ul>
              </div>
              <MenuVector />

              <div className="menu-wrapper-icon">
                <MenuIcon />
              </div>





            </div>

          </div>

        </div>

      </header>
    </>
  )
}
