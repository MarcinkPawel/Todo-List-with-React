import { HashRouter, NavLink, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import Author from "./features/Author";

export default () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/tasks">
            Tasks
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/author">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
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
