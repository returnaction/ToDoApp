import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

const TodoList = ({ data, onCreate, onUpdate, onDelete }) => {
  console.log(data);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    isCompleted: "",
    createdAt: "",
    completedAt: "",
  });

  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editingId) {
      onUpdate(formData);
      setEditingId(null);
    } else {
      onCreate(formData);
    }
    setFormData({
      id: "",
      name: "",
      isCompleted: "",
      createdAt: "",
      completedAt: "",
    });
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setFormData({
      id: item.id,
      name: item.name,
      createdAt: item.createdAt,
      completedAt: item.completedAt,
      isCompleted: item.isCompleted,
    });
  };
  return (
    <div>
      <h2>Add task</h2>
      <form onSubmit={handleSubmit}>
        <label label="Name">Name</label>
        <input type="text" name="Name" onChange={handleEdit} />
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Completed</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.isCompleted ? item.completedAt : "No"}</td>
              <td>{item.createdAt}</td>
              <td>
                <button onClick={() => onDelete(item.id)}>Delete</button>
              </td>
              <td>
                <button onClick={() => handleEdit(item)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
