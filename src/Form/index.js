import "./style.css";

const Form = () => (
    <form className="form__addingTask ">
        <input className="form__enterTask " placeholder="Enter your task" />
        <button className="form__submit">Add Task</button>
    </form>
)

export default Form;