import React, { Component } from "react";
import {Link} from 'react-router-dom';

import styles from "./Header.module.css";
import Timer from "./Timer";

import Logo from "../../image/logo.jpg";

class Header extends Component {
    constructor() {
        super();
        this.state = {
            isLogged: false,
        };
    }
    render() {
        return (
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <div className={styles.rightNav}>
                        <img src={Logo} alt="" />
                        <ul>
                            <li>
                                <Link to="/">صفحه اول</Link>
                            </li>
                            <li>
                                <Link to="/about-us">تماس با ما</Link>
                            </li>
                            <li>
                                <Link to="/support">پشتیبانی</Link>
                            </li>
                            <li>
                                <Link to="#">محصولات</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.leftNav}>
                    <Timer />
                        {this.state.isLogged ? (
                            <div className={styles.dropdownMenu}>
                                <a href="#" id={styles.profile}>
                                    هادی <i className="fas fa-caret-down"></i>
                                </a>
                                <ul className={styles.dropdownItem}>
                                    <li>
                                        <a href="#">پروفایل</a>
                                    </li>
                                    <li>
                                        <a href="#">خروج از حساب</a>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <Link to="/sign-in">ورود / ثبت نام</Link>
                        )}
                        
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
