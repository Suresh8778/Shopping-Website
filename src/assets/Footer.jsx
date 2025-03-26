import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

function Foot() {
  return (
    <>
      <div style={{ backgroundColor: "#000000", color: "#ffffff" }}>
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-6 col-md-4 col-12">
              <h5>FASHION</h5>
              <div style={{ maxWidth: "300px", fontWeight: "200" }}>
                <p className="py-2">
                  Complete your style with awesome clothes from us.
                </p>
              </div>
              <div className="d-flex gap-2">
                <FaFacebookSquare color="#e6c744" size={25} />
                <FaInstagramSquare color="#e6c744" size={25} />
                <FaTwitterSquare color="#e6c744" size={25} />
                <FaLinkedin color="#e6c744" size={25} />
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-6">
              <div>
                <ul className="list-inline footer-li">
                  <h6>Company</h6>
                  <li className="list-inline-item py-1">About</li>
                  <li className="list-inline-item py-1">Contact Us</li>
                  <li className="list-inline-item py-1">Support</li>
                  <li className="list-inline-item py-1">Careers</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-6">
              <div>
                <ul className="list-inline footer-li">
                  <h6>Quick Link</h6>
                  <li className="list-inline-item py-1">Share Location</li>
                  <li className="list-inline-item py-1">Orders Tracking</li>
                  <li className="list-inline-item py-1">Size Guide</li>
                  <li className="list-inline-item py-1">FAQs</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div>
                <ul className="list-inline footer-li">
                  <h6>Legal</h6>
                  <li className="list-inline-item py-1">Terms & Conditions</li>
                  <li className="list-inline-item py-1">Privacy Policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Foot;
