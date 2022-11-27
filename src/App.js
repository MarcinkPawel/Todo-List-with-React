import { useState } from "react";
import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";

function App() {
  const [hideDoneTask, setHideDoneTask] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "lose weight", done: false },
    { id: 2, content: "study React at least an hour a day", done: true },
  ]);

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
    setTasks((tasjs) => tasks.map((task) => ({
        ...task,
        done: true,
      }))
    );
  };

  return (
    <div className="main">
      <Header title="Tasks List" />
      <header>
        <h1 className="main__heading">Tasks List</h1>
      </header>
      <Section sectionHeading="Add new task" headerContent={<Form />} />

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
