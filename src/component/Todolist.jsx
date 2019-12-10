import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo"

function Todolist(props) {
  console.log("ToDolist", props.toDos);
  return (
    <div>
      {props.toDos.map(el => (
        <Todo activ={el} />
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    toDos: state
  };
};
export default connect(mapStateToProps)(Todolist);
