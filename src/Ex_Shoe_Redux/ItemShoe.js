import React, { Component } from "react";
import { connect } from "react-redux";

class ItemShoe extends Component {
  render() {
    let { data, handleClickView, handleCart } = this.props;
    return (
      <div className="col-3 card">
        <img className="w-100" src={data.image} alt="" />
        <button
          className="btn btn-primary"
          onClick={() => {
            handleCart(data);
          }}
        >
          Add
        </button>
        <button
          className="btn btn-info"
          onClick={() => {
            handleClickView(data);
          }}
        >
          View
        </button>
      </div>
    );
  }
}
// đẩy data len redux để update store
let mapDispathToProps = (dispatch) => {
  return {
    handleClickView: (shoe) => {
      let action = {
        type: "VIEW_DETAIL",
        payload: shoe,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispathToProps)(ItemShoe);
