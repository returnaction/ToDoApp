import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import ToDoList from "./Components/TodoList/TodoList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ToDoList />
    </div>
  );
}

export default App;
