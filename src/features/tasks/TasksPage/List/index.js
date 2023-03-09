import {
  TaskList,
  Item,
  TaskDone,
  ToggleDoneButton,
  RemoveButton,
} from "./styled";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  selectHideDone,
  toggleTaskDone,
  removeTask,
  selectTasksByQuery,
} from "../../tasksSlice";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const List = () => {
  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("search");

  const tasks = useSelector(state => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();
  return (
    <TaskList>
      {tasks.map(task => (
        <Item 
          key={task.id} 
          hidden={task.done && hideDone}>
          <ToggleDoneButton 
            onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✓" : ""}{" "}
          </ToggleDoneButton>
          <TaskDone 
            done={task.done}>
            <Link to={`/tasks/${task.id}`}>{task.content}</Link>
          </TaskDone>
          <RemoveButton 
            onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </RemoveButton>
        </Item>
      ))}
    </TaskList>
  );
};

export default List;
