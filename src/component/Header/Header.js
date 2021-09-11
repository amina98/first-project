import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import Timer from "./Timer";
import Logo from "../../image/logo.jpg";

const Header = () => {
    const clickHandler = () => {};
    const [display, setDisplay] = useState(false);
    const menu = useRef();
    const barMenuHandler = (event) => {
        event.preventDefault();
        setDisplay((prevDisplay) => !prevDisplay);
        if (display) {
            menu.current.style.display = "block";
        } else {
            menu.current.style.display = "none";
        }
    };
    const togleMenu = () => {
        setDisplay((prevDisplay) => !prevDisplay);
        if (display) {
            menu.current.style.display = "block";
        } else {
            menu.current.style.display = "none";
        }
    };
    return (
        <header className={styles.header}>
            <img src={Logo} alt="logo" />
            <nav className={styles.nav}>
                <div className={styles.menu}>
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
                            <Link to="/products">محصولات</Link>
                        </li>
                    </ul>
                    <div className={styles.hamburgerMenu}>
                        <button type="submit" onClick={barMenuHandler}>
                            <i className={`fas fa-bars`}></i>
                        </button>
                        <div className={styles.hamburger} ref={menu}>
                            <Link to="/" onClick={togleMenu}>
                                صفحه اول
                            </Link>
                            <Link to="/about-us" onClick={togleMenu}>
                                تماس با ما
                            </Link>
                            <Link to="/support" onClick={togleMenu}>
                                پشتیبانی
                            </Link>
                            <Link to="/products" onClick={togleMenu}>
                                محصولات
                            </Link>
                            <Link to="/sign-in" onClick={togleMenu}>
                                ورود / ثبت نام
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.leftNav}>
                    <Timer />
                    <div className={styles.loginBtn}>
                        {false ? (
                            <div className={styles.dropdownMenu}>
                                <a href="profile" id={styles.profile}>
                                    هادی <i className="fas fa-caret-down"></i>
                                </a>
                                <ul className={styles.dropdownItem}>
                                    <li>
                                        <a href="profile">پروفایل</a>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={clickHandler}>
                                            خروج از حساب
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <Link to="/sign-in">ورود / ثبت نام</Link>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
