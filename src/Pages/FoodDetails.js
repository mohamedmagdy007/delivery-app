import React, { useState } from "react";
import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import Helmet from "../Components/Helmet/Helmet";
import { CommonSection } from "../Components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import "../Components/styles/product-details.css";
import ProductCard from "../Components/UI/product-card/ProductCard";
import { useEffect } from "react";
const FoodDetails = () => {
  const [tab, setTab] = useState("desc");
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(product.image01);
  const { title, price, category, desc } = product;
  const relatedProduct = products.filter((item) => category === item.category);
  
  useEffect(() => {
    setPreviewImg(product.image01);
  }, [product]);
  return (
    <Helmet title="Food-details">
      <CommonSection title={title} />
      <section>
        <Container>
          <Row>
            <Col lg={2} md={2}>
              <div className="product__image">
                <div
                  className="img__item mb-2"
                  onClick={() => setPreviewImg(product.image01)}
                >
                  <img src={product.image01} alt="product" className="w-50" />
                </div>
                <div
                  className="img__item  mb-2"
                  onClick={() => setPreviewImg(product.image02)}
                >
                  <img src={product.image02} alt="product" className="w-50" />
                </div>
                <div
                  className="img__item"
                  onClick={() => setPreviewImg(product.image03)}
                >
                  <img src={product.image03} alt="product" className="w-50" />
                </div>
              </div>
            </Col>
            <Col lg={4} md={4}>
              <div className="product__main-img">
                <img src={previewImg} alt="product" className="w-100" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{title}</h2>
                <p className="product__price">
                  Price: <span>${price}</span>
                </p>
                <p className="category mb-5">
                  Categroy: <span>{category}</span>
                </p>
                <button className="addToCart__btn">Add to Cart</button>
              </div>
            </Col>
            <Col lg="12">
              <div className="tabs d-flex align-content-center gap-3 py-2">
                <h6
                  className={`${tab === "desc" ? "tab__active" : ""} `}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "tab__active" : ""} `}
                  onClick={() => setTab("rev")}
                >
                  Review
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="tab__content">
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="tab__form mb-3">
                  <div className="review pt-5">
                    <p className="user__name mb-0">Jhon Doe</p>
                    <p className="user__email mb-0">jhonDoe@email.com</p>
                    <p className="feedback__text">great product</p>
                  </div>
                  <div className="review mt-3">
                    <p className="user__name mb-0">Jhon Doe</p>
                    <p className="user__email mb-0">jhonDoe@email.com</p>
                    <p className="feedback__text">great product</p>
                  </div>
                  <div className="review mt-3">
                    <p className="user__name mb-0">Jhon Doe</p>
                    <p className="user__email mb-0">jhonDoe@email.com</p>
                    <p className="feedback__text">great product</p>
                  </div>
                  <form className="form">
                    <div className="form__group">
                      <input type="text" placeholder="Enter your name" />
                    </div>
                    <div className="form__group">
                      <input type="text" placeholder="Enter your name" />
                    </div>
                    <div className="form__group">
                      <textarea
                        type="text"
                        rows={5}
                        placeholder="Enter your name"
                      />
                    </div>
                    <button type="submit" className="addToCart__btn">
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </Col>
            <Col lg="12" className="mb-3">
              <h2>You might also like</h2>
            </Col>
            {relatedProduct.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
