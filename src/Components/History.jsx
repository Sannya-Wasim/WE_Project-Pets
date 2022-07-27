import React from "react";
import NavBar from "./NavBar";

function History() {
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
                <th scope="col">Delivery Date</th>
                <th scope="col">Delivery Type</th>
                <th scope="col">Order Total</th>
                <th scope="col">Order Status</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1828312831</th>
                <td>02/17/21 Wednesday</td>
                <td>Home Delivery</td>
                <td>$45.56</td>
                <td>Delivered</td>
                <td>
                  <a>View</a> | <a>Cancel</a> | <a>Modify</a>
                </td>
              </tr>
              <tr>
                <th scope="row">823812324</th>
                <td>06/01/21 Friday</td>
                <td>Cash on Delivery</td>
                <td>$3.45</td>
                <td>Pending</td>
                <td>
                  <a>View</a> | <a>Cancel</a> | <a>Modify</a>
                </td>
              </tr>
              <tr>
              <th scope="row">7452720947</th>
                <td>10/28/22 Sunday</td>
                <td>Home Delivery</td>
                <td>$100.6</td>
                <td>Delivered</td>
                <td>
                  <a>View</a> | <a>Cancel</a> | <a>Modify</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default History;
