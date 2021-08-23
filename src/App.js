import "./App.css";
import Header from "./component/Header/Header";
import Slider from "./component/slider/Slider";
import SortNav from "./component/Sortnav/SortNav";
import Products from "./component/Products/Products";
import Filter from "./component/Products/Filter";

function App() {
    return (
        <div className="App">
            <Header />
            <Slider />
            <SortNav />
            <div className="container">
            <Filter />
            <Products />
            </div>
        </div>
    );
}

export default App;
