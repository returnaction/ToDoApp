import ToDoObject from "../ToDoObject/ToDoObject";
const ToDoList = ({ todos, onCreate, onUpdate, onDelete }) => {
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
