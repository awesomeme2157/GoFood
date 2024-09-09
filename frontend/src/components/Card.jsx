import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Card(props) {
  let options = props.options;
  let priceOptions = Object.keys(options);

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(priceOptions[0]);
  const [totalPrice, setTotalPrice] = useState(options[selectedSize]);

  // Update total price when size or quantity changes
  const handlePriceChange = (size, qty) => {
    setTotalPrice(options[size] * qty);
  };

  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
        <div
          className="card mt-3 shadow-sm"
          style={{ width: "18rem", borderRadius: "10px", overflow: "hidden" }}
        >
          <img
            src={props.imgSrc}
            className="card-img-top"
            alt={props.foodName}
            style={{ height: "200px", objectFit: "cover" }}
          />
          <div className="card-body bg-dark text-white p-4">
            <h5
              className="card-title text-center mb-3"
              style={{ fontWeight: "bold" }}
            >
              {props.foodName}
            </h5>

            <div className="container">
              <div className="row justify-content-between mb-3">
                {/* Quantity Selector */}
                <div className="col-5">
                  <select
                    className="form-select text-center border-0 rounded"
                    style={{ backgroundColor: "#28a745", color: "white" }}
                    value={quantity}
                    onChange={(e) => {
                      setQuantity(e.target.value);
                      handlePriceChange(selectedSize, e.target.value);
                    }}
                  >
                    {Array.from({ length: 6 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Size/Option Selector */}
                <div className="col-5">
                  <select
                    className="form-select text-center border-0 rounded"
                    style={{ backgroundColor: "#28a745", color: "white" }}
                    value={selectedSize}
                    onChange={(e) => {
                      setSelectedSize(e.target.value);
                      handlePriceChange(e.target.value, quantity);
                    }}
                  >
                    {priceOptions.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Total Price Display */}
              <div className="text-center mt-2">
                <span
                  className="fs-5"
                  style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                >
                  Total Price: ₹{totalPrice}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  foodName: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired, // Ensure options is an object like {half: price, full: price}
};
