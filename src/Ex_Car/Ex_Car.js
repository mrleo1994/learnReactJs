import React, { Component } from "react";

export default class Ex_Car extends Component {
  state = {
    color: "red",
  };
  handleChangeColor = (color) => {
    this.setState({ color: color });
  };

  render() {
    return (
      <div>
        <img
          width={200}
          src={`./img_ex/CarBasic/products/${this.state.color}-car.jpg`}
          alt=""
        />
        <button
          onClick={() => {
            this.handleChangeColor("red");
          }}
          className="btn btn-danger"
        >
          Red
        </button>
        <button
          onClick={() => {
            this.handleChangeColor("black");
          }}
          className="btn btn-dark"
        >
          Black
        </button>
        <button
          onClick={() => {
            this.handleChangeColor("silver");
          }}
          className="btn btn-secondary"
        >
          Silver
        </button>
      </div>
    );
  }
}
