import React, { Component } from "react";

import Product from "./Product";

import styles from "./Products.module.css";

import Image1 from "../../image/products/0001.jpg";
import Image2 from "../../image/products/0002.jpg";
import Image3 from "../../image/products/0003.jpg";
import Image4 from "../../image/products/0004.jpg";
import Image5 from "../../image/products/0005.jpg";
import Image6 from "../../image/products/0006.jpg";
import Image7 from "../../image/products/0007.jpg";
import Image8 from "../../image/products/0008.jpg";
import Image9 from "../../image/products/0009.jpg";
import Image10 from "../../image/products/0010.jpg";
import Image11 from "../../image/products/0011.jpg";
import Image12 from "../../image/products/0012.jpg";

class Products extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                { id: 1, image: Image1, name: "محصول شماره 1", cost: "10.000" },
                { id: 2, image: Image2, name: "محصول شماره 2", cost: "15.000" },
                { id: 3, image: Image3, name: "محصول شماره 3", cost: "12.000" },
                { id: 4, image: Image4, name: "محصول شماره 4", cost: "10.000" },
                { id: 5, image: Image5, name: "محصول شماره 5", cost: "15.000" },
                { id: 6, image: Image6, name: "محصول شماره 6", cost: "12.000" },
                { id: 7, image: Image7, name: "محصول شماره 7", cost: "10.000" },
                { id: 8, image: Image8, name: "محصول شماره 8", cost: "15.000" },
                { id: 9, image: Image9, name: "محصول شماره 9", cost: "12.000" },
                {
                    id: 10,
                    image: Image10,
                    name: "محصول شماره 10",
                    cost: "10.000",
                },
                {
                    id: 11,
                    image: Image11,
                    name: "محصول شماره 11",
                    cost: "15.000",
                },
                {
                    id: 12,
                    image: Image12,
                    name: "محصول شماره 12",
                    cost: "12.000",
                },
            ],
        };
    }
    render() {
        return (
            <div className={styles.container}>
                {this.state.data.map((d) => (
                    <Product
                        key={d.id}
                        image={d.image}
                        name={d.name}
                        cost={d.cost}
                    />
                ))}
            </div>
        );
    }
}

export default Products;
