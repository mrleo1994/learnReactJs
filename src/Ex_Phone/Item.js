import React, { Component } from "react";

export default class Item extends Component {
  render() {
    let { hinhAnh, tenSP } = this.props.phoneData;
    return (
      <div className="col-4">
        <div className="card text-left">
          <img src={hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{tenSP}</h4>
            <p className="card-text">
              <button
                onClick={() => {
                  this.props.handleViewDetail(this.props.phoneData);
                }}
                className="btn btn-danger"
              >
                View Detail
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
