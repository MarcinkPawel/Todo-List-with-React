import "../../tasks.css";
import Form from "../tasks/Form";
import List from "../tasks/List";
import Buttons from "../tasks/Buttons";
import Section from "../../common/Section";

function Tasks() {

  return (
    <div className="main">
      <header>
        <h1>Tasks List</h1>
      </header>
      <Section
        sectionHeading="Add new task"
        headerContent={<Form />}
      />
      <Section
        sectionHeading="Tasks List"
        headerContent={
          <Buttons />
        }
        list={
          <List />
        }
        changeGrid
      />
    </div>
  );
}

export default Tasks;
