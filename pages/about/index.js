import React, { Component } from "react";
import { withRouter } from "next/router";
import { Link } from "../../routes";

class About extends Component {
  render() {
    console.log("---about page props: ", this.props);
    return (
      <div className="text-center">
        <h1>About</h1>
        <Link route="/">
          <h2 className="link-to-homepage">Homepage</h2>
        </Link>
        <Link route="/home/product">
          <h3 className="link-to-product">Product Page</h3>
        </Link>
        
        <style>
          {`
          .link-to-homepage, .link-to-product {
                        color: white;
                        text-decoration: underline;
                        background-color: #4f9a94;
                        padding: 10px;
                        cursor: pointer;
                    }
                `}
        </style>
      </div>
    );
  }
}

export default withRouter(About);
