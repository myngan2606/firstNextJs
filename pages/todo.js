import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "./../action";
import TodoItem from "./../components/TodoItem";

class Todo extends Component {
  handleAddTodo = () => {
    let value = this.refs.todo.value;
    this.props.addTodo(value);
  };
  render() {
    console.log("====", this.props.todolist);
    return (
      <div className="todo-container">
        <h1 className="title">My To do list</h1>
        <div className="todo-input">
          <input
            type="text"
            placeholder="Title"
            ref="todo"
            onChange={this.test}
          />
          <button onClick={this.handleAddTodo}>Add</button>
        </div>
        <div className="todo-list">
          {this.props.todolist.map((item, index) => {
            return (
              <TodoItem key={index} index={index}>
                {item}
              </TodoItem>
            );
          })}
        </div>
        <style jsx>
          {`
            .todo-container {
              background-color: #ffab40;
              width: 100%;
              height: 100vh;
              text-align: center;
              padding: 8px 0;
            }
            .title {
              color: black;
            }
            .todo-input {
              display: flex;
              align-item: center;
              justify-content: center;
              margin-top: 20px;
            }
            input {
              outline: none;
              height: 30px;
              box-sizing: border-box;
              width: 300px;
              border: none;
              font-size: 14px;
              padding-left: 20px;
            }
            input::placeholder {
              font-style: oblique;
            }
            button {
              outline: none;
              height: 30px;
              box-sizing: border-box;
              border: none;
              background-color: #f1f1f1;
              width: 50px;
              font-size: 14px;
            }
            .todo-list {
              margin-top: 30px;
            }
          `}
        </style>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todolist: state
  };
};
const mapDispatchToProps = (dispach, ownProps) => {
  return {
    addTodo: item => {
      dispach(addTodo(item));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
