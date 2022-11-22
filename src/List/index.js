import "./style.css";

const List = ({tasks, hideDoneTask}) => (
  <ul className="list">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`list__item ${
          task.done && hideDoneTask ? "list__item--hidden" : ""
        } `}
      >
        <button className="list__button list__button--done">
          {task.done ? "✓" : ""}{" "}
        </button>
        <span className={`${task.done ? "list__taskDone" : ""}`}>
          {task.content}
        </span>
        <button className="list__button list__button--delete">🗑</button>
      </li>
    ))}
    
  </ul>
);

export default List;
