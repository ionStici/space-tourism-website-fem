import React, { useRef } from 'react';
import styles from './navBar.module.scss';
import { NavLink, Link } from 'react-router-dom';

import logo from './../assets/shared/logo.svg';
import iconHamb from './../assets/shared/icon-hamburger.svg';
import iconClose from './../assets/shared/icon-close.svg';

export const NavBar = function (props) {
    const links = ['Home', 'Destination', 'Crew', 'Technology'];
    const body = document.querySelector('body');

    const header = useRef(null);
    const navIcon = useRef(null);

    const toggleNav = function () {
        if (!header.current.classList.contains('open')) {
            header.current.classList.add('open');
            header.current.classList.add(styles.open);

            navIcon.current.setAttribute('src', iconClose);
            body.classList.add(styles.overflow_hidden);
        } else if (header.current.classList.contains('open')) {
            header.current.classList.remove('open');
            header.current.classList.remove(styles.open);

            navIcon.current.setAttribute('src', iconHamb);
            body.classList.remove(styles.overflow_hidden);
        }
    };

    const toggleNavConditionally = function () {
        if (window.innerWidth < 650) toggleNav();
    };

    const toggleNavConditionallyLogo = function () {
        if (
            header.current.classList.contains('open') &&
            window.innerWidth < 650
        )
            toggleNav();
    };

    return (
        <header ref={header} className={styles.header}>
            <Link to="/" onClick={toggleNavConditionallyLogo}>
                <img className={styles.logo} src={logo} alt="Logo" />
            </Link>
            <div className={styles.navIconWrapper} onClick={toggleNav}>
                <img
                    className={styles.navIcon}
                    src={iconHamb}
                    ref={navIcon}
                    alt=""
                />
            </div>

            <div className={styles.layout} onClick={toggleNav}></div>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    {links.map((link, i) => {
                        return (
                            <li className={styles.li} key={link}>
                                <NavLink
                                    onClick={toggleNavConditionally}
                                    className={`${({ isActive }) =>
                                        isActive ? styles.test : undefined} ${
                                        styles.link
                                    }`}
                                    to={
                                        link === 'Home'
                                            ? '/'
                                            : link.toLowerCase()
                                    }
                                >
                                    <span
                                        className={styles.num}
                                    >{`0${i}`}</span>
                                    <span className={styles.linkText}>
                                        {link}
                                    </span>
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
};
