import React, { Component } from "react";
import { connect } from "react-redux";
import { removeTodo } from "./../action";

class Todo extends Component {
  removeTodo = index => {
    this.props.removeTodo(index);
  };
  render() {
    return (
      <div className="todo-item">
        {this.props.children}
        <span
          onClick={() => this.removeTodo(this.props.index)}
          className="glyphicon glyphicon-remove"
        />
        <style jsx>
          {`
            .todo-item {
              border-bottom: solid 1px white;
              padding: 20px;
              text-align: left;
              background-color: #ffdd71;
            }
            .todo-item:last-child {
              border: none;
            }
            .glyphicon {
              float: right;
            }
          `}
        </style>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeTodo: index => {
      dispatch(removeTodo(index));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Todo);
