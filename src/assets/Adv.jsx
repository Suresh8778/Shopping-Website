import React from "react";
import Mobile from "../image/Ad-Mobile.png";
import Adv1 from "../image/apple.png";
import Adv2 from "../image/google.png";
import Ellipse01 from "../image/Ellipse-1.png";
import Ellipse02 from "../image/Ellipse-2.png";

function Adv() {
  return (
    <>
      <div className="container my-4">
        <div className="row mx-auto">
          <div className="adv-con col-12 col-lg-6 col-md-6 p-2 px-lg-5 pt-lg-5">
            <div className="adv-head px-lg-5">
              <h2 className="fw-bold">DOWNLOAD APP & GET THE VOUCHER!</h2>
            </div>
            <div className="adv-txt px-lg-5 py-3">
              <p>
                Get 30% off for first transaction using Rondovision mobile app
                for now.
              </p>
              <div className="adv-img d-flex pt-2">
                <img
                  src={Adv1}
                  alt="Adv-image"
                  className="image-fluid"
                  width="120px"
                ></img>
                <img
                  src={Adv2}
                  alt="Adv-image"
                  className="image-fluid"
                  width="120px"
                ></img>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 px-lg-5 pt-lg-5 text-center">
            <div className="circle-div">
              <div className="circle1">
                <img src={Ellipse01} alt="circle"></img>
              </div>
              <div className="circle2">
                <img src={Ellipse02} alt="circle"></img>
              </div>
              <div className="circle3">
                <img src={Ellipse01} alt="circle"></img>
              </div>
              <div className="circle4">
                <img src={Ellipse02} alt="circle"></img>
              </div>
            </div>
            <img
              className="image-fluid mob-img"
              src={Mobile}
              alt="banner"
              height="600px"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Adv;
