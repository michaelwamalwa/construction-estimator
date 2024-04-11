import React from "react";
import {useNavigate} from "react-router";
import { useDispatch } from "react-redux";
import { useGetAllProductsQuery } from "../features/productsApi";
import { addToCart } from '../features/cartSlice'; // Import the action creator
import "./Products.css";

export default function Products() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
 const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/store/cart");
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An error occurred: {error.toString()}</p>;

  return (
    <div className="home-container">
      <h2>New Arrivals</h2>
      <div className="products">
        {data?.category?.map((category) =>
          category.data.map((product) => (
            <div key={product.id} className="product">
              <h3>{product.name}</h3>
              <img src={product.image} alt={product.name} />
              <div className="details">
                <span>{product.desc}</span>
                <span className="price">KES {product.price}</span>
              </div>
              <button onClick={() => handleAddToCart(product)}>
                ADD TO CART
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
