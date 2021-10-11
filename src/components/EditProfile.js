import React, { useState } from "react";
import "../css/App.css";

function EditProfile() {
  const handleSubmit = (event) => {
    event.preventDefault();
    var data = {
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

  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  return (
    <div>
      <div className="container-fluid ps-md-0">
        <div className="row g-0">
          <div className="container">
            <div className="row">
              <div className="col-md-9 d-flex justify-content-center align-items-center col-lg-8 mx-auto">
                <div>
                  <h3 className="login-heading mb-4">Brillo Connectz</h3>

                  <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-4">
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                    <div className="form-floating mb-4">
                      <input
                        type="password"
                        name="confirm_password"
                        className="form-control"
                        id="confirm_password"
                        placeholder="Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <label htmlFor="confirm_password">Confirm Password</label>
                    </div>
                    <div className="form-check mb-4">
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

                    <div className="d-grid">
                      <button
                        className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                        type="submit"
                      >
                        Reset Password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
