import React, { Component } from "react";
import { connect } from "react-redux";
class DetailShoe extends Component {
  render() {
    return (
      <div className="text-center">
        <h2>{this.props.detail.name}</h2>
        <img src={this.props.detail.image} alt="" />
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    detail: state.shoeReducer.detail,
  };
};
export default connect(mapStateToProps)(DetailShoe);
