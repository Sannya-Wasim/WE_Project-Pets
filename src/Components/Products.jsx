import React from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      // const response = await fetch("https://fakestoreapi.com/products");
      const response = await fetch("http://localhost:5000/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div class="col-md-3">
          <Skeleton height={350} />
        </div>
        <div class="col-md-3">
          <Skeleton height={350} />
        </div>
        <div class="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category_id == cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div class="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            class="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All Products
          </button>
          <button
            class="btn btn-outline-dark me-2"
            onClick={() => filterProduct(1)}
          >
            Accessories
          </button>
          <button
            class="btn btn-outline-dark me-2"
            onClick={() => filterProduct(2)}
          >
            Toys
          </button>
          <button
            class="btn btn-outline-dark me-2"
            onClick={() => filterProduct(3)}
          >
            Food Products
          </button>
        </div>

        {filter.map((product) => {
          return (
            <>
              <div class="col-md-3 mb-4">
                <div className="card h-100 text-center p-4 " key={product.id}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">{product.name}</h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <NavLink
                      to={`${product.id}`}
                      className="btn btn-outline-dark"
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div id="nav-div">
        <h1>Mithoo</h1>
        <NavBar />
      </div>

      <div class="container my-5 py-5">
        <div class="row">
          <div class="col-12 mb-5">
            <h1 class="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
          <div class="row justify-content-center">
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
