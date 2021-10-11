import React, { useState } from 'react';
import './App.css';

function ForgotPassword() {

    const handleSubmit = event => {
        event.preventDefault();
        var data = {
            'password': password,
            'confirm_password': confirm_password,
          }
        fetch('https://www.mecallapi.com/api/users/create', {
          method: 'POST',
          headers: {
            Accept: 'application/form-data',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(
          (result) => {
            alert(result['message'])
            if (result['status'] === 'ok') {
              window.location.href = '/';
            }
          }
        )
      }

      const [password, setPassword] = useState('');
      const [confirm_password, setConfirmPassword] = useState('');

  return (
    <div>
        <div class="container-fluid ps-md-0">
        <div class="row g-0">
            <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
            <div class="col-md-8 col-lg-6">
            <div class="login d-flex align-items-center py-5">
                <div class="container">
                <div class="row">
                    <div class="col-md-9 col-lg-8 mx-auto">
                    <h3 class="login-heading mb-4">Brillo Connectz</h3>

                    <form onSubmit={handleSubmit}>
                        <div class="form-floating mb-3">
                            <input  
                                name="password"
                                type="password" 
                                class="form-control" 
                                id="password" 
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label for="password">Password</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input 
                                type="password" 
                                name="confirm_password"
                                class="form-control" 
                                id="confirm_password" 
                                placeholder="Password"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <label for="confirm_password">Confirm Password</label>
                        </div>
                        <div class="form-check mb-4">
                            <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                            <label class="form-check-label" for="rememberPasswordCheck">Remember password</label>
                        </div>

                        <div class="d-grid">
                            <button class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Reset Password</button>
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

export default ForgotPassword;
