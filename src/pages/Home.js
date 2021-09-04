import React, { Component } from "react";
import Slider from "../component/slider/Slider";
import SortNav from "../component/Sortnav/SortNav";
import Products from "../component/Products/Products";
import Filter from "../component/Products/Filter";

class Home extends Component {
    render() {
        return (
            <div>
                <Slider />
                <SortNav {...this.props}/>
                <div className="container">
                    <Filter />
                    <Products />
                </div>
                
            </div>
        );
    }
}

export default Home;
