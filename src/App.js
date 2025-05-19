import React, { useState, useEffect } from "react";
import data from "./components/back/Data/Data";
import Header from "./components/front/Header/Header";
import Route from "./components/front/Routes/Route";
import Footer from "./components/front/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
const App = () => {
  const { productItems } = data;

  const initialCartItems =
    JSON.parse(sessionStorage.getItem("cartItems")) || [];
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleCartClearance = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  // sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  useEffect(() => {
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="main">
      <Router>
        <Header cartItems={cartItems} />
        <Route
          productItems={productItems}
          cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleCartClearance={handleCartClearance}
        />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
