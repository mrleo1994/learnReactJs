import React, { Component } from "react";
import { connect } from "react-redux";
import { CHOI_GAME, LUA_CHON, TAI, XIU } from "./redux/constant/xucXac";

class XucXac extends Component {
  renderXucXac = () => {
    return this.props.xucXacArr.map((item, index) => {
      return <img width={80} src={item.img} key={index} alt="" />;
    });
  };
  render() {
    return (
      <div className="container text-center">
        <div className="d-flex justify-content-between align-items-center pt-5">
          <button
            onClick={() => {
              this.props.handleLuaChon(TAI);
            }}
            className="btn btn-dark p-5"
          >
            Tai
          </button>
          {this.renderXucXac()}
          <button
            onClick={() => {
              this.props.handleLuaChon(XIU);
            }}
            className="btn btn-danger p-5"
          >
            Xiu
          </button>
        </div>
        <button onClick={this.props.handleChoiGame} className="btn btn-warning">
          Play Game
        </button>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    xucXacArr: state.xucXacArr,
  };
};
let mapDispathToProps = (dispatch) => {
  return {
    handleLuaChon: (value) => {
      let action = {
        type: LUA_CHON,
        payload: value,
      };
      dispatch(action);
    },
    handleChoiGame: () => {
      dispatch({
        type: CHOI_GAME,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispathToProps)(XucXac);
