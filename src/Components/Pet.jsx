import React from 'react';
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action/index";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import {useState, useEffect} from 'react';

function Pet() {
    const { id } = useParams();
    const [pet, setPet] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const dispatch = useDispatch();
    const addProduct = (pet) => {
      dispatch(addCart(pet));
    };
  
    useEffect(() => {
      const getPet = async () => {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        setPet(await response.json());
        setLoading(false);
      };
      getPet();
    }, []);
  
    const Loading = () => {
      return (
        <>
          <div className="col-md-6" style={{ lineHeight: 2 }}>
            <Skeleton height={400} />
          </div>
          <div className="col-md-6">
            <Skeleton height={50} width={300} />
            <Skeleton height={75} />
            <Skeleton height={25} width={150} />
            <Skeleton height={50} />
            <Skeleton height={150} />
            <Skeleton height={50} width={100} />
            <Skeleton height={50} width={300} style={{ marginLeft: 6 }} />
          </div>
        </>
      );
    };
  
    const ShowPet = () => {
      return (
        <>
          <div className="col-md-6">
            <img
              src={pet.image}
              alt={pet.title}
              height="400px"
              width="400px"
            />
          </div>
          <div className="col-md-6">
            <h4 className="text-uppercae text-black-50">{pet.category}</h4>
            <h1 classname="display-5">{pet.title}</h1>
            <p className="lead fw-bolder">
              Rating {pet.rating && pet.rating.rate}
              <i className="fa fa-star"></i>
            </p>
            <h3 className="display-6 fw-bold my-4">${pet.price}</h3>
            <p className="lead">{pet.description}</p>
            <button
              className="btn btn-outline-dark px-4 py-2"
              onClick={() => addProduct(pet)}
            >
              Add to Cart
            </button>
            <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
              Go to Cart
            </NavLink>
          </div>
        </>
      );
    };
  return (
    <div>
      <div className="container py-5 ">
        <div className="row">{loading ? <Loading /> : <ShowPet />}</div>
      </div>
    </div>
  )
}

export default Pet
