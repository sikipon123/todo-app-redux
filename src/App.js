import React from "react";
import "./App.css";
import Todoadd from "./component/Todoadd";
import Todolist from "./component/Todolist";

function App() {
  return (
    <div className="App">
      <h1 className="header">Daily Todo Lists</h1>
      <Todoadd />
      <Todolist/>
    </div>
  );
}

export default App;
