import AppLayout from "../Layout";
import SignIn from "../SignIn";
import { Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "../Common/ProtectedRoute";
export default function App() {
  return (
    <Switch>
      <Route path="/login" exact>
        <SignIn />
      </Route>
      <ProtectedRoute path="/" component={AppLayout} />
    </Switch>
  );
}
