import { useState } from "react";
import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";

const tasks = [
  { id: 1, content: "lose weight", done: false },
  { id: 2, content: "study React at least an hour a day", done: true },
];

function App() {
  const [hideDoneTask, setHideDoneTask] = useState(false);

  const toggleHideDoneTask = () => {
    setHideDoneTask((hideDoneTask) => !hideDoneTask);
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
          />
        }
        list={<List tasks={tasks} hideDoneTask={hideDoneTask} />}
        changeGrid="section__header--grid"
      />
    </div>
  );
}

export default App;
