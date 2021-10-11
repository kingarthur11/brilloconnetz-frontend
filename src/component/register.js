import React, { useState } from 'react';
import './App.css';

function Register() {

    const handleSubmit = event => {
        event.preventDefault();
        var data = {
            'full_name': full_name,
            'phone_number': phone_number,
            'type_of_sports': type_of_sports,
            'email': email,
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
    
      const [full_name, setFullName] = useState('');
      const [phone_number, setPhoneNumber] = useState('');
      const [type_of_sports, setTypeOfSports] = useState('');
      const [email, setEmail] = useState('');
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
                                autoComplete="none"
                                name="full_name"
                                type="text" 
                                class="form-control" 
                                id="full_name" 
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="name@example.com"
                            />
                            <label for="full_name">Full Name</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input 
                                autoComplete="none"
                                name="full_name"
                                type="text" 
                                class="form-control" 
                                id="phone_number" 
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                placeholder="name@example.com"
                            />
                            <label for="phone_number">Phone Number</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input 
                                autoComplete="none"
                                name="type_of_sports"
                                type="text" 
                                class="form-control" 
                                id="type_of_sports" 
                                onChange={(e) => setTypeOfSports(e.target.value)}
                                placeholder="name@example.com"
                            />
                            <label for="type_of_sports">Type of Sports</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input 
                                autoComplete="none"
                                name="email"
                                type="email" 
                                class="form-control" 
                                id="email" 
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@example.com"
                            />
                            <label for="email">Email address</label>
                        </div>
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
                        <div class="form-check mb-3">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                value="" 
                                id="rememberPasswordCheck"
                            />
                            <label class="form-check-label" for="rememberPasswordCheck">Remember password</label>
                        </div>

                        <div class="d-grid">
                            <button class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Sign in</button>
                        <div class="text-center">
                            <a class="small" href="#">Forgot password?</a>
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
