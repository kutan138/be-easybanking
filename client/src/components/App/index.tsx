import AppLayout from "../Layout";
import SignIn from "../SignIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "../Common/ProtectedRoute";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          <SignIn />
        </Route>
        <ProtectedRoute path="/" component={AppLayout} />
      </Switch>
    </Router>
  );
}
