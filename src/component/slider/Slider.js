import React, { Component } from "react";

import styles from "./Slider.module.css";

import Landing from "../../image/landing.png";
import Img1 from "../../image/img1.jpg";
import Img2 from "../../image/img2.jpg";
import Img3 from "../../image/img3.jpg";
import Img4 from "../../image/img4.jpg";

class Slider extends Component {
    constructor() {
        super();
        this.slideIndex = 1;
        this.mySlides = React.createRef();
    }
    nextSlides = () => {
        this.showSlides((this.slideIndex += 1));
    };
    prevSlides = () => {
        this.showSlides((this.slideIndex += -1));
    };
    showSlides = (n) => {
        console.log(this.slideIndex);
        if (n > this.mySlides.current.childNodes.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex= this.mySlides.current.childNodes.length;
        }
        console.log(this.slideIndex);
        for (let i = 0; i < this.mySlides.current.childNodes.length; i++) {
            this.mySlides.current.childNodes[i].style.display = "none";
        }
        this.mySlides.current.childNodes[this.slideIndex - 1].style.display = "block";
        
    };
    clickHandler = () => {
        console.log(this.mySlides.current.childNodes);
    };
    render() {
        return (
            <div className={styles.landing}>
                <img src={Landing} alt="landing" />
                <div ref={this.mySlides} className={styles.slideshow}>
                    <div className={styles.mySlides}  style={{display :"block"}}>
                        <img src={Img1} alt="slider" />
                    </div>
                    <div className={styles.mySlides}>
                        <img src={Img2} alt="slider" />
                    </div>
                    <div className={styles.mySlides}>
                        <img src={Img3} alt="slider" />
                    </div>
                    <div className={styles.mySlides}>
                        <img src={Img4} alt="slider" />
                    </div>
                </div>
                {/* <button onClick={this.nextSlides}>Next</button>
                <button onClick={this.prevSlides}>prev</button> */}
                <a className={styles.prev} onClick={this.nextSlides}>
                    &#10094;
                </a>
                <a className={styles.next} onClick={this.prevSlides}>
                    &#10095;
                </a>
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
