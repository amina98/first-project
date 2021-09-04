import React, { Component } from "react";

import styles from "./Slider.module.css";

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
        if (n > this.mySlides.current.childNodes.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex= this.mySlides.current.childNodes.length;
        }
        for (let i = 0; i < this.mySlides.current.childNodes.length; i++) {
            this.mySlides.current.childNodes[i].style.display = "none";
        }
        this.mySlides.current.childNodes[this.slideIndex - 1].style.display = "block";
        
    };
    searchHandler = event=>{
        event.preventDefault();
    }
    render() {
        return (
            <div className={styles.landing}>
                <div ref={this.mySlides} className={styles.slideshow}>
                    <div className={`${styles.mySlides} ${styles.fade}`}  style={{display :"block"}}>
                        <img src={Img1} alt="slider" />
                    </div>
                    <div className={`${styles.mySlides} ${styles.fade}`}>
                        <img src={Img2} alt="slider" />
                    </div>
                    <div className={`${styles.mySlides} ${styles.fade}`}>
                        <img src={Img3} alt="slider" />
                    </div>
                    <div className={`${styles.mySlides} ${styles.fade}`}>
                        <img src={Img4} alt="slider" />
                    </div>
                </div>
                
                <i className={`${styles.prev} fas fa-chevron-right`} onClick={this.nextSlides}>
                    
                </i>
                <i className={`${styles.next} fas fa-chevron-left`} onClick={this.prevSlides}>
                    
                </i>
                <div className={styles.landingContent}>
                    <h1>در محصولات سایت جستجو کنید ...</h1>
                    <br />
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="نام محصول خود را وارد کنید ..."
                    />
                    <button type="submit" onClick={this.searchHandler}>جستجو کنید</button>
                </div>
            </div>
        );
    }
}

export default Slider;
