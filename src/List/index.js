import "./style.css";

const List = ({ tasks, hideDoneTask, removeTask, toggleTaskDone }) => (
  <ul className="list">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`list__item ${
          task.done && hideDoneTask ? "list__item--hidden" : ""
        } `}
      >
        <button
          onClick={() => toggleTaskDone(task.id)}
          className="list__button list__button--done"
        >
          {task.done ? "✓" : ""}{" "}
        </button>
        <span className={`${task.done ? "list__taskDone" : ""}`}>
          {task.content}
        </span>
        <button
          className="list__button list__button--delete"
          onClick={() => removeTask(task.id)}
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default List;
