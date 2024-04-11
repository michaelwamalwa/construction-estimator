import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/styles.css";
//images
const backhoe = require("../images1/backhoe.jpg");
const crawler = require("../images1/crawler-loader.jpg");
const dumper = require("../images1/dum.jpg");
const excavator = require("../images1/excavator.jpg");
const mixer = require("../images1/mixer.jpg");
const motor = require("../images1/motor-grader.jpg");
const roller = require("../images1/roller.jpg");
const skid = require("../images1/skid.jpg");
 
const products = [
    { id: 1, name: "Backhoe", price: "$40.00 - $80.00", image: backhoe },
    { id: 2, name: "Crawler Loader", price: "$20.00", image: crawler, salePrice: "$18.00" },
    { id: 3, name: "Dumper", price: "$50.00", image: dumper, salePrice: "$25.00" },
    { id: 4, name: "Excavator", price: "$40.00", image: excavator },
    { id: 5, name: "Mixer", price: "$50.00", image: mixer, salePrice: "$25.00" },
    { id: 6, name: "Motor Grader", price: "$20.00", image: motor, salePrice: "$18.00" },
    { id: 7, name: "Roller", price: "$40.00", image: roller },
    { id: 8, name: "Skid Steer Loader", price: "$120.00 - $280.00", image: skid }
]
export const Store = () => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href="#!">
              JAY CONSTRUCTIONS
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#!">
                        All Products
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Popular Items
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        New Arrivals
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex">
                <button className="btn btn-outline-dark" type="submit">
                  <i className="bi-cart-fill me-1"></i>
                  Cart
                  <span className="badge bg-dark text-white ms-1 rounded-pill">
                    {cartItems.length}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </nav>

        <header className="bg-dark py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
              <h1 className="display-4 fw-bolder">Shop in style</h1>
              <p className="lead fw-normal text-white-50 mb-0">
                ONE STOP SHOPPING EXPERIENCE FOR YOUR CONSTRUCTION NEEDS
              </p>
            </div>
          </div>
        </header>

        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {products.map((product, index) => (
                <div className="col mb-5" key={index}>
                    </div>
              ))}
              <div className="col mb-5">
                <div className="card h-100">
                  <img className="card-img-top" src={backhoe} alt="..." />

                  <div className="card-body p-4">
                    <div class="text-center">
                      <h5 className="fw-bolder">Fancy Product</h5>
                      $40.00 - $80.00
                    </div>
                  </div>

                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <Link className="btn btn-outline-dark mt-auto" to="/cart" onClick={() => addToCart(products)}>
                        Add To Cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  <div
                    className="badge bg-dark text-white position-absolute"
                    style={{ top: "0.5rem", right: "0.5rem" }}
                  >
                    Sale
                  </div>

                  <img className="card-img-top" src={crawler} alt="..." />

                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">Special Item</h5>
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                      </div>
                      <span className="text-muted text-decoration-line-through">
                        $20.00
                      </span>
                      $18.00
                    </div>
                  </div>

                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto" href="#">
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  <div
                    className="badge bg-dark text-white position-absolute"
                    style={{ top: "0.5rem", right: "0.5rem" }}
                  >
                    Sale
                  </div>

                  <img className="card-img-top" src={dumper} alt="..." />

                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">Sale Item</h5>
                      <span className="text-muted text-decoration-line-through">
                        $50.00
                      </span>
                      $25.00
                    </div>
                  </div>

                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto" href="#">
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  <img className="card-img-top" src={excavator} alt="..." />

                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">Popular Item</h5>
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                      </div>
                      $40.00
                    </div>
                  </div>

                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a class="btn btn-outline-dark mt-auto" href="#">
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  <div
                    className="badge bg-dark text-white position-absolute"
                    style={{ top: "0.5rem", right: "0.5rem" }}
                  >
                    Sale
                  </div>

                  <img className="card-img-top" src={mixer} alt="..." />

                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">Sale Item</h5>
                      <span className="text-muted text-decoration-line-through">
                        $50.00
                      </span>
                      $25.00
                    </div>
                  </div>

                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a class="btn btn-outline-dark mt-auto" href="#">
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  <img className="card-img-top" src={mixer} alt="..." />

                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">Fancy Product</h5>
                      $120.00 - $280.00
                    </div>
                  </div>

                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto" href="#">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  <div
                    className="badge bg-dark text-white position-absolute"
                    style={{ top: "0.5rem", right: "0.5rem" }}
                  >
                    Sale
                  </div>

                  <img className="card-img-top" src={motor} alt="..." />

                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">Special Item</h5>
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                      </div>
                      <span className="text-muted text-decoration-line-through">
                        $20.00
                      </span>
                      $18.00
                    </div>
                  </div>

                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto" href="#">
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  <img className="card-img-top" src={roller} alt="..." />

                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">Popular Item</h5>
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                      </div>
                      $40.00
                    </div>
                  </div>

                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto" href="#">
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white"></p>
          </div>
        </footer>
      </div>
    </>
  );
};
