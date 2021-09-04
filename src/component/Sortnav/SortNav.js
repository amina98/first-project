import React, { Component } from "react";
import { Link } from "react-router-dom";

import styles from "./SortNav.module.css";

class SortNav extends Component {
    constructor(props){
        super(props);
        this.best = React.createRef();
        this.cost = React.createRef();
    }
    componentDidMount(){
        this.cost.current.disabled = true;
    }
    clickHandler = (event) => {
        console.log(event);
        this.best.current.disabled = false;
        this.cost.current.disabled = true;

    };
    clickHandler2 = (event) => {
        console.log(event);
        this.best.current.disabled = true;
        this.cost.current.disabled = false;
        console.log(this.props)
    };
    render() {
        return (
            <div className={styles.sortBox}>
                <p>مرتب سازی بر اساس:</p>
                <Link to="?sortBy=best">
                <button id={styles.sort1} ref={this.best} onClick={this.clickHandler}>
                    <span id={styles.sort11}>بیشترین فروش</span>
                </button>
                </Link>
                <Link to="?sortBy=cost">
                <button id={styles.sort2} ref={this.cost} onClick={this.clickHandler2}>
                    <span id={styles.sort22}>قیمت</span>
                </button>
                </Link>
            </div>
        );
    }
}

export default SortNav;
