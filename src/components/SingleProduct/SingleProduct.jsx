import "./SingleProduct.scss";
import RelatedProduct from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import prod from "../../assets/products/earbuds-prod-1.webp";

const SingleProduct = () => {
  return (
    <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    <img src={prod} alt="" />
                </div>
                <div className="right">
                    <spam className="name">Product name</spam>
                    <span className="price">price</span>
                    <span className="desc">product description</span>

                    <div className="cart-buttons">
                        <div className="quantity-buttons">
                            <span>-</span>
                            <span>5</span>
                            <span>+</span>
                        </div>
                        <button className="add-to-cart-button">
                            <FaCartPlus/>&nbsp;
                            ADD TO CART
                        </button>
                    </div>
                    <span className="divider"></span>
                    <div className="info-item">
                        <span className="text-bold">Category:
                            <span>Headphone</span>
                        </span>
                        <span className="text-bold">Share:
                            <span className="social-icon">
                                <FaFacebookF size={16}/>
                                <FaInstagram size={16}/>
                                <FaTwitter size={16}/>
                                <FaLinkedinIn size={16}/>
                                <FaPinterest size={16}/>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <RelatedProduct/>
        </div>
    </div>
  );
};

export default SingleProduct;
