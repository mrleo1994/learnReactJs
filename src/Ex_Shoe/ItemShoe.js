import React, { Component } from "react";

export default class ItemShoe extends Component {
  render() {
    let { data, handleViewDetail } = this.props;
    return (
      <div className="col-3 card">
        <img className="w-100" src={data.image} alt="" />
        <button className="btn btn-primary">Add</button>
        <button
          className="btn btn-info"
          onClick={() => {
            handleViewDetail(data);
          }}
        >
          View
        </button>
      </div>
    );
  }
}
