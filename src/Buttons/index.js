import "./style.css";

const Buttons = ({ tasks, hideDoneTask, toggleHideDoneTask }) => {
  if (tasks.length === 0) {
    return null;
  }

  return (
    <div className="button__toggle ">
      <button onClick={toggleHideDoneTask} className="button">
        {hideDoneTask ? "Show" : "Hide"}
        done
      </button>
      <button className="button" disabled={tasks.every(({ done }) => done)}>
        Complete all
      </button>
    </div>
  );
};

export default Buttons;
