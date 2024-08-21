import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewMore = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <h1 className="headingp">Products</h1>
      <div className="search">
        <input
          className="searchs"
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginBottom: "20px", padding: "10px", width: "300px" }}
        />
      </div>
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              className="image"
              src={product.thumbnail}
              alt={product.title}
            />
            <h2 className="titlep">{product.title}</h2>
            <button onClick={() => handleViewMore(product.id)}>
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
