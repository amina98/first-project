import React, { Component } from "react";
import axios from "axios";
import styles from "./Products.module.css";
import Product from "../component/Products/Product";

import Img001 from "../image/products/product page/001.jpg";
import Img002 from "../image/products/product page/002.jpg";
import Img003 from "../image/products/product page/003.jpg";
import Img004 from "../image/products/product page/004.jpg";
import Img005 from "../image/products/product page/005.jpg";
import Img006 from "../image/products/product page/006.jpg";
import Img007 from "../image/products/product page/007.jpg";
import Img008 from "../image/products/product page/008.jpg";
import Img009 from "../image/products/product page/009.jpg";
import Img010 from "../image/products/product page/010.jpg";
import Img011 from "../image/products/product page/011.jpg";
import Img012 from "../image/products/product page/012.jpg";
import Img013 from "../image/products/product page/013.jpg";
import Img014 from "../image/products/product page/014.jpg";
import Img015 from "../image/products/product page/015.jpg";
import Img016 from "../image/products/product page/016.jpg";
import Img017 from "../image/products/product page/017.jpg";
import Img018 from "../image/products/product page/018.jpg";
import Img019 from "../image/products/product page/019.jpg";
import Img020 from "../image/products/product page/020.jpg";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
            image: [
                Img001,
                Img002,
                Img003,
                Img004,
                Img005,
                Img006,
                Img007,
                Img008,
                Img009,
                Img010,
                Img011,
                Img012,
                Img013,
                Img014,
                Img015,
                Img016,
                Img017,
                Img018,
                Img019,
                Img020
            ],
        };
    }
    componentDidMount() {

        // axios.post('https://fakestoreapi.com/products',{images: images})
        //     .then(response => console.log(response));
        fetch("https://fakestoreapi.com/products", {
            method: "POST",
            body: JSON.stringify( {
                title: 'test product',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            }),
        })
            .then((res) => res.json())
            .then((json) => console.log(json));

        axios.get('https://fakestoreapi.com/products')
            .then(response => this.setState({
                product : response.data,
            }))
    }
    render() {
        console.log({ image: this.state.image });
        return (
            <div className={styles.container}>
                {this.state.product.map((d , index) => (
                    <Product
                        key={d.id}
                        image={this.state.image[index]}
                        name={d.title}
                        cost={d.price}
                    />
                ))}
            </div>
        );
    }
}

export default Products;
