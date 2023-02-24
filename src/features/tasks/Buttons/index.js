import {Button} from "./styled";


const Buttons = ({ tasks, hideDoneTask, toggleHideDoneTask, setAllDone }) => {
  if (tasks.length === 0) {
    return null;
  }

  return (
    <div>
      <Button 
        onClick={toggleHideDoneTask}>
        {hideDoneTask ? "Show " : "Hide "}
        done
      </Button>
      <Button 
        onClick={setAllDone}
        disabled={tasks.every(({ done }) => done)}>
        Complete all
      </Button>
    </div>
  );
};

export default Buttons;
