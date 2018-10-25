import React, { Component } from "react";
import Link from "next/link";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./../static/scss/navbar.scss";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false
    };
  }
  handleToggle = () => {
    this.setState(prevState => ({
      status: !prevState.status
    }));
  };
  render() {
    return (
      <div className="navbar">
        <Dropdown
          className="navbar_menu"
          isOpen={this.state.status}
          onMouseEnter={this.handleToggle}
          onMouseLeave={this.handleToggle}
          toggle={this.handleToggle}
        >
          <Link href="/">
            <DropdownToggle className="navbar_item" caret>
              Home
            </DropdownToggle>
          </Link>
          <DropdownMenu>
            <Link href="/home/about">
              <DropdownItem>About</DropdownItem>
            </Link>
            <Link href="/home/product">
              <DropdownItem>Product</DropdownItem>
            </Link>
            <Link href="/home/contact">
              <DropdownItem>Contact</DropdownItem>
            </Link>
          </DropdownMenu>
        </Dropdown>

        <Link href="/todo">
          <a className="navbar_item">Todo</a>
        </Link>
        <Link href="/select">
          <a className="navbar_item">Select </a>
        </Link>
      </div>
    );
  }
}

export default Nav;
