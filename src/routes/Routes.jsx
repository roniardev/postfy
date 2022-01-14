import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, PostDetail } from "pages";
import { LayoutRoot } from "components/layout";

export default function Routes() {
  return (
    <Router>
      <LayoutRoot>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/post/:id" component={PostDetail} />
        </Switch>
      </LayoutRoot>
    </Router>
  );
}
