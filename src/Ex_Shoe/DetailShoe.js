import React, { Component } from "react";

export default class DetailShoe extends Component {
  render() {
    return (
      <div className="text-center">
        <h2>{this.props.detail.name}</h2>
        <img src={this.props.detail.image} alt="" />
      </div>
    );
  }
}
