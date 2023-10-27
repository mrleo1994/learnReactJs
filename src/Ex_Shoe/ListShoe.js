import React, { Component } from "react";
import ItemShoe from "./ItemShoe";

export default class ListShoe extends Component {
  render() {
    return (
      <div className="row">
        {this.props.list.map((item, index) => {
          return (
            <ItemShoe
              handleViewDetail={this.props.handleViewDetail}
              key={index}
              data={item}
            />
          );
        })}
      </div>
    );
  }
}
