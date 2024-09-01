/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementitems, removecart } from "../Redux/features/Cartslice";
import { toast } from "react-toastify";

const Cart = () => {
  const { carts } = useSelector((state) => state.cart); // Ensure this matches your store setup
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecrement = (item) => {
    dispatch(decrementitems(item));
  };

  const handleDelete = (id) => {
    dispatch(removecart(id));
    toast.success("Item removed from Cart");
  };

  return (
    <>
      {carts.length > 0 ? (
        <div className="container mx-auto mt-24">
          <div className="row">
            {carts.map((cartItem) => (
              <div className="card text-center mx-4 my-4" style={{ width: "18rem" }} key={cartItem.id}>
                <img src={cartItem.image} className="card-img-top" alt={cartItem.title} />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{cartItem.title}</h5>
                  <p className="card-text">{cartItem.description}</p>
                  <div className="d-flex justify-content-center mb-2 p-3">
                    <button className="btn btn-outline-dark" onClick={() => handleDecrement(cartItem)}>-</button>
                    <div className="mx-4 fs-5 fw-bold">{cartItem.quantity}</div>
                    <button className="btn btn-outline-dark" onClick={() => handleIncrement(cartItem)}>+</button>
                  </div>
                  <button className="btn btn-primary p-2 mx-3">Buy Now</button>
                  <button className="btn btn-primary p-2">Checkout</button>
                  <div className="price-container mt-3">
                    <div className="price fw-bold">
                      <div className="product-qty">
                        {cartItem.quantity} * ${cartItem.price}
                        <div className="totalamount x">Total amount = ${cartItem.price * cartItem.quantity}</div>
                        <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => handleDelete(cartItem.id)}
                        style={{ cursor: 'pointer', color: 'red' }}
                      />
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="container mx-auto mt-24 pt-40">
          <div className="row ">
            <h1>Your cart is empty...</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
