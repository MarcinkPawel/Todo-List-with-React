import { TaskList, Item, TaskDone, Button } from "./styled";

const List = ({ tasks, hideDoneTask, removeTask, toggleTaskDone }) => (
  <TaskList>
    {tasks.map((task) => (
      <Item 
      key={task.id} 
      hidden={task.done && hideDoneTask}>
        <Button 
        toggleDone
        onClick={() => toggleTaskDone(task.id)}>
          {task.done ? "✓" : ""}{" "}
        </Button>
        <TaskDone 
        done={task.done}>
        {task.content}
        </TaskDone>
        <Button 
        remove 
        onClick={() => removeTask(task.id)}>
          🗑
        </Button>
      </Item>
    ))}
  </TaskList>
);

export default List;
