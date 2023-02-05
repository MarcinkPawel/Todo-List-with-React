import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

 const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim().length > 0) {
      addNewTask(newTaskContent.trim());
      setNewTaskContent("");
    }
    return null;
    };

  return (
    <form onSubmit={onFormSubmit} className="form__addingTask ">
      <input
        value={newTaskContent}
        className="form__enterTask "
        placeholder="Enter your task"
        onChange={(event) => setNewTaskContent(event.target.value)}
      />
      <button className="form__submit">Add Task</button>
    </form>
  );
};

export default Form;
