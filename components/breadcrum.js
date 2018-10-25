import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { withRouter } from "next/router";
import Link from "next/link";

class Breadscrum extends Component {
  renderHomeSubmenu = () => {
    const { pathname } = this.props.router;
    switch (pathname) {
      case "/about":
        return (
          <BreadcrumbItem className="breadcrumb_item" active>
            About
          </BreadcrumbItem>
        );

      case "/product":
        return (
          <BreadcrumbItem className="breadcrumb_item" active>
            Product
          </BreadcrumbItem>
        );
      case "/contact":
        return (
          <BreadcrumbItem className="breadcrumb_item" active>
            Contact
          </BreadcrumbItem>
        );

      default:
        return;
    }
  };
  renderBreadcrumbItem = () => {
    const { asPath } = this.props.router;
    switch (asPath) {
      case "/todo":
        return (
          <BreadcrumbItem className="breadcrumb_item" active>
            Todo
          </BreadcrumbItem>
        );
      case "/select":
        return (
          <BreadcrumbItem className="breadcrumb_item" active>
            Select
          </BreadcrumbItem>
        );
      case "/home/:page":
        return (
          <React.Fragment>
            <BreadcrumbItem className="breadcrumb_item">
              <Link href="/">Home</Link>
            </BreadcrumbItem>
            {this.renderHomeSubmenu()}
          </React.Fragment>
        );
      default:
        // return this.renderHomeSubmenu();
        return;
    }
  };
  render() {
    const { asPath } = this.props.router;
    return (
      <div className="breadcrumb">
        <Breadcrumb className="breadcrum_nav">
          {asPath && this.renderBreadcrumbItem()}
        </Breadcrumb>
        <style jsx>
          {`
            .breadcrumb {
              margin-bottom: 0 !important;
              padding: 0;
              border: none;
              border-radius: 0;
            }
            .breadcrum_nav .breadcrumb {
              border: 1px solid red;
            }
            .breadcrum_nav {
              background-color: red;
            }
            ol.breadcrumb {
              margin-inline-end: 0 !important;
              margin-bottom: 0 !important;
              background-color: red !important;
            }
            .breadcrumb_item {
              background-color: yellow !important;
            }
            .breadcrumb_item:hover {
              background-color: yellow;
            }
          `}
        </style>
      </div>
    );
  }
}

export default withRouter(Breadscrum);
