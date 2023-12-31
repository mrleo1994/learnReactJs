import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    return (
      <div className="p-5 bg-success display-4">
        <h2>Profile</h2>
        <p>{this.props.content}</p>
        <p>{this.props.name}</p>
        <button
          onClick={() => {
            this.props.handleChange("Alice");
          }}
          className="btn btn-primary"
        >
          Alice
        </button>
      </div>
    );
  }
}
