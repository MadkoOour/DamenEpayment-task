import React, { Component, createContext } from "react";
export const CartContext = createContext();
class CartProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      itemAmount: 0,
      totalPrice: 0,
    };
  }

  componentDidMount() {
    this.updateTotalPrice();
    this.updateItemAmount();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cart !== this.state.cart) {
      this.updateTotalPrice();
      this.updateItemAmount();
    }
  }

  updateTotalPrice() {
    const totalPrice = this.state.cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    this.setState({ totalPrice });
  }

  updateItemAmount() {
    if (this.state.cart) {
      const itemAmount = this.state.cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      this.setState({ itemAmount });
    }
    
  }

  addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = this.state.cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...this.state.cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      this.setState({ cart: newCart });
    } else {
      this.setState({ cart: [...this.state.cart, newItem] });
    }
  };

  removeFromCart = (id) => {
    const newCart = this.state.cart.filter((item) => {
      return item.id !== id;
    });
    this.setState({ cart: newCart });
  };

  removeCart = () => {
    this.setState({ cart: [] });
  };

  increaseAmount = (id) => {
    const cartItem = this.state.cart.find((item) => item.id === id);
    this.addToCart(cartItem, id);
  };

  decreaseAmount = (id) => {
    const cartItem = this.state.cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = this.state.cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      this.setState({ cart: newCart });
    }
    if (cartItem.amount < 2) {
      this.removeFromCart(id);
    }
  };

  render() {
    return (
      <CartContext.Provider
        value={{
          cart: this.state.cart,
          addToCart: this.addToCart,
          removeFromCart: this.removeFromCart,
          removeCart: this.removeCart,
          increaseAmount: this.increaseAmount,
          decreaseAmount: this.decreaseAmount,
          itemAmount: this.state.itemAmount,
          totalPrice: this.state.totalPrice,
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export default CartProvider;
