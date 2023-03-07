import { Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAreTasksEmpty,
  selectHideDone,
  selectIsEveryTaskDone,
  toggleHideDone,
  setAllDone,
  fetchExampleTasks,
} from "../tasksSlice";

const Buttons = () => {
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);

  const dispatch = useDispatch();

  return (
    <div>
      <Button onClick={() => dispatch(fetchExampleTasks())}>Download previous tasks</Button>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Show " : "Hide "}
            done
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
          >
            Complete all
          </Button>
        </>
      )}
    </div>
  );
};

export default Buttons;
