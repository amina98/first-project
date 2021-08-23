import React, { Component } from 'react';

import Product from './Product';

import styles from './Products.module.css';

import Image1 from '../../image/products/0002.jpg';
import Image2 from '../../image/products/0003.jpg';
import Image3 from '../../image/products/0004.jpg';

class Products extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Product image={Image1} name="محصول شماره 1" cost="10.000"/>
                <Product image={Image2} name="محصول شماره 2" cost="15.000"/>
                <Product image={Image3} name="محصول شماره 3" cost="12.000"/>
                <Product image={Image1} name="محصول شماره 1" cost="10.000"/>
                <Product image={Image2} name="محصول شماره 2" cost="15.000"/>
                <Product image={Image3} name="محصول شماره 3" cost="12.000"/>
                <Product image={Image1} name="محصول شماره 1" cost="10.000"/>
                <Product image={Image2} name="محصول شماره 2" cost="15.000"/>
                <Product image={Image3} name="محصول شماره 3" cost="12.000"/>
                <Product image={Image1} name="محصول شماره 1" cost="10.000"/>
                <Product image={Image2} name="محصول شماره 2" cost="15.000"/>
                <Product image={Image3} name="محصول شماره 3" cost="12.000"/>
            </div>
        );
    }
}

export default Products;