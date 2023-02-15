import { useState } from "react";
import { fromLocalStorage } from "./LocalStorage";

export const useTasks = () => {
    const [hideDoneTask, setHideDoneTask] = useState(false);
    const [tasks, setTasks] = useState(() => {
        return fromLocalStorage();
      });
    const toggleHideDoneTask = () => {
        setHideDoneTask((hideDoneTask) => !hideDoneTask);
      };
    
    const removeTask = (id) => {
        setTasks((tasks) => tasks.filter((task) => task.id !== id));
      };
    
    const toggleTaskDone = (id) => {
        setTasks((tasks) =>
          tasks.map((task) => {
            if (task.id === id) {
              return { ...task, done: !task.done };
            }
    
            return task;
          })
        );
      };
    
    const setAllDone = () => {
        setTasks((tasks) =>
          tasks.map((task) => ({
            ...task,
            done: true,
          }))
        );
      };
    
    const addNewTask = (content) => {
        setTasks((tasks) => [
          ...tasks,
          {
            content,
            done: false,
            id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
          },
        ]);
      };
    
    return {  
      hideDoneTask,
      tasks,
      toggleHideDoneTask,
      removeTask, 
      toggleTaskDone, 
      setAllDone, 
      addNewTask,
    };
    };