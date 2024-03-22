import React from 'react';
import "./Header.css"
import { CgMenuLeft } from "react-icons/cg";
import { RiSearch2Line } from "react-icons/ri";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import Cart from '../cart/Cart';
import { CartContext } from "../../context/CartContext";

class Header extends React.Component {
    static contextType = CartContext;
    constructor(props) {
        super(props);
        this.state = {
            isCartOpen: false
        };
    }
    toggleCart = () => {
        this.setState(prevState => ({
            isCartOpen: !prevState.isCartOpen
        }));
    };

    render() {
        const { itemAmount } = this.context;
        const { isCartOpen } = this.state;

        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light py-4 px-5 ">
                    <div className="container-fluid ">
                        <a href="./#" className='text-black menu-icon'><CgMenuLeft /></a>
                        <a className="navbar-brand " href="./#">
                            <img className='nav-logo' src='./images/Damen Cash colored English.svg' alt='' />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div>
                                <ul className="navbar-nav me-auto mb-2 ">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="./#">Products</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="./#">Best Seller</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="./#">New Arrival</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="./#">About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="./#">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div className=' right-block-icons'>
                                <div className='header-icon'><RiSearch2Line style={{ fontSize: '24px' }} /></div>
                                <div className={`header-icon position-relative ${isCartOpen ? 'open' : ''}`} >
                                    <CiShoppingCart className='position-relative' style={{ fontSize: '24px' }} onClick={this.toggleCart} />
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                                        {itemAmount}
                                    </span>
                                    <div className={`cart-block ${isCartOpen ? "open" : ""}`}>
                                        <Cart toggleCart={this.toggleCart} />
                                    </div>
                                </div>
                                <div className='header-icon'><CiUser style={{ fontSize: '24px' }} /></div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
