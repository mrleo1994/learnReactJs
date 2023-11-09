import React, { Component } from "react";
import XucXac from "./XucXac";
import KetQua from "./KetQua";
import gameBackGround from "./bgGame.png";
import "./style.css";

export default class Ex_Tai_xiu extends Component {
  render() {
    return (
      <div
        className="game-container"
        style={{ backgroundImage: `url(${gameBackGround})` }}
      >
        <XucXac />
        <KetQua />
      </div>
    );
  }
}
