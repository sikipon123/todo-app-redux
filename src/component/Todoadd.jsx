import React from "react";
import { addTask } from "../Redx/Actions";
import { connect } from "react-redux";

// const mapDispatchToProps = dispatch => ({
//   addTask: newInput => dispatch(addTask(newInput))
// });
const mapDispatchToProps = {
  addTask
};

class Todoadd extends React.Component {
  state = {
    grabbedValue: ""
  };

  add = e => {
    e.preventDefault();

    this.props.addTask({
      id: Date.now(),
      desc: this.state.grabbedValue,
      checked: false,
      edit: false
    });

    this.setState({
      grabbedValue: ""
    });
  };

  render() {
    return (
      <div className="input-group input-group-lg">
        <form
          onSubmit={this.state.grabbedValue ? this.add : null}
          className="inputtasktype"
        >
          <input
            type="text"
            className="form"
            aria-label="Large"
            placeholder="Enter a Task"
            aria-describedby="inputGroup-sizing-sm"
            onChange={e => this.setState({ grabbedValue: e.target.value })}
            value={this.state.grabbedValue}
          />
          <div className="input-group-prepend">
            <button
              type="submit"
              className="input-group-text"
              className="btn-add"
              id="inputGroup-sizing-lg"
            >
              ADD
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default connect(null, mapDispatchToProps)(Todoadd);
