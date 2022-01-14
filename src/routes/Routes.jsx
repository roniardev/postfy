import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, PostDetail, UserDetail, Users, PhotoDetail } from "pages";
import { LayoutRoot } from "components/layout";

export default function Routes() {
  return (
    <Router>
      <LayoutRoot>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/post/:id" component={PostDetail} />
          <Route path="/user/:userId" component={UserDetail} />
          <Route path="/photo/:photoId" component={PhotoDetail} />
        </Switch>
      </LayoutRoot>
    </Router>
  );
}
