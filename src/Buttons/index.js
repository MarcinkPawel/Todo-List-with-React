import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => {
    if (tasks.length === 0) {
        return null;
    }

    return (

        <div className="button__toggle ">
            <button className="button">
                {hideDoneTasks ? "Show" : "Hide"} done
            </button>
            <button className="button"
                disabled={tasks.every(({ done }) => done)}>
                Complete all
            </button>
        </div>

    )
};

export default Buttons;