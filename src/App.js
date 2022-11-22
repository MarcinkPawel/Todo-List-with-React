import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";

const tasks = [
  { id: 1, content: "lose weight", done: false },
  { id: 2, content: "study React at least an hour a day", done: true },
];

const hideDoneTask = false;

function App() {
  return (
    <div className="main">
      <header>
        <h1 className="main__heading">Tasks List</h1>
      </header>
      <Section sectionHeading="Add new task" headerContent={ <Form />} 
      />
      
      <Section 
      sectionHeading="Tasks List" 
      headerContent={<Buttons tasks={tasks} hideDoneTask={hideDoneTask} /> }
      list= {<List tasks={tasks} hideDoneTask={hideDoneTask} />} 
      changeGrid="section__header--grid"
      />
      
    </div>

  );
}

export default App;
