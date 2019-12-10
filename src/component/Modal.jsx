import React from "react";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { editTask } from "../Redx/Actions";

// const mapActionsToProps = {
//   editTask: editTask
// };

class connectedModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modifiedText: ""
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleChange = e => {
    this.setState({
      modifiedText: e.target.value
    });
  };

  //   onSubmit = e => {
  // e.preventDefault();
  // this.toggle();
  // this.props.editTask({
  //   id: this.props.id,
  //   newTask: this.state.modifiedText
  // });
  //   }

  render() {
    return (
      <div>
        <Button onClick={this.toggle} className=" edit-btn btn btn-success">
          Edit
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Edit To Do</ModalHeader>
          <input
            placeholder={this.props.desc}
            defaultValue={this.props.toEdit}
            onChange={this.handleChange}
          />
          <ModalFooter className="btneditx">
            <Button
              className="btn btn-warning"
              // onSubmit={this.onSubmit}
              onClick={e => {
                e.preventDefault();
                this.toggle();
                this.props.editTask(
                  this.props.id,
                  this.state.modifiedText
                );
              }}
            >
              Save Changes
            </Button>
            <Button className="btn btn-danger" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

// const TaskModal = connect(null, mapActionsToProps)(connectedModal);

export default connect(null, { editTask })(connectedModal);
