import React from "react";
import "./Cart.css";

const Cart = ({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
  gj,
}) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0,
  );

  const subTotalPrice = (item) => {
    return item.quantity * item.price;
  };
  const splitSumByHundreds = (number) =>
    number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return (
    <div className="container">
      <h2 className="cart-items-header">Корзина</h2>
      <div className="cart-items">
        <div className="cart">
          {cartItems.length === 0 && (
            <div className="cart-items-empty">Корзина пуста</div>
          )}

          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-items-list">
                <div className="cart-items-card">
                  <div className="cart-left-section">
                    <div className="cart-left">
                      <img
                        className="cart-items-image"
                        src={item.image}
                        alt={item.name}
                      />

                      <div className="cart-items-function">
                        <button
                          className="cart-items-remove"
                          onClick={() => handleRemoveProduct(item)}
                        >
                          {" "}
                          -{" "}
                        </button>
                        <div className="cart-items-quantity">
                          {item.quantity}
                        </div>
                        <button
                          className="cart-items-add"
                          onClick={() => handleAddProduct(item)}
                        >
                          {" "}
                          +{" "}
                        </button>
                      </div>
                    </div>
                    <div className="cart-items-info">
                      <div className="cart-items-name">{item.name}</div>
                      <div className="cart-items-price">
                        {" "}
                        {splitSumByHundreds(item.price)} ₽{" "}
                      </div>
                    </div>
                  </div>

                  <div className="cart-right-section">
                    <div className="clear-cart">
                      {cartItems.length >= 1 && (
                        <button
                          className="clear-cart-button"
                          onClick={() => handleCartClearance(item)}
                        >
                          <img src="./pics/delete.svg" alt="Clear Cart" />
                        </button>
                      )}
                    </div>
                    <div className="cart-items-subtotal">
                      {" "}
                      {subTotalPrice(item)} ₽{" "}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cart-total">
          <div className="cart-total-info">
            <div className="cart-total-name">ИТОГО</div>
            <div className="cart-total-price">
              ₽ {splitSumByHundreds(totalPrice)}
            </div>
          </div>
          <button className="btn-order">Перейти к оформлению</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
