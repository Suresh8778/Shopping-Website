import React from 'react';

function Subscribe() {
  return (
    <>
        <div className='sub' style={{backgroundColor:"#E5c643",padding:"50px"  }}>
        <div className="container text-white sub-con">
            <h3 className='fw-bold p-1'>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h3>
            <p>Type your email down below and be young wild generation</p>
            <form className="sub-form mx-auto">
        <input
          type="email"
          placeholder="Add your email here"
          className="sub-input px-4 py-2"
          required
        />
        <button
          type="submit"
          className="btn btn-dark text-white px-3 py-1"
        >
          SEND
        </button>
      </form>
        </div>
        </div>
    </>
  )
}

export default Subscribe;