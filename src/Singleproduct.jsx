import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './Redux/features/Cartslice';
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

const Singleproduct = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  // Use the correct state key
  const { carts } = useSelector((state) => state.cart); 

  console.log(carts);

  const dispatch = useDispatch();

  const send = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const productData = await response.json();
      setProduct(productData);
      setLoading(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => <div>Loading...</div>;

  const ShowProduct = () => (
    <div className="row">
      <div className="col-md-6">
        <img src={product.image} alt={product.title} height="400px" width="400px" />
      </div>
      <div className="col-md-6">
        <h4 className="text-uppercase text-black-50">{product.category}</h4>
        <h1 className="display-5">{product.title}</h1>
        <p className="lead fw-bolder">
          Rating {product.rating && product.rating.rate}
        </p>
        <h3 className="display-6 fw-bold my-4">${product.price}</h3>
        <p className="lead">{product.description}</p>
        <button className="btn btn-outline-dark px-4 py-2" onClick={() => send(product)}>Add to Cart</button>
        <NavLink to="/Cart">
          <button className="btn btn-dark ms-2 px-3 py-2">Go to Cart</button>
        </NavLink>
      </div>
    </div>
  );

  return (
    <div>
      <div className="container py-5">
        {loading ? <Loading /> : <ShowProduct />}
      </div>
    </div>
  );
};

export default Singleproduct;
