import React from "react";
import offer from "../image/Offer-banner.png";
import Star from "../image/Star.png";

function Offer() {
  return (
    <>
      <div style={{ backgroundColor: "#E6C744" }}>
        <div className="container mt-5">
          <div className="row mx-auto">
            <div className="col-12 col-md-6 col-lg-6">
              {/* Star */}
              <div className="star-offer">
                <div className="star-1">
                  <img src={Star} alt="star" />
                </div>
                <div className="star-2">
                  <img src={Star} alt="star" />
                </div>
                <div className="star-3">
                  <img src={Star} alt="star" />
                </div>
                <div className="star-4">
                  <img src={Star} alt="star" />
                </div>
              </div>
              <img className="img-fluid" src={offer} alt="offer-banner"></img>
            </div>

            <div className="col-12 col-lg-6 col-md-6 p-2 px-lg-5 pt-lg-5">
              <div className="fw-bold offer-txt px-lg-5 py-3">
                <p>
                  <span className="offer-1">PAYDAY</span>
                </p>
                <p>SALES NOW</p>
              </div>
              <div className="px-lg-5 py-lg-2">
                <p>
                  Spend minimal $100 get 30% off voucher code for your next
                  purchase
                </p>

                <h6>1 June - 10 June 2023</h6>
                <p>*Terms & Conditions apply</p>
                <button type="button" className="btn btn-dark">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offer;
