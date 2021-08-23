import React, { Component } from "react";

import styles from "./Header.module.css";

import Logo from '../../image/logo.jpg';

class Header extends Component {
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
                        <a href="./signup.html">ورود / ثبت نام</a>

                        {/* <div className={styles.dropdownMenu}>
                <a href="#" id="profile"
                  >هادی <i className="fas fa-caret-down"></i
                ></a>
                <ul className={styles.dropdownItem}>
                  <li><a href="#">پروفایل</a></li>
                  <li><a href="#">خروج از حساب</a></li>
                </ul>
              </div> */}
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
