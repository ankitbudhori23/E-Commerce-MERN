import Home from "./pages/Home";
import Login from "./pages/Login";
import All from "./pages/All";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Admin/Dashboard";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import { selectAdmin } from "./Features/Adminslice";
const App = () => {
  const admin = useSelector(selectAdmin);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/all">
          <All />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/admin">{!admin ? <Admin /> : <Dashboard />}</Route>
      </Switch>
    </Router>
  );
};

export default App;
