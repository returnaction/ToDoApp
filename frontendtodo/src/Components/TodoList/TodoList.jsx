import ToDoObject from "../ToDoObject/ToDoObject";
import React, { useState } from "react";

const ToDoList = ({ todos, onCreate, onUpdate, onDelete }) => {
  // here's a list of objects....
  //console.log(todos);

  // // object to make request
  // const [formData, setFormData] = useState({
  //   id: "",
  //   name: "",
  //   isCompleted: "false",
  //   createdAt: "",
  //   completedAt: "",
  // });

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   onUpdate(formData);
  // };

  return (
    <div>
      <ToDoObject />
      <ToDoObject />
      <ToDoObject />
      <ToDoObject />
    </div>
  );
};

export default ToDoList;
