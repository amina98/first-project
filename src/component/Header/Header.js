import React from "react";
import {Link} from 'react-router-dom';

import styles from "./Header.module.css";
import Timer from "./Timer";
import Logo from "../../image/logo.jpg";

const Header = ()=> {
    
    const clickHandler = ()=>{
    }
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
                                <Link to="/products">محصولات</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.leftNav}>
                    <Timer />
                        { false ? (
                            <div className={styles.dropdownMenu}>
                                <a href="profile" id={styles.profile}>
                                    هادی <i className="fas fa-caret-down"></i>
                                </a>
                                <ul className={styles.dropdownItem}>
                                    <li>
                                        <a href="profile">پروفایل</a>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={clickHandler}>خروج از حساب</Link>
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

export default Header;
