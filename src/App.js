import Form from "./Form";

function App() {
  return (
    <div className="main">
      <header>
        <h1 className="main__heading">Tasks List</h1>
      </header>

      <section className="section">
        <h2 className="section__heading">Add new task</h2>
        <Form />
      </section>
      <section className="section">
        <div className="section__header">
          <h2 className="section__heading ">Tasks List</h2>
          <div className="section__toggle "></div>
        </div>
        <div className="section__list">
          <ul className="list ">
          </ul>
        </div>
      </section>
    </div>

  );
}

export default App;
