import React, { Component } from "react";
import { connect } from "react-redux";

class KetQua extends Component {
  render() {
    return (
      <div className="display-4 text-center">
        <p>{this.props.luaChon}</p>
        <p>{this.props.ketQua}</p>
        <p>So luot choi: {this.props.soLuotChoi}</p>
        <p>So luot thang: {this.props.soLuotThang}</p>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    ketQua: state.ketQua,
    luaChon: state.luaChon,
    soLuotChoi: state.soLuotChoi,
    soLuotThang: state.soLuotThang,
  };
};
export default connect(mapStateToProps)(KetQua);
