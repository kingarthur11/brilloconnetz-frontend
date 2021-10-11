import React, { useState } from "react";
import "../css/App.css";

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    var data = {
      email: email,
      password: password,
    };
    fetch("https://www.mecallapi.com/api/users/create", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result["message"]);
        if (result["status"] === "ok") {
          window.location.href = "/";
        }
      });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="container-fluid ps-md-0">
        <div className="row g-0">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4">Brillo Connectz</h3>

                    <form onSubmit={handleSubmit}>
                      <div className="form-floating mb-4">
                        <input
                          autoComplete="none"
                          name="email"
                          type="email"
                          className="form-control"
                          onChange={(e) => setEmail(e.target.value)}
                          id="email"
                          placeholder="name@example.com"
                        />
                        <label htmlFor="email">Email address</label>
                      </div>
                      <div className="form-floating mb-4">
                        <input
                          name="password"
                          type="password"
                          className="form-control"
                          onChange={(e) => setPassword(e.target.value)}
                          id="password"
                          placeholder=" "
                        />
                        <label htmlFor="password">Password</label>
                      </div>

                      <div className="d-flex justify-content-between mb-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="rememberPasswordCheck"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="rememberPasswordCheck"
                          >
                            Remember password
                          </label>
                        </div>
                        <div className="">
                          <a
                            className="small text-decoration-none"
                            href="/reset-password"
                          >
                            Forgot password?
                          </a>
                        </div>
                      </div>

                      <div className="d-grid">
                        <button
                          className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-4"
                          type="submit"
                        >
                          Log in
                        </button>
                        <div className="text-center">
                          <a
                            className="small text-decoration-none"
                            href="/sign-up"
                          >
                            Don't have an account? Sign up
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
