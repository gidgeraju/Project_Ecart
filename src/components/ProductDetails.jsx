import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);
  const handleAddToCart = () => {
    localStorage.setItem("cartProduct", JSON.stringify(product));
    navigate("/cart");
  };
  if (!product) {
    return <div>Loading</div>;
  }

  return (
    <div className="product-details-page">
      <div className="name">
        <h1>{product.title}</h1>
      </div>
      <img src={product.thumbnail} alt={product.title} className="imageu" />
      <div className="product-details-info">
        <p>{product.description}</p>
        <p>
          {" "}
          <b>Category </b>: {product.category}
        </p>
        <p>
          {" "}
          <b>Brand </b>: {product.brand}
        </p>
        <p>
          {" "}
          <b>Price </b>: ${product.price}
        </p>
        <p>
          {" "}
          <b>Discount Percentage </b>: {product.discountPercentage}
        </p>
        <p>
          {" "}
          <b>Rating</b>: {product.rating}
        </p>
        <p>
          {" "}
          <b>Stock </b>: {product.stock}
        </p>
        <p>
          Dimensions:<b> Width </b>- {product.dimensions?.width}, <b>Height </b>{" "}
          - {product.dimensions?.height}, <b>Depth</b> -{" "}
          {product.dimensions?.depth}
        </p>
        <p>
          {" "}
          <b>Warranty Information </b>: {product.warrantyInformation}
        </p>
        <p>
          {" "}
          <b>Shipping Information </b>: {product.shippingInformation}
        </p>
        <p>
          {" "}
          <b>Availability Status </b>: {product.availabilityStatus}
        </p>
        <p>
          {" "}
          <b>Return Policy </b>: {product.returnPolicy}
        </p>
        <p>Minimum Order Quantity: {product.minimumOrderQuantity}</p>
        <p>
          {" "}
          <b>Created At </b>: {product.meta?.createdAt}
        </p>
        <p>
          {" "}
          <b>Updated At</b>: {product.meta?.updatedAt}
        </p>
        <p>
          {" "}
          <b>Barcode </b>: {product.meta?.barcode}
        </p>
        <p>
          {" "}
          <b>QR Code </b>: {product.meta?.qrCode}
        </p>
        
        <button onClick={handleAddToCart}>Add Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
