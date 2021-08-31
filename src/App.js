import "./App.css";
import Header from "./component/Header/Header";
import Home from "./pages/Home";
import Signup from "./component/Sign/SignUp";
import Signin from "./component/Sign/SignIn";
import AboutUs from './pages/AboutUs';

import {Route, Switch} from 'react-router-dom';
import SignUp from "./component/Sign/SignUp";

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/sign-in" component={Signin} />
                <Route path="/about-us" component={AboutUs} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/" component={Home} />
            </Switch>
            
        </div>
    );
}

export default App;
