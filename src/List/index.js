import { TaskList, Item, TaskDone, ToggleDoneButton, RemoveButton } from "./styled";

const List = ({ tasks, hideDoneTask, removeTask, toggleTaskDone }) => (
  <TaskList>
    {tasks.map((task) => (
      <Item 
        key={task.id} 
        hidden={task.done && hideDoneTask}>
          <ToggleDoneButton
            onClick={() => toggleTaskDone(task.id)}>
            {task.done ? "✓" : ""}{" "}
          </ToggleDoneButton>
          <TaskDone 
            done={task.done}>
            {task.content}
          </TaskDone>
          <RemoveButton
            onClick={() => removeTask(task.id)}>
            🗑
          </RemoveButton>
      </Item>
    ))}
  </TaskList>
);

export default List;
