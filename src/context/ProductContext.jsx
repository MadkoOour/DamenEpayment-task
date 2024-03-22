import React, { Component, createContext } from "react";
import products from "./Products"; 
export const ProductContext = createContext();
class ProductProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
    };
  }

  render() {
    return (
      <ProductContext.Provider value={{ products: this.state.products }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export default ProductProvider;
