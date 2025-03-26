import React from "react";
import product1 from "../image/prd1.png";
import product2 from "../image/prd2.png";
import product3 from "../image/prd3.png";
import { BsArrowRight } from "react-icons/bs";

function Product() {
  return (
    <>
      <div className="container">
        <h4 className="fw-bold">NEW ARRIVALS</h4>
        <div className="product-con row mt-5">
          <div className="prd-card col-3 mb-4">
            <div>
              <img src={product1} className="prd-img" alt="product"></img>
            </div>
            <div className="card-body">
              <div className="prd-txt">
                <p className="fw-bold">Hoodies & Sweetshirt</p>
                <p className="text-muted">Explore Now!</p>
              </div>
              <div className="prd-arrow">
                <p>
                  <BsArrowRight size={20} />
                </p>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="prd-card col-3 mb-4">
            <div>
              <img src={product2} className="prd-img" alt="product"></img>
            </div>
            <div className="card-body">
              <div className="prd-txt">
                <p className="fw-bold">Coats & Parkas</p>
                <p className="text-muted">Explore Now!</p>
              </div>
              <div className="prd-arrow">
                <p>
                  <BsArrowRight size={20} />
                </p>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="prd-card col-3 mb-4">
            <div>
              <img src={product3} className="prd-img" alt="product"></img>
            </div>
            <div className="card-body">
              <div className="prd-txt">
                <p className="fw-bold">Tees & T-Shirt</p>
                <p className="text-muted">Explore Now!</p>
              </div>
              <div className="prd-arrow">
                <p>
                  <BsArrowRight size={20} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
