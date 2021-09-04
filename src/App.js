import React , {Component} from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Home from "./pages/Home";
import Signin from "./component/Sign/SignIn";
import AboutUs from './pages/AboutUs';
import Products from "./pages/Products";

import {Route, Switch} from 'react-router-dom';
import SignUp from "./component/Sign/SignUp";
import Footer from "./component/Footer/Footer";


class App extends Component {
    constructor(){
        super();
        this.state = {
            isLogged: false,
        }
    }
    render(){
    return (
        <div className="App">
            <Header logged = {this.state.isLogged} status = {bool => bool ? this.setState({
                    isLogged: true}) : this.setState({isLogged : false})
                }/>
            <Switch>
                <Route path="/sign-in" render= {()=><Signin logged = {bool => bool ? this.setState({
                    isLogged: true}) : this.setState({isLogged : false})
                }/>} />
                <Route path="/about-us" component={AboutUs} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/products" component={Products} />
                <Route path="/" component={Home} />
            </Switch>
            <Footer />
        </div>
    )};
}

export default App;
