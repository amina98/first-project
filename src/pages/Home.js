import React, { Component } from "react";
import Slider from "../component/slider/Slider";
import SortNav from "../component/Sortnav/SortNav";
import Products from "../component/Products/Products";
import Filter from "../component/Products/Filter";
import Footer from "../component/Footer/Footer";

class Home extends Component {
    render() {
        return (
            <div>
                <Slider />
                <SortNav />
                <div className="container">
                    <Filter />
                    <Products />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;
