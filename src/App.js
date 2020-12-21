import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/header/header";
import Slogan from "./component/slogan/slogan";
import Footer from "./component/footer/footer";
import Home from "./pages/home/home";
import Item from "./pages/item/item";
import Products from "./pages/products/products";
import Checkout from "./pages/checkout/checkout";
import Nav from "./component/nav/nav";
import { useState } from "react";

function App() {
  const [basket, setBasket] = useState([]);
  return (
    <div className="App">
      <Router>
        <Header basket={basket} />
        <Slogan />
        <Nav />
        <Switch>
          <Route exact path="/" render={() => <Home setBasket={setBasket} />} />
          <Route
            path="/item/:_id"
            render={(props) => <Item setBasket={setBasket} {...props} />}
          />
          <Route
            path="/products"
            render={(props) => <Products setBasket={setBasket} {...props} />}
          />
          <Route path="/checkout" component={Checkout} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
