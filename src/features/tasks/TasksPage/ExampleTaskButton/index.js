import Button from "../../Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectIsLoading } from "../../tasksSlice";

export default () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  return (
    <Button 
        onClick={() => dispatch(fetchExampleTasks())} 
        disabled={isLoading}>
            {isLoading ? "Loading ..." : "Download previous tasks"}
    </Button>
  );
};
