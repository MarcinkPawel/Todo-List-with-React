import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { NewTaskSection, EnterTask, SubmitTask } from "./styled";
import { addTask } from "../tasksSlice";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!newTaskContent.trim().length > 0) {
      return null;
    }
    dispatch(
      addTask({
        content: newTaskContent.trim(),
        done: false,
        id: nanoid(),
      })
    );

    setNewTaskContent("");
  };

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
      <SubmitTask onClick={focusInput}>Add Task</SubmitTask>
    </NewTaskSection>
  );
};

export default Form;
