import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header({ title, props }) {
    const [burgerOpen, setBurgerOpen] = useState(false)
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__inner'>
                    <h3 className='header__logo'>
                        <Link className='header__logo-link'
                            to='/'
                            onClick={() => setBurgerOpen(false)}>
                            {title}
                        </Link>
                    </h3>
                    <nav className='header__nav'>
                        <ul className={`header__nav-list 
                        ${burgerOpen
                                ? 'header__nav-list--active'
                                : ''
                            }`}>
                            {props.map((item, index) =>
                                <li className='header__nav-item' key={item.name}>
                                    <NavLink className='header__nav-link'
                                        to={item.link}
                                        onClick={() => setBurgerOpen(false)}>
                                        {item.name}
                                    </NavLink>
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
