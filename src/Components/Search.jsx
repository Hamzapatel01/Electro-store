/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Search.css";

const Search = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let isComponentMounted = true;

    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (isComponentMounted) {
          const products = await response.json();
          setData(products);
          setFilter([]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();

    return () => {
      isComponentMounted = false;
    };
  }, []);

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    if (searchTerm) {
      const filteredProducts = data.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilter(filteredProducts);
    } else {
      setFilter([]);
    }
  };

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="loading-text">Page is loading... Please wait.</div>
      </div>
    );
  }

  return (
    <div className="search-item fw-bold border-black">
      <input
        type="text"
        placeholder="Search here"
        value={searchItem}
        onChange={handleSearchChange}
        className="form-control mb-4"
      />
      {searchItem ? (
        filter.length > 0 ? (
          <ul className="list-group">
            {filter.map((product) => (
              <li
                key={product.id}
                className="list-group-item d-flex align-items-center"
                onClick={() => handleProductClick(product.id)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-thumbnail"
                  style={{ width: "50px", height: "50px", marginRight: "15px" }}
                />
                {product.title}
              </li>
            ))}
          </ul>
        ) : (
          <div>No products found</div>
        )
      ) : (
        <div>Please type to search for products</div>
      )}
    </div>
  );
};

export default Search;
