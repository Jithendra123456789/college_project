import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import ShoppingCart from "./components/ShoppingCart";
import ProductDetailPage from "./components/ProductDetails";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";
import ProductListing from "./components/ProductList";
import ThankYouPage from "./components/ThankYouPage";
const AppRoutes = () => {
  return (
    <Router>
      <CartProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product/:id" component={ProductDetailPage} />
          <Route path="/cart" component={Cart} />
          <Route path="/list" component={ProductListing} />
          <Route path="/thankyou" component={ThankYouPage} />
        </Switch>
      </CartProvider>
    </Router>
  );
};

export default AppRoutes;
