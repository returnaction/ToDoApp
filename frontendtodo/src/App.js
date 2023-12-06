import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import ToDoList from "./Components/TodoList/TodoList";
import axios from "axios";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, [todos]);

  // get Todos[]
  const fetchTodos = async () => {
    try {
      let response = await axios.get(`https://localhost:7088/api/todo`);
      setTodos(response.data);
    } catch (error) {
      console.warn("Error in fetchTodos, App.js", error);
    }
  };

  // update Todo
  const handleUpdate = async (data) => {
    try {
      const response = await axios.post(
        `https://localhost:7088/api/todo/${data.id}`,
        data
      );
    } catch (error) {
      console.warn("Error in handleUpdate, App.js", error);
    }
  };

  // create Todo
  const handleCreate = async (data) => {
    try {
      const response = await axios.post(
        `https://localhost:7088/api/todo`,
        data
      );
    } catch (error) {
      console.warn("Error occurred in handleCreate, in App.js", error);
    }
  };

  // delete Todo
  const handleDelete = async (data) => {
    try {
      const response = await axios.delete(
        `https://localhost:7088/api/todo/${data.id}`
      );
    } catch (error) {
      console.warn("Error in  handleDelete, App.js", error);
    }
  };

  return (
    <div className="App">
      <ToDoList
        todos={todos}
        onCreate={handleCreate}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
