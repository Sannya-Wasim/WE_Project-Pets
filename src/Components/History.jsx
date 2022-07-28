import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Axios from "axios";

function History() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/order").then((response) => {
      setOrders(response.data);
    });
  }, []);

  const handleDelete = (order_id) => {
    Axios.delete(`http://localhost:5000/order/${order_id}`).then((res) => {});
    window.location.reload(false);
  };

  return (
    <div>
      <div id="nav-div">
        <h1>Mithoo</h1>
        <NavBar />
      </div>
      <div class="container my-3 py-5 mx-auto">
        <div class="row">
          <div class="col-12 mb-5">
            <h1 class="display-6 fw-bolder text-center">Order History</h1>
            <hr />
          </div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Order #</th>
                <th scope="col">Product #</th>
                <th scope="col">Product</th>
                <th scope="col">Total</th>
                <th scope="col">Quantity</th>
                <th scope="col">Update</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((ord) => {
                  return (
                    <tr>
                      <th scope="row">{ord.order_id}</th>
                      <td>{ord.product_id}</td>
                      <td>{ord.product_name}</td>
                      <td>{ord.price}</td>
                      <td>{ord.quantity}</td>
                      <td>
                        <button
                          onClick={() => {
                            handleDelete(ord.order_id);
                          }}
                          style={{ border: "none" }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <h2>No Order History</h2>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default History;
