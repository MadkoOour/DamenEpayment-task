import React from "react";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { IoClose } from "react-icons/io5";
import { CiTrash } from "react-icons/ci";

class Cart extends React.Component {
  static contextType = CartContext;
  render() {
    const { cart, removeCart, itemAmount, totalPrice } = this.context;
    return (
      <>
        <div className="cart-header">
          <p className="cart-title">MY CART ({itemAmount})</p>
          <div className="close-icon" onClick={this.props.toggleCart}><IoClose /></div>
        </div>
        <div className="cart-body">
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
        <div className="cart-footer d-flex justify-content-between mt-auto ">
            <p className="total">Sub Total</p>
            <span className="total-num">{totalPrice} EGP</span>
        </div>
        <button className="btn btn-dark add-to-cart" onClick={removeCart}>
          EMPTY CART <i className="trash-icon"><CiTrash /></i>
        </button>
      </>
    );
  }
}

export default Cart;
