// Importing Libraries
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';

// Importing Style
import './App.css'; 

function PageLogin() {

  // Inisiasi Variabel dan State
  const urlEmpty = "";
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  /*
   * Function handlerForm untuk mengambil value dari form login yaitu username dan password.
   */
  function handlerForm(type, value) {
    switch (type) {
      case 'username':
        setUsername(value)
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  }

  /*
   * Function submitLogin untuk mengirimkan method post ke API dengan body username dan password
   */
  const submitLogin = async (event) => {
    // event.preventDefault() untuk mencegah website merefresh
    event.preventDefault()
    try {
        const res = await axios.post("https://kawahedukasibackend.herokuapp.com/login",
            { username, password });

        if (res.status === 200) {
            localStorage.setItem("access_token", res.data.access_token);
            localStorage.setItem("login", 1);
            navigate('/dashboard');
        }
    } catch (err) {
        if (err.response.status === 401) {
            setErrorMessage('Username atau Password Salah')
            setUsername('')
            setPassword('')
        } else if (err.response.status === 0) {
            setErrorMessage('Internet Anda Tidak Terkoneksi')
            setUsername('')
            setPassword('')
        }
        console.log(errorMessage);
    }
  }
   
  return (
    <div className="niceadmin">
      <main>
        <div className="container">

          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                  <div className="d-flex justify-content-center py-4">
                    <a href={urlEmpty} className="logo d-flex align-items-center w-auto">
                      <img src="NiceAdmin/img/logo.png" alt="logo" />
                      <span className="d-none d-lg-block">Narasi</span>
                    </a>
                  </div>

                  <div className="card mb-3">

                    <div className="card-body">

                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                        <p className="text-center small">Enter your username & password to login</p>
                      </div>

                      {errorMessage !== "" ? (
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                          {errorMessage}
                          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                      ) : ( "" )}

                      <form className="row g-3 needs-validation" onSubmit={(event) => submitLogin(event)}>

                        <div className="col-12">
                          <label htmlFor="yourUsername" className="form-label">Username</label>
                          <div className="input-group has-validation">
                            <input
                              value={username}
                              onChange={(event) => handlerForm('username', event.target.value)}
                              type="text"
                              name="username"
                              className="form-control"
                              id="yourUsername"
                              placeholder="Enter Username or Email"
                              required
                            />
                            <div className="invalid-feedback">Please enter your username.</div>
                          </div>
                        </div>

                        <div className="col-12">
                          <label htmlFor="yourPassword" className="form-label">Password</label>
                          <input
                            value={password}
                            onChange={(event) => handlerForm('password', event.target.value)}
                            type="password"
                            name="password"
                            className="form-control"
                            id="yourPassword"
                            placeholder="Password"
                            required
                          />
                          <div className="invalid-feedback">Please enter your password!</div>
                        </div>

                        <div className="col-12">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <button className="btn btn-primary w-100" type="submit">Login</button>
                        </div>
                      </form>

                    </div>
                  </div>

                  <div className="credits">
                    Designed by <a href={urlEmpty}>Narasi</a>
                  </div>

                </div>
              </div>
            </div>

          </section>

        </div>
      </main>
    </div>
  );
}

export default PageLogin;