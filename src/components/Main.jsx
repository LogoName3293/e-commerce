import React from "react";
import Product from "./Product";
import nike from "../assets/nike.jpg";
import macAir from "../assets/macAir.jpg";
import iphone from "../assets/iphone14.jpg";
import galaxy from "../assets/galaxy.jpg";
import sony from "../assets/sonyVR.jpeg";
import xbox from "../assets/xboxS.jpeg";

const Main = () => {
  return (
    <>
      <Product
        id={"nike"}
        name={"Nike Air Max Plus"}
        img={nike}
        price={5990}
        oldPrice={`${10990}₽`}
        buy={"Купить"}
      />
      <Product
        id={"macbook"}
        name={"MacBook Air M1"}
        img={macAir}
        price={189990}
        buy={"Купить"}
      />
      <Product
        id={"iphone"}
        name={"iPhone 14 Pro"}
        img={iphone}
        price={120990}
        buy={"Купить"}
      />
      <Product
        id={"galaxy"}
        name={"Galaxy Flip"}
        img={galaxy}
        price={90990}
        buy={"Купить"}
      />
      <Product
        id={"sony"}
        name={"SonyVR"}
        img={sony}
        price={9990}
        oldPrice={`${12990}₽`}
        buy={"Купить"}
      />
      <Product
        id={"xbox"}
        name={"Xbox Series X"}
        img={xbox}
        price={45990}
        oldPrice={`${60990}₽`}
        buy={"Купить"}
      />
    </>
  );
};

export default Main;
