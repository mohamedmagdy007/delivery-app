import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ListGroupItem } from "reactstrap";
import productImg from "../../../assets/images/product_01.1.jpg";
import 'react-lazy-load-image-component/src/effects/blur.css';
import "../../styles/cart-item.css";
const CartItem = ({ item }) => {
  const { id, title, price, image01, quantity,totalPrice } = item;
  return (
    <ListGroupItem className="border-0 cart__item">
      <div className="cart__item-info d-flex gap-2">
        <LazyLoadImage src={image01} alt="product-img" effect="blur"/>
        <div className="cart__product-info w-100 d-flex align-items-center justify-content-between">
          <div>
            <h6 className="cart__product-title">{title}</h6>
            <p className="d-flex align-items-center gap-5 cart__product-price">
              {quantity}x <span>${totalPrice}</span>
            </p>
            <div className="align-items-center justify-content-between increase__decrease-btn">
              <span className="increase__btn">
                <i className="ri-add-line"></i>
              </span>
              <span className="quantity">{quantity}</span>
              <span className="decrease__btn">
                <i className="ri-subtract-line"></i>
              </span>
            </div>
          </div>
          <span className="delete__btn">
            <i className="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
