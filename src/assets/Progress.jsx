import React from "react";
import progress from "../image/progress.png";

function Progress() {
  return (
    <>
      <div className="container">
        <div className="progress-container">
          <img src={progress} alt="progress-img"></img>
        </div>
        <h4 className="fw-bold text-center" style={{ color: "#FFD31A" }}>
          STILL PROGRESSING....
        </h4>
      </div>
    </>
  );
}

export default Progress;
