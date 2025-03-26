import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./assets/Navbar";
import Banner from "./assets/Banner";
import BrandLogo from "./assets/BrandLogo";
import Product from "./assets/Product";
import Offer from "./assets/Offer";
import FavProduct from "./assets/FavProduct";
import Adv from "./assets/Adv";
import Subscribe from "./assets/Subscribe";
import Footer from "./assets/Footer";
import Progress from "./assets/Progress";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <BrandLogo />
              <Product />
              <Offer />
              <FavProduct />
              <Adv />
              <Subscribe />
            </>
          }
        />
        <Route path="/catalogue" element={<Progress />} />
        <Route path="/fashion" element={<Progress />} />
        <Route path="/lifestyle" element={<Progress />} />
        <Route path="/favourite" element={<Progress />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
