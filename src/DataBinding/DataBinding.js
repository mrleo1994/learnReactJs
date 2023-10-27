import React, { Component } from "react";

export default class DataBinding extends Component {
  email = "saitama@gmail.com";
  avatar =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRSLqhHZnRZKzTxmHKBhkl8q-Ro6rSCRxasIHU7Mgk3OZSih2FMzDd7og1dHkI-1r2MNo&usqp=CAU";
  renderButton = () => {
    return <button className="btn btn-danger">Click me</button>;
    // hàm ko có return trả về undefined
  };
  render() {
    let username = "Saitama";
    // databinding ~ {}
    return (
      <div>
        <h2>DataBinding</h2>
        <h3>User profile</h3>
        <p>Username: {username}</p>
        <p>Gmail : {this.email}</p>
        <img src={this.avatar} />
        {this.renderButton()}
        {this.renderButton()}
        {this.renderButton()}
        {this.renderButton()}
        {this.renderButton()}
        {this.renderButton()}
      </div>
    );
  }
}
