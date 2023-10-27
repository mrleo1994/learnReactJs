import React, { Component } from "react";
import { movieArr } from "./data";

export default class RenderWithMap extends Component {
  renderMovieList = () => {
    return movieArr.map((item) => {
      return (
        <div
          style={{
            width: "100%",
            height: "300px",
            backgroundColor: "black",
            color: "White",
          }}
          className="col-3"
        >
          <img src={item.hinhAnh} alt="" />
          <p>{item.tenPhim}</p>
        </div>
      );
    });
  };
  render() {
    console.log(movieArr.length);
    return <div className="row">{this.renderMovieList()}</div>;
  }
}
