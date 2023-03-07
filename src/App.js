import { HashRouter, Link, Switch, Route } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/Author";

export default () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li>
          <Link to="/author">About</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route patch="/tasks">
        <Tasks />
      </Route>
      <Route patch="/author">
        <Author />
      </Route>
    </Switch>
  </HashRouter>
);
