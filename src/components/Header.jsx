import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({ title, home, props }) {

    function BurgerClick() {
        let navList = document.querySelector('.header__nav-list');
        let burger = document.querySelector('.header__burger');
        navList.classList.toggle('header__nav-list--active');
        burger.classList.toggle('header__burger--close');
    }
    function LinkClick(){
        let navList = document.querySelector('.header__nav-list');
        let burger = document.querySelector('.header__burger');
        navList.classList.remove('header__nav-list--active');
        burger.classList.remove('header__burger--close');
    }
    const LinkActive = e => {
        LinkClick();
        var link = document.querySelectorAll(".header__link");
        for (var i = 0; i < link.length; i++) {
            link[i].classList.remove("header__link--active");
        }
        e.currentTarget.classList.add("header__link--active");
      };
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__inner'>
                    <h3 className='header__logo'>
                        <Link className='header__logo-link header__link' to={home}  onClick={LinkActive}>{title}</Link>
                    </h3>
                    <nav className='header__nav'>
                        <ul className='header__nav-list'>
                            {props.map(item =>
                                <li className='header__nav-item' key={item.name}>
                                    <Link className='header__nav-link header__link' to={item.link} onClick={LinkActive}>{item.name}</Link>
                                </li>
                            )}
                        </ul>
                        <div className='header__burger' onClick={BurgerClick}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
