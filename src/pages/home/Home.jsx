import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import { IoStarSharp } from "react-icons/io5";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { PiShareFatLight } from "react-icons/pi";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ProductContext } from "../../context/ProductContext";
import Product from "../../components/product/Product";
class Home extends React.Component {
  static contextType = ProductContext;
  render() {
    const { products } = this.context;
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1
      }
    };
    return (
      <>
        <Header />
        <div className="path-block bg-black ">
          <p className="path-text text-white">
            Home / Products / POS / Name Of Product
          </p>
        </div>
        <main className="">
          <div className="main-section row">
            {/* image */}
            <div className="left-section col-lg-6 col-sm-12 border ">
              <img src="./images/image 1.png" alt="product" className="" />
              <p className="sale">10% off</p>
            </div>
            {/* info */}
            <div className="right-section col-lg-5 col-sm-12 ">
              <h2 className="title">Name Of Product</h2>
              <div className="rating">
                <IoStarSharp className="star-icon" />
                <IoStarSharp className="star-icon" />
                <IoStarSharp className="star-icon" />
                <IoStarSharp className="star-icon" />
                <IoStarSharp className="star-icon" />
              </div>
              <div className="price">
                <span className="real-price">3000 EP</span>
                <s className="old-price">3560 EP</s>
              </div>
              <div className="description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, maiores esse? Unde facilis laborum aliquam sit deleniti laboriosam ducimus esse vitae odio minima placeat, molestias minus, dignissimos quos, quas labore!
              </div>
              <div className="actions d-flex ">
                <div className="border">
                  <div className="add btn" ><IoMdAdd /></div>
                  <div>1</div>
                  <div className="remove btn"><IoMdRemove /></div>
                </div>
                <button className="btn btn-dark">
                  BUY NOW
                </button>
              </div>
              <div className="sharing">
                <div className="heart-icon btn"><CiHeart /></div>
                <p>add to wishlist</p>
                <div className="share-icon btn"><PiShareFatLight /></div>
                <p>share</p>
              </div>
            </div>
          </div>
        </main>
        <section className="products-block">
          <h1 className="heading">You May Also  Like</h1>
          <Carousel responsive={responsive}>
            {products.map(product => (
              <Product product={product} key={product.id}/>
            ))}
          </Carousel>
        </section>
      </>
    );
  }
}
export default Home;
