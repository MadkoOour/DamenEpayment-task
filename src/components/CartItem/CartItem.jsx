import React, { Component } from 'react';
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { CartContext } from "../../context/CartContext";
import "./CartItem.css"
import { CiTrash } from "react-icons/ci";
class CartItem extends Component {
  static contextType = CartContext; 

  render() {
    const { id, image, name, price, amount } = this.props.item; 
    const { removeFromCart, increaseAmount, decreaseAmount } = this.context; 

    return (
      <div className="cart-item">
        <img src={image} alt={name} className="cart-item-image" />
        <div className="cart-item-details">
          <h4 className="cart-item-title">{name}</h4>
          <p className="cart-item-price">${price}</p>
        </div>
        <div className="cart-item-actions">
            <button className="btn cart-item-action" onClick={() => increaseAmount(id)}>
              <IoMdAdd />
            </button>
            <span className="cart-item-amount btn">{amount}</span>
            <button className="btn cart-item-action" onClick={() => decreaseAmount(id)}>
              <IoMdRemove />
            </button>
          </div>
        <button className="btn cart-item-action" onClick={() => removeFromCart(id)}>
          <i className='trash-icon'><CiTrash /></i>
        </button>
      </div>
    );
  }
}

export default CartItem;
