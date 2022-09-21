import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header({ title, props }) {
    const [burgerOpen, setBurgerOpen] = useState(false)
    const [activeIndex, setActiveIndex] = useState(null)
    const LinkActive = (index) => {
        setBurgerOpen(false)
        setActiveIndex(index)
    };
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__inner'>
                    <h3 className='header__logo'>
                        <Link className='header__logo-link header__link' to='/' onClick={() => LinkActive(0)}>{title}</Link>
                    </h3>
                    <nav className='header__nav'>
                        <ul className={`header__nav-list 
                        ${burgerOpen
                                ? 'header__nav-list--active'
                                : ''
                            }`}>
                            {props.map((item, index) =>
                                <li className='header__nav-item' key={item.name}>
                                    <Link className={
                                        `header__nav-link header__link 
                                        ${activeIndex === index + 1
                                            ? 'header__link--active'
                                            : ''
                                        }`}
                                        to={item.link}
                                        onClick={() => LinkActive(index + 1)}>
                                        {item.name}
                                    </Link>
                                </li>
                            )}
                        </ul>
                        <div className={`header__burger  
                        ${burgerOpen
                                ? 'header__burger--close'
                                : ''
                            }`}
                            onClick={() => setBurgerOpen(!burgerOpen)}>
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
