import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { toAuthor, toTask, toTasks } from "./routes";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import Author from "./features/Author";
import Nav from "./common/Nav";

export default () => (
  <HashRouter>
    <Nav />
    <Switch>
      <Route path={toTask()}>
        <TaskPage />
      </Route>
      <Route path={toTasks()}>
        <TasksPage />
      </Route>
      <Route path={toAuthor()}>
        <Author />
      </Route>
      <Route>
        <Redirect to={toTasks()} />
      </Route>
    </Switch>
  </HashRouter>
);
