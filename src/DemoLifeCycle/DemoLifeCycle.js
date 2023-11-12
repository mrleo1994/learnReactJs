import axios from "axios";
import React, { Component } from "react";

export default class DemoLifeCycle extends Component {
  componentDidMount() {
    // goi API
    axios({
      url: "https://tiki.vn/api/v2/products/widget/delivery_info/9856925?platform=web&pdp=v2",
      method: "GET",
    })
      .then((res) => {
        console.log("🚘 ~ DemoLifeCycle ~ .then ~ res:", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return <div>DemoLifeCycle</div>;
  }
}
// npm i axios
/**
 * Mounting: 1 lan (sinh ra)
 *
 * Updating: nhieu lan (cap nhat)
 *
 * unmount: 1 lan (bien mat khoi layout)
 */
