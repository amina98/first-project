import React, { Component } from 'react';

import Product from './Product';

import styles from './Products.module.css';

import Image1 from '../../image/products/0002.jpg';
import Image2 from '../../image/products/0003.jpg';
import Image3 from '../../image/products/0004.jpg';

class Products extends Component {
    constructor(){
        super();
        this.state = {
            data:[
            {id:1 ,image:Image1, name:"محصول شماره 1", cost:"10.000"},
            {id:2 ,image:Image2, name:"محصول شماره 1", cost:"15.000"},
            {id:3 ,image:Image3, name:"محصول شماره 1", cost:"12.000"},
            {id:4 ,image:Image1, name:"محصول شماره 1", cost:"10.000"},
            {id:5 ,image:Image2, name:"محصول شماره 1", cost:"15.000"},
            {id:6 ,image:Image3, name:"محصول شماره 1", cost:"12.000"},
            {id:7 ,image:Image1, name:"محصول شماره 1", cost:"10.000"},
            {id:8 ,image:Image2, name:"محصول شماره 1", cost:"15.000"},
            {id:9 ,image:Image3, name:"محصول شماره 1", cost:"12.000"},
            {id:10 ,image:Image1, name:"محصول شماره 1", cost:"10.000"},
            {id:11 ,image:Image2, name:"محصول شماره 1", cost:"15.000"},
            {id:12 ,image:Image3, name:"محصول شماره 1", cost:"12.000"}
            ]
    }
    }
    render() {
        return (
            <div className={styles.container}>
                {this.state.data.map(d => <Product key={d.id} image={d.image} name={d.name} cost={d.cost}/>)}
            </div>
        );
    }
}

export default Products;