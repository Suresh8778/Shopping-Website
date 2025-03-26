import React, { useRef, useEffect } from "react";
import { CardImg } from "react-bootstrap";
import brand1 from "../image/brand1.png";
import brand2 from "../image/brand2.png";
import brand3 from "../image/brand3.png";
import brand4 from "../image/brand4.png";
import brand5 from "../image/brand5.png";
import brand6 from "../image/brand6.png";

function BrandLogo() {
  const products = [
    { id: 1, image: brand1 },
    { id: 2, image: brand2 },
    { id: 3, image: brand3 },
    { id: 4, image: brand4 },
    { id: 5, image: brand5 },
    { id: 6, image: brand6 },
    { id: 7, image: brand1 },
    { id: 8, image: brand2 },
    { id: 9, image: brand3 },
    { id: 10, image: brand4 },
    { id: 11, image: brand5 },
    { id: 12, image: brand6 },
  ];
  const scrollRef = useRef(null);
  let isDragging = false;
  let startX;
  let scrollLeft;

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const autoScroll = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
    }, 30);

    return () => clearInterval(autoScroll);
  }, []);

  const handleMouseDown = (e) => {
    isDragging = true;
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDragging = false;
  };

  return (
    <>
      <div className="brand px-2 my-5">
        <div
          className="container scroll-container"
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
        >
          {products.concat(products).map((product, index) => (
            <div key={index} className="moving-card px-5">
              <div className="hover-container">
                <CardImg
                  src={product.image}
                  alt={`Slide ${index + 1}`}
                  className="product-image p-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BrandLogo;