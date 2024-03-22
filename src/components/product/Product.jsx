import React from "react";
import "./Product.css";
import { IoStarSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CartContext } from "../../context/CartContext";
class Product extends React.Component {
    static contextType = CartContext;
    renderStars(rating) {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<IoStarSharp key={i} className="star-icon"/>);
        }
        return stars;
    }
    render() {
        const { product } = this.props;
        const { addToCart } = this.context;
        return (
            <div className="product-item">
                <div className="image">
                    <img src={product.image} alt=""/>
                </div>
                <p className="title">{product.name}</p>
                <p className="description">{product.description.slice(0,85)}...</p>
                <div>
                    {this.renderStars(product.rating)}
                </div>
                <p className="price">{product.price} EGP</p>
                <div className="action-buttons">
                    <button 
                    className="btn btn-dark text-white addToCart"
                    onClick={()=>{addToCart(product,product.id)}}>
                        ADD TO CART
                    </button>
                    <button className="btn addToFav">
                        <div className="heart-icon"><CiHeart /></div>
                    </button>
                </div>
            </div>
        );
    }
}

export default Product;