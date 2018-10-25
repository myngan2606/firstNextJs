import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { withRouter } from "next/router";
class Breadscrum extends Component {
  renderHomeSubmenu = () => {
    const { asPath } = this.props.router;
    switch (asPath) {
      case "/home/menu-1":
        return (
          <React.Fragment>
            <BreadcrumbItem className="breadcrumb_item">Home</BreadcrumbItem>
            <BreadcrumbItem className="breadcrumb_item" active>
              Menu 01
            </BreadcrumbItem>
          </React.Fragment>
        );
      case "/home/menu-2":
        return (
          <React.Fragment>
            <BreadcrumbItem className="breadcrumb_item">Home</BreadcrumbItem>
            <BreadcrumbItem className="breadcrumb_item" active>
              Menu 02
            </BreadcrumbItem>
          </React.Fragment>
        );
      case "/home/menu-3":
        return (
          <React.Fragment>
            <BreadcrumbItem className="breadcrumb_item">Home</BreadcrumbItem>
            <BreadcrumbItem className="breadcrumb_item" active>
              Menu 03
            </BreadcrumbItem>
          </React.Fragment>
        );

      default:
        return (
          <BreadcrumbItem className="breadcrumb_item">Home</BreadcrumbItem>
        );
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
      default:
        return this.renderHomeSubmenu();
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
