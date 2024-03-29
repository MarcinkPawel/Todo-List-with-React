import "../../../tasks.css";
import Section from "../../../common/Section";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));

  return (
    <div className="main">
      <header>
        <h1>Task's details</h1>
      </header>
      <Section
        sectionHeading={task ? task.content : "Task not found!"}
        taskStatus={
          !!task && (
            <>
              <strong>Task's status: </strong>
              {task ? (task.done ? "Done" : "Not done") : "N/A"}{" "}
            </>
          )
        }
        changeFlex
      />
    </div>
  );
}

export default TaskPage;
