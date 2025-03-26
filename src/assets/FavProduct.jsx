import React from 'react';
import product4 from '../image/prd4.png';
import product5 from '../image/prd5.png';
import { BsArrowRight } from "react-icons/bs";

function FavProduct() {
  return (
    <>
        <div className='container mt-5'>
                    <h4 className='fw-bold'>Young's Favourite</h4>
                    <div className='row mt-5'>
                    <div className='card col-12 col-lg-6 col-md-6'>
                    <img src={product4} className='image-fluid' alt='product'></img>
                            <div className='card-body'>
                                    <div className='fav-txt'>
                                    <p className='fw-bold'>Trending on Instagram</p>
                                    <p className='text-muted'>Explore Now!</p>
                                    </div>
                                    <div className='prd-arrow'>
                                        <p><BsArrowRight size={20} /></p>
                                    </div>
                            </div>
                        </div>
        
                        {/* 2 */}
                        <div className='card col-12 col-lg-6 col-md-6'>
                        <img src={product5} className='image-fluid' alt='product'></img>
                            <div className='card-body'>
                                    <div className='fav-txt'>
                                    <p className='fw-bold'>All Under ₹ 200</p>
                                    <p className='text-muted'>Explore Now!</p>
                                    </div>
                                    <div className='prd-arrow'>
                                        <p><BsArrowRight size={20} /></p>
                                    </div>
                            </div>
                        </div>
        
                    </div>
                </div>
    </>
  )
}

export default FavProduct;