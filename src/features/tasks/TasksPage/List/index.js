import {
  TaskList,
  Item,
  TaskDone,
  ToggleDoneButton,
  RemoveButton,
  StyledLink
} from "./styled";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  selectHideDone,
  toggleTaskDone,
  removeTask,
  selectTasksByQuery,
} from "../../tasksSlice";
import { useLocation } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";

const List = () => {
  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get(searchQueryParamName);

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
            <StyledLink to={`/tasks/${task.id}`}>{task.content}</StyledLink>
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
