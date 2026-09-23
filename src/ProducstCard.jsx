import React from "react";

const ProductsCard = (props) => {
  return (
    <>
      <div className="card">
        <img
          src={props.imgpath}
          className="card-img-top"
          alt="..."
          style={{ width: "100%", height: "200px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">Price:{props.price}</p>
          <a href="#" className="btn btn-danger">
            Buy Now
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
