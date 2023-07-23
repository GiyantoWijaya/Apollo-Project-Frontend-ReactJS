import React, { useState } from "react";
// import Form from 'react-bootstrap/Form';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
import "./loginPage.style.css";
import jwt from "jwt-decode";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [status, setStatus] = useState(true);
  const getYear = () => {
    return new Date().getFullYear();
  };

  let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const usernameInput = event.target.username.value;
    const passwordInput = event.target.password.value;

    try {
      axios
        .post(`http://localhost:5001/api/authentication/login`, {
          username: usernameInput,
          password: passwordInput,
        })
        .then((res) => {
          let data = res.data;

          const token = data.data.token;

          let user = jwt(token);
          Cookies.set("token", token, { expires: 1 });
          Cookies.set("userId", user.id, { expires: 1 });
          Cookies.set("username", user.username, { expires: 1 });
          navigate("/home");
          console.log(res.status);
        })
        .catch((res) => {
          console.log(res.response.status);
          if (res.response.status === 400) {
            setStatus(false);
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleCancel = (event) => {
    navigate("/");
  };

  return (
    <>
      <div className="bodyLogin">
        <div className="form-signin w-100 m-auto">
          <form onSubmit={handleSubmit}>
            <h1 className="h1 title text-center">Appollo Project</h1>
            <hr />
            <h1 className="h3 mb-3 fw-normal text-center">Please Sign in</h1>
            {status === false && (
              <div
                className="alert alert-danger alert-dismissible fade show"
                role="alert"
              >
                <strong>Login Gagal!</strong> Username / Password salah.
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
            )}
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                placeholder="Username"
              />
              <label htmlFor="username">Username</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
              />
              <label htmlFor="password">Password</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
            <button
              className="w-100 my-2 btn btn-lg btn-danger"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <p className="mt-5 mb-3 text-body-secondary text-center">
              &copy; APOLLO PROJECT {getYear()}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
