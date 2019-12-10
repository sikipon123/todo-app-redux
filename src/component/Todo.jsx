import React, { Component } from "react";
import { connect } from "react-redux";
import { removeTask, completeTask, editTask, newtask } from "../Redx/Actions";
import TaskModal from "./Modal";

class Todo extends Component {
  render() {
    console.log(this.props);
    return (
      // <>
      //   <h1>{this.props.rasZebi.desc}</h1>
      // </>
      <div className="todosbloc">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
              id={this.props.activ.id}
              onClick={e => this.props.completed(e.target.id)}
            />
          </div>

          <span
            className={
              this.props.activ.checked ? "checked task-in" : "task-in"
            }
          >
            {this.props.activ.desc}
          </span>
        </div>
        <div className="btneditx">
          <TaskModal
            id={this.props.activ.id}
            desc={this.props.activ.desc}
          />
          <button
            className=" remove-btn btn btn-danger"
            id={this.props.activ.id}
            onClick={e => this.props.removetodo(e.target.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { item: state.item };
};

const mapDispatchToProps = {
  removetodo: removeTask,
  completed: completeTask,
  edittodo: editTask,
  modified: newtask
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
