import React, { Component } from 'react';
import axios from 'axios';
import styles from './Products.module.css';
import Product from '../component/Products/Product';

class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            product : []
        }
    }
    componentDidMount(){
        axios.get('https://fakestoreapi.com/products')
            .then(response => this.setState({
                product : response.data,
            }))
    }
    render() {
        return (
            <div className={styles.container}>
                {this.state.product.map((d) => (
                        <Product
                            key={d.id}
                            image={d.image}
                            name={d.title}
                            cost={d.price}
                        />
                ))}
            </div>
        );
    }
}

export default Products;