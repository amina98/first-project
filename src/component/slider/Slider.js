import React, { useEffect, useRef } from "react";

import styles from "./Slider.module.css";

import Img1 from "../../image/img1.jpg";
import Img2 from "../../image/img2.jpg";
import Img3 from "../../image/img3.jpg";
import Img4 from "../../image/img4.jpg";
let slideIndex = 1;

const Slider = () => {
    const image = useRef(null);
    const images = [Img1, Img2, Img3, Img4];

    const searchHandler = (event) => {
        event.preventDefault();
    };
    const nextSlides = () => {
        if (slideIndex >= images.length) {
            slideIndex = 1;
        } else if (slideIndex <= 0) {
            slideIndex = images.length;
        } else {
            slideIndex += 1;
        }
        console.log(images[slideIndex - 1]);
        image.current.style.backgroundImage = `url(${images[slideIndex - 1]})`;
    };
    const prevSlides = () => {
        if (slideIndex > images.length) {
            slideIndex = 1;
        } else if (slideIndex <= 1) {
            slideIndex = images.length;
        } else {
            slideIndex -= 1;
        }
        image.current.style.backgroundImage = `url(${images[slideIndex - 1]})`;
    };
    useEffect(() => {
        setInterval(() => {
            if (slideIndex > images.length) {
                slideIndex = 1;
            } else if (slideIndex <= 1) {
                slideIndex = images.length;
            } else {
                slideIndex -= 1;
            }
            image.current.style.backgroundImage = `url(${
                images[slideIndex - 1]
            })`;
        }, 5000);
    }, []);

    return (
        <div className={styles.landing}>
            <div
                ref={image}
                className={`${styles.slideshow} ${styles.fade}`}
            ></div>

            <i
                className={`${styles.prev} fas fa-chevron-right`}
                onClick={nextSlides}
            ></i>
            <i
                className={`${styles.next} fas fa-chevron-left`}
                onClick={prevSlides}
            ></i>
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
