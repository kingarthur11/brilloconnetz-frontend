import { Link } from "react-router-dom";
import './navbar.css';

function Navbar() {
  return (
    <div class="container-fluid">
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/profile">Profile</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/login">Login</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/signup">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
