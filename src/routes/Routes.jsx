import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "pages";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}
