import Button from "../../Button";
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../../tasksSlice";


export default () => {

    const dispatch = useDispatch();

    return (
        <Button onClick={() => dispatch(fetchExampleTasks())}>Download previous tasks</Button>
    )
}