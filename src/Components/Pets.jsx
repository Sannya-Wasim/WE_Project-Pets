import React from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";

function Pets() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getPets = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
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

    getPets();
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

  const filterPets = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowPets = () => {
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
            onClick={() => filterPets("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            class="btn btn-outline-dark me-2"
            onClick={() => filterPets("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            class="btn btn-outline-dark me-2"
            onClick={() => filterPets("jewelery")}
          >
            Jewellery
          </button>
          <button
            class="btn btn-outline-dark me-2"
            onClick={() => filterPets("electronics")}
          >
            Electronics
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
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 12)}...
                    </h5>
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
            {loading ? <Loading /> : <ShowPets />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pets;