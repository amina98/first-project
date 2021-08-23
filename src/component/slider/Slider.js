import React, { Component } from "react";

import styles from './Slider.module.css';

import Landing from '../../image/landing.png';

class Slider extends Component {
    render() {
        return (
            <div className={styles.landing}>
                <img src={Landing} alt="landing" />
                <div className={styles.landingContent}>
              <h1>در محصولات سایت جستجو کنید ...</h1>
              <br />
              <input
                type="text"
                name=""
                id=""
                placeholder="نام محصول خود را وارد کنید ..."
              />
              <a href="#">جستجو کنید</a>
            </div>
            </div>
        );
    }
}

export default Slider;
