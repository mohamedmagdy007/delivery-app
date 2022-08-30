import React from 'react';
import Helmet from '../Components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero.png';
import '../Components/styles/hero-section.css';
import { Link } from 'react-router-dom';
import Category from '../Components/UI/category/category';
import '../Components/styles/home.css';
import featureImg01 from '../assets/images/service-01.png';
import featureImg02 from '../assets/images/service-02.png';
import featureImg03 from '../assets/images/service-03.png';
import products from '../assets/fake-data/products';
import foodCategoryImg01 from '../assets/images/hamburger.png';
import foodCategoryImg02 from '../assets/images/pizza.png';
import foodCategoryImg03 from '../assets/images/bread.png';
import ProductCard from '../Components/UI/product-card/ProductCard';
const featureData = [
  {
    title: 'Quick Delivery',
    imgUrl: featureImg01,
    desc: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. amet consectetur',
  },
  {
    title: 'Super Dine In',
    imgUrl: featureImg02,
    desc: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. amet consectetur',
  },
  {
    title: 'Easy Pick Up',
    imgUrl: featureImg03,
    desc: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. amet consectetur',
  },
];
const Home = () => {
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row className="align-items-center">
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> Just wait <br /> food
                  <span> at your door</span>
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quae, cumque. adipisicing elit. Quae, cumque.
                </p>
                <div className="hero__btns d-flex align-items-center gap-5">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now <i className="ri-arrow-right-s-line"></i>
                  </button>
                  <button className="all__Foods-btn">
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>
                <div className="hero__service d-flex align-items-center gap-5 mt-4">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>
                    No Shipping Charge
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-shield-check-line"></i>
                    </span>
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="heroImg" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Category />
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
              <p className="feature__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </Col>
            {featureData.map((item, index) => (
              <Col lg="4" md="4" className="mt-5" key={index}>
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="w-25 mb-3"
                  />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button className="all__Foods foodBtnActive">All</button>
                <button className="d-flex align-items-center gap-2">
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>
                <button className="d-flex align-items-center gap-2">
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>
                <button className="d-flex align-items-center gap-2">
                  <img src={foodCategoryImg03} alt="" />
                  Bread
                </button>
              </div>
            </Col>
            {products.map((item, index) => (
              <Col lg="3" md="4" key={index} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
