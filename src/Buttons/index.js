import "./style.css";

const Buttons = ({ tasks, hideDoneTask, toggleHideDoneTask, setAllDone }) => {
  if (tasks.length === 0) {
    return null;
  }

  return (
    <div className="button__toggle ">
      <button onClick={toggleHideDoneTask} className="button">
        {hideDoneTask ? "Show " : "Hide "}
        done
      </button>
      <button 
      onClick={setAllDone}
      className="button" 
      disabled={tasks.every(({ done }) => done)}>
        Complete all
      </button>
    </div>
  );
};

export default Buttons;
