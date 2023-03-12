import "../../../tasks.css";
import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Search from "./Search";
import ExampleTaskButton from "./ExampleTaskButton";

function TasksPage() {
  return (
    <div className="main">
      <header>
        <h1>Tasks List</h1>
      </header>
      <Section 
        sectionHeading="Add new task" 
        additionalHeadingContent={<ExampleTaskButton />}
        headerContent={<Form />} 
      />
      <Section 
        sectionHeading="Find task" 
        headerContent={<Search />}
        changeFlex 
      />
      <Section
        sectionHeading="Tasks List"
        headerContent={<Buttons />}
        list={<List />}
        changeGrid
      />
    </div>
  );
}

export default TasksPage;
