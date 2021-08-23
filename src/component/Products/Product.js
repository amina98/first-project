import React, { Component } from "react";

import styles from './Product.module.css';

class Product extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0
        }
    }

    upHandler = ()=>{
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }))
    }
    downHandler = ()=>{
        if(this.state.counter >=1){
            this.setState(prevState => ({
                counter: prevState.counter - 1
            }))
        }
    }

    
    render() {
        const {counter} = this.state;
        return (
            <div className={styles.product}>
                <div className={styles.productHead}>
                    <img src={this.props.image} alt="product" />
                    <h2>{this.props.name}</h2>
                    <p>دسته بندی یک</p>
                </div>
                <hr />
                <div className={styles.cost}>
                    <span>{this.props.cost} تومان</span>
                    <div className={styles.counter}>
                        <i className="fas fa-plus" onClick={this.upHandler}></i>
                        <span>{counter}</span>
                        <i className="fas fa-minus" onClick={this.downHandler}></i>
                    </div>
                </div>
                    <a href="#">اضافه کردن به سبد خرید</a>
            </div>
        );
    }
}

export default Product;
