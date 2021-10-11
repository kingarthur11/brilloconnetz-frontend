import React, { useState } from 'react';
import './App.css';

function EditProfile() {

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
                <div class="container">
                <div class="row">
                    <div class="col-md-9 d-flex justify-content-center align-items-center col-lg-8 mx-auto">
                        <div>
                        <h3 class="login-heading mb-4">Brillo Connectz</h3>

                            <form onSubmit={handleSubmit}>
                                <div class="form-floating mb-4">
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
                                <div class="form-floating mb-4">
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
  );
}

export default EditProfile;
