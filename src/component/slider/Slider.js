import React from "react";
import { Zoom } from "react-slideshow-image";

import styles from "./Slider.module.css";
import "react-slideshow-image/dist/styles.css";
import './zoomSlider.css';
import Img1 from "../../image/img1.jpg";
import Img2 from "../../image/img2.jpg";
import Img3 from "../../image/img3.jpg";
import Img4 from "../../image/img4.jpg";

const Slider = () => {
    const images = [Img1, Img2, Img3, Img4];

    const searchHandler = (event) => {
        event.preventDefault();
    };
    const zoomInProperties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        scale: 1.4,
        arrows: true,
    };
    return (
        <div className={`${styles.landing} slide-container`}>
                <Zoom {...zoomInProperties} >
                    {images.map((each, index) => (
                        <img key={index} className={styles.zoom} style={{ width: "100%" }} src={each} alt="slider"/>
                    ))}
                </Zoom>
                <div className={styles.landingContent}>
                 <h1>در محصولات سایت جستجو کنید ...</h1>
                 <br />
                 <input
                    type="text"
                    name=""
                    id=""
                    placeholder="نام محصول خود را وارد کنید ..."
                />
                <button type="submit" onClick={searchHandler}>
                    جستجو کنید
                </button>
            </div>
             
        </div>
    );
};

export default Slider;
