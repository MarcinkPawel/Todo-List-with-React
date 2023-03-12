import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import Author from "./features/Author";
import Nav from "./common/Nav";

export default () => (
  <HashRouter>
    <Nav />
    <Switch>
      <Route path="/tasks/:id">
        <TaskPage />
      </Route>
      <Route path="/tasks">
        <TasksPage />
      </Route>
      <Route path="/author">
        <Author />
      </Route>
      <Route path="/">
        <Redirect to="/tasks" />
      </Route>
    </Switch>
  </HashRouter>
);
