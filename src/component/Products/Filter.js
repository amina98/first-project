import React, { Component } from 'react';
import styles from './Filter.module.css';

class Filter extends Component {
    constructor(){
        super();
        this.state = {
            price : 30000
        }
    }
    changeHandler = event=>{
        this.setState({
            price: event.target.value
        })
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.items}>
                <div className={styles.costRange}>
                    <label htmlFor="costRange">محدوده قیمت</label>
                    
                    <input type="range" className={styles.slider} name="costRange" onChange={this.changeHandler} id="costRange" min={10000} max={100000}
                    value={this.state.price} dir="ltr" step={5000}/>
                    <span>{this.state.price} تومان</span>
                </div>
                <button type="submit">اعمال تغییرات</button>
                </div>
            </div>
        );
    }
}

export default Filter;