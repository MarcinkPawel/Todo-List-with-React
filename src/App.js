import "./App.css";
import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";

function App() {
  const [hideDoneTask, setHideDoneTask] = useState(false);
  const [tasks, setTasks] = useState(() => {
    const localData = localStorage.getItem("tasks");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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

  return (
    <div className="main">
      <Header title="Tasks List" />
      <header>
        <h1 className="main__heading">Tasks List</h1>
      </header>
      <Section
        sectionHeading="Add new task"
        headerContent={<Form addNewTask={addNewTask} />}
      />

      <Section
        sectionHeading="Tasks List"
        headerContent={
          <Buttons
            tasks={tasks}
            hideDoneTask={hideDoneTask}
            toggleHideDoneTask={toggleHideDoneTask}
            setAllDone={setAllDone}
          />
        }
        list={
          <List
            tasks={tasks}
            hideDoneTask={hideDoneTask}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        changeGrid="section__header--grid"
      />
    </div>
  );
}

export default App;
