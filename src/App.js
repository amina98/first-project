import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Signin from "./component/Sign/SignIn";
import SignUp from "./component/Sign/SignUp";
import Footer from "./component/Footer/Footer";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";

import { Route, Switch } from "react-router-dom";

const App = () => {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route
                    path="/sign-in" component={Signin}
                />
                <Route path="/about-us" component={AboutUs} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/products" component={Products} />
                <Route path="/" component={Home} />
            </Switch>
            <Footer />
        </div>
    );
};

export default App;
