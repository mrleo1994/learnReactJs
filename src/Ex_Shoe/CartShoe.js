import React, { Component } from "react";

export default class CartShoe extends Component {
  render() {
    let { cart, handleRemove } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>
                  <img
                    style={{
                      width: 50,
                    }}
                    src={item.image}
                  />
                </td>
                <td>{item.price}</td>
                <td>
                  <button
                    onClick={() => {
                      handleRemove();
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
