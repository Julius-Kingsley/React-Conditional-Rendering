import React from "react";
import { products, electronics, fashion, lifestyle, laptop } from "./products";
import ProductsCard from "./ProducstCard";
import { useState } from "react";

const ConditionalRendering2 = () => {
  const [showProducts, setProducts] = useState(true);
  const [showElectronics, setElectronics] = useState(false);
  const [showFashion, setFashion] = useState(false);
  const [showLifestyle, setLifestyle] = useState(false);
  const [showLaptop, setLaptop] = useState(false);

  return (
    <>
      <h1 className="text-center text-dark bg-info p-3">E-Commerce</h1>
      <div className="container">
        <button
          className="btn btn-primary"
          onClick={() => {
            setProducts(true);
            setElectronics(false);
            setFashion(false);
            setLifestyle(false);
            setLaptop(false);
          }}
        >
          All Products
        </button>
        &nbsp;
        <button
          className="btn btn-info"
          onClick={() => {
            setProducts(false);
            setElectronics(true);
            setFashion(false);
            setLifestyle(false);
            setLaptop(false);
          }}
        >
          Electronics
        </button>
        &nbsp;
        <button
          className="btn btn-warning"
          onClick={() => {
            setProducts(false);
            setElectronics(false);
            setFashion(true);
            setLifestyle(false);
            setLaptop(false);
          }}
        >
          Fashion
        </button>
        &nbsp;
        <button
          className="btn btn-secondary"
          onClick={() => {
            setProducts(false);
            setElectronics(false);
            setFashion(false);
            setLifestyle(true);
            setLaptop(false);
          }}
        >
          Lifestyle
        </button>
        &nbsp;
        <button
          className="btn btn-success"
          onClick={() => {
            setProducts(false);
            setElectronics(false);
            setFashion(false);
            setLifestyle(false);
            setLaptop(true);
          }}
        >
          Laptop
        </button>
        <div className="row">
          {showProducts === true
            ? products.map((val) => {
                return (
                  <div className="col-4 my-2">
                    <ProductsCard
                      imgpath={val.imgpath}
                      name={val.name}
                      price={val.price}
                    />
                  </div>
                );
              })
            : showElectronics === true
              ? electronics.map((val) => {
                  return (
                    <div className="col-4 my-2">
                      <ProductsCard
                        imgpath={val.imgpath}
                        name={val.name}
                        price={val.price}
                      />
                    </div>
                  );
                })
              : showFashion === true
                ? fashion.map((val) => {
                    return (
                      <div className="col-4 my-2">
                        <ProductsCard
                          imgpath={val.imgpath}
                          name={val.name}
                          price={val.price}
                        />
                      </div>
                    );
                  })
                : showLifestyle === true
                  ? lifestyle.map((val) => {
                      return (
                        <div className="col-4 my-2">
                          <ProductsCard
                            imgpath={val.imgpath}
                            name={val.name}
                            price={val.price}
                          />
                        </div>
                      );
                    })
                  : showLaptop === true
                    ? laptop.map((val) => {
                        return (
                          <div className="col-4 my-2">
                            <ProductsCard
                              imgpath={val.imgpath}
                              name={val.name}
                              price={val.price}
                            />
                          </div>
                        );
                      })
                    : null}
        </div>
      </div>
    </>
  );
};

export default ConditionalRendering2;
