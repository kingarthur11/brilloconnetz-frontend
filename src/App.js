import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/edit-profile" component={EditProfile} />
        <Route path="/sign-up" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/reset-password" component={ForgotPassword} />
      </Switch>
    </Router>
  );
}

export default App;
