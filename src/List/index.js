import "./style.css";

const List = (props) => (
    <ul className="list">
        {props.tasks.map(task => (
            <li className={`list__item ${task.done && props.hideDoneTasks ? "list__item--hidden" : ""}`}>
            <button className="list__button list__button--done">
                 {task.done ? "✓" : ""} </button> 
                <span className={`${task.done ? "list__taskDone" : ""}`}>{task.content}</span> 
                <button className="list__button list__button--delete">🗑</button>
            </li>
        ))}
    </ul>
);

export default List;