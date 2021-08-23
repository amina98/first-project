import React, { Component } from "react";

import styles from "./SortNav.module.css";

class SortNav extends Component {
    
    clickHandler = (event) => {
        console.log(event);
        event.target.parentElement.disabled = false;
        event.target.parentElement.parentElement.children[2].disabled = true;

    };
    clickHandler2 = (event) => {
        console.log(event);
        event.target.parentElement.disabled = false;
        event.target.parentElement.parentElement.children[1].disabled = true;

    };
    render() {
        return (
            <div className={styles.sortBox}>
                <p>مرتب سازی بر اساس:</p>
                <button id={styles.sort1} onClick={this.clickHandler}>
                    <span id={styles.sort11}>بیشترین فروش</span>
                </button>
                <button id={styles.sort2} onClick={this.clickHandler2}>
                    <span id={styles.sort22}>قیمت</span>
                </button>
            </div>
        );
    }
}

export default SortNav;
