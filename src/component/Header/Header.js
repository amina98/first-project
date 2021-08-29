import React, { Component } from "react";

import styles from "./Header.module.css";
import Timer from "./Timer";

import Logo from "../../image/logo.jpg";

class Header extends Component {
    constructor() {
        super();
        this.state = {
            isLogged: true,
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
                                <a href="index.html">صفحه اول</a>
                            </li>
                            <li>
                                <a href="#">تماس با ما</a>
                            </li>
                            <li>
                                <a href="#">پشتیبانی</a>
                            </li>
                            <li>
                                <a href="#">محصولات</a>
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
                            <a href="./signup.html">ورود / ثبت نام</a>
                        )}
                        
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
