import React, { Component } from "react";
import { withRouter } from "next/router";
class Product extends Component {
  render() {
    console.log("---- product props:", this.props);
    return (
      <div className="product">
        <h1 className="title">PRODUCT</h1>
        <h4>Hello! This is product page</h4>
        <p>{this.props.router.pathname}</p>
        <ul>
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
        </ul>
        <style jsx>
          {`
            .product {
              background-color: #a98274;
              color: #4b2c20;
              height: 100vh;
              text-align: center;
            }
            .title {
              margin: 0px;
              padding: 50px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default withRouter(Product);
