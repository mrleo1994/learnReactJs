import React, { Component } from "react";
import CartShoe from "./CartShoe";
import ListShoe from "./ListShoe";
import DetailShoe from "./DetailShoe";
import { shoeArr } from "./data";

export default class Ex_Shoe extends Component {
  state = {
    shoeArr: shoeArr,
    detail: shoeArr[0],
    cart: shoeArr,
  };
  handleViewDetail = (shoe) => {
    this.setState({
      detail: shoe,
    });
  };
  handleRemove = (idShoe) => {
    let newCart = this.state.cart.filter((item) => {
      return item.id !== idShoe;
    });
    this.setState({ cart: newCart });
  };
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-6">
            <CartShoe handleRemove={this.handleRemove} cart={this.state.cart} />
          </div>
          <div className="col-6">
            <ListShoe
              handleViewDetail={this.handleViewDetail}
              list={this.state.shoeArr}
            />
          </div>
          <div className="col-12">
            <DetailShoe detail={this.state.detail} />
          </div>
        </div>
      </div>
    );
  }
}
