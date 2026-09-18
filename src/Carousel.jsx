import React from "react";

const Carousel = () => {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://assets-jiocdn.ajio.com/v2/dry-wildflower-b77541/ajprod/original/ajio-prod/company/1/applications/6920511ba88a0b4351d486dc/theme/pictures/free/original/D-UHP-ST-TBM-S13-P9-FS-TITAN-FASHIONNATION-25082026-1787640918921.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://assets-jiocdn.ajio.com/v2/dry-wildflower-b77541/ajprod/original/ajio-prod/company/1/applications/6920511ba88a0b4351d486dc/theme/pictures/free/original/D-UHP-ST-TBM-S13-P4-FS-FLYINGMACHINE-FASHIONNATION-25082026-1787640900374.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://assets-jiocdn.ajio.com/v2/dry-wildflower-b77541/ajprod/original/ajio-prod/company/1/applications/6920511ba88a0b4351d486dc/theme/pictures/free/original/D-UHP-ST-TBM-S13-P6-FS-MOKOBARA-FASHIONNATION-25082026-1787641008921.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
