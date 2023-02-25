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
  selectTasks,
  selectHideDone,
  toggleTaskDone,
  removeTask,
} from "../tasksSlice";

const List = () => {
  const tasks = useSelector(selectTasks);
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
            {task.content}
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
