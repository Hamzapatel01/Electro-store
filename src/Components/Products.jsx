import { useEffect, useState } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/features/Cartslice";
import { toast } from "react-toastify";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  let componentsmounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentsmounted) {
        const products = await response.json();
        setData(products);
        setFilter(products);
        setLoading(false);
      }
      return () => {
        componentsmounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <>Loading...</>;
  };

  const filterproduct = (cat) => {
    const list = data.filter((x) => x.category === cat);
    setFilter(list);
  };

  const Showproducts = () => {
    const send = (product) => {
      dispatch(addToCart(product));
      toast.success("Item added to Cart");
    };

    return (
      <>
        <div className="text-center mb-4">
          <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterproduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterproduct("women's clothing")}>Women's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterproduct("jewelery")}>Jewelry</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterproduct("electronics")}>Electronics</button>
        </div>
        <div className="row">
          {filter.map((p) => (
            <div className="col-md-3 pt-4" key={p.id}>
              <div className="card h-100 text-center p-3" style={{ border: 'none', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.65)' ,cursor:"pointer"}}>
                <img src={p.image} className="card-img-top" alt={p.title} style={{ objectFit: 'cover', height: '250px' }} />
                <div className="card-body ">
                  <h5 className="card-title mb-0">{p.title.substring(0, 12)}</h5>
                  <p className="card-text">${p.price}</p>
                  <div className="d-grid gap-2">
                    <NavLink to={`/products/${p.id}`} className="btn btn-primary">
                      Buy Now
                    </NavLink>
                    <button className="btn btn-primary" onClick={() => send(p)}>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="container flex-column">
      <div className="row">
        <div className="col-12 mt-2 text-center ">
          {/* Removed 'text-center' class to avoid flex alignment */}
          <h1>Buy Products</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <Showproducts />}
      </div>
    </div>
  );
};

export default Products;
