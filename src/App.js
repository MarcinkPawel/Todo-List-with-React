import "./App.css";
import { useEffect } from "react";
import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import { toLocalStorage } from "./Utils/LocalStorage";
import { useTasks } from "./Utils/useTasks";


function App() {

  const {
      hideDoneTask,
      tasks,
      toggleHideDoneTask,
      removeTask, 
      toggleTaskDone, 
      setAllDone, 
      addNewTask,
  } = useTasks();
  
  useEffect(() => {
    toLocalStorage(tasks);
  }, [tasks]);

 
  return (
    <div className="main">
      <header>
        <h1>Tasks List</h1>
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
        changeGrid
      />
    </div>
  );
}

export default App;
