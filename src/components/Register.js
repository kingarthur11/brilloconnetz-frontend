import React, { useState } from "react";
import "../css/App.css";

function Register() {
  const [full_name, setFullName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [type_of_sports, setTypeOfSports] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    var data = {
      full_name: full_name,
      phone_number: phone_number,
      type_of_sports: type_of_sports,
      email: email,
      password: password,
      confirm_password: confirm_password,
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
                      <div className="form-floating mb-3">
                        <input
                          autoComplete="none"
                          name="full_name"
                          type="text"
                          className="form-control"
                          id="full_name"
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g David Beckham"
                        />
                        <label htmlFor="full_name">Full Name</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          autoComplete="none"
                          name="phone_number"
                          type="text"
                          className="form-control"
                          id="phone_number"
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="e.g 222 334 123"
                        />
                        <label htmlFor="phone_number">Phone Number</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          autoComplete="none"
                          name="type_of_sports"
                          type="text"
                          className="form-control"
                          id="type_of_sports"
                          onChange={(e) => setTypeOfSports(e.target.value)}
                          placeholder="e.g Ice Hockey"
                        />
                        <label htmlFor="type_of_sports">Type of Sport</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          autoComplete="none"
                          name="email"
                          type="email"
                          className="form-control"
                          id="email"
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g name@example.com"
                        />
                        <label htmlFor="email">Email address</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          name="password"
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder=" "
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="password">Password</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          name="confirm_password"
                          className="form-control"
                          id="confirm_password"
                          placeholder=" "
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <label htmlFor="confirm_password">
                          Confirm Password
                        </label>
                      </div>

                      <div className="d-grid">
                        <button
                          className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2 my-4"
                          type="submit"
                        >
                          Sign up
                        </button>
                        <div className="text-center">
                          <a
                            className="small text-decoration-none"
                            href="/login"
                          >
                            Have an account? Sign in
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

export default Register;
