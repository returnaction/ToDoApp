import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

import axios from "axios";
import React, { useState, useEffect } from "react";
import TodoList from "./Components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      let response = await axios.get(`https://localhost:7088/api/todo`);
      setTodos(response.data);
    } catch (error) {
      console.warn("Error in fetchTodos, App.jsx", error);
    }
  };

  const handleCreate = async (item) => {
    try {
      let response = await axios.post(`https://localhost:7088/api/todo`, item);
    } catch (error) {
      console.warn("Error in posting new todo in App.js", error);
    }
  };

  const handleUpdate = async (item) => {
    try {
      const response = await axios.put(
        `https://localhost:7088/api/todo/${item.id}`,
        item
      );
    } catch (error) {
      console.warn("Error in updating todo in App.js", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://localhost:7088/api/todo/${id}`
      );
    } catch (error) {
      console.warn("Error in handleDelete in App.js", error);
    }
  };

  return (
    <div className="App">
      <NavBar />
      <TodoList
        data={todos}
        onCreate={handleCreate}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
      <Footer />
    </div>
  );
}

export default App;
