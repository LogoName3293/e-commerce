import React from "react";

const Product = (props) => {
  return (
      <div className="product" id={props.id}>
        <div className="product__img">
          <img src={props.img} alt="img" />
        </div>
        <div className="product__name">
          <p> {props.name} </p>
        </div>
        <div className="price__info">
          <h4> {props.price}₽</h4>
          <strike>{props.oldPrice}</strike>
        </div>
        <div className="btn__buy">
          <button>{props.buy}</button>
        </div>
    </div>
  );
};

export default Product;
