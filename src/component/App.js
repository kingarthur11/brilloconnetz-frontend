// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './navbar';
import Register from './register';
import Login from './login';
import ForgotPassword from './forgotpassword';
import Profile from './profile';
import EditProfile from "./editProfile";

function App() {
  return (
    
      <Router>
        <div>
          {/* <Navbar /> */}
          <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/editprofile" component={EditProfile} />
            <Route path="/signup" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/resetpassword" component={ForgotPassword} />
          </Switch>
        </div>
        
      </Router>
    
  );
}

export default App;
