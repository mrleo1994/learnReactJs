import React, { Component } from "react";
import { connect } from "react-redux";
import { shoeArr } from "./data";

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
            // this.props.handleClickAdd(data);
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
// let mapStateToProps = (state) => {
//   return {
//     cart: state.shoeReducer.cart,
//     //root => initialState
//   };
// };
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
    // handleClickAdd: (shoe) => {
    //   const newCart = this.props.cart;
    //   const index = newCart.findIndex((value) => value.id === shoe.id);
    //   if (index !== -1) {
    //     newCart[index].cartQuantity += 1;
    //   } else {
    //     newCart.push({ ...shoe, cartQuantity: 1 });
    //   }
    //   let action = {
    //     type: "ADD_SHOE",
    //     payload: newCart,
    //   };
    //   dispatch(action);
    // },
  };
};

export default connect(null, mapDispathToProps)(ItemShoe);
