import { useState, useRef } from "react";
import {NewTaskSection, EnterTask, SubmitTask} from "./styled";

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

  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
    };


  return (
    <NewTaskSection onSubmit={onFormSubmit}>
      <EnterTask
        ref={inputRef}
        value={newTaskContent}
        placeholder="Enter your task"
        onChange={(event) => setNewTaskContent(event.target.value)}
      />
      <SubmitTask 
        onClick={focusInput}>
        Add Task
      </SubmitTask>
    </NewTaskSection>
  );
};

export default Form;
