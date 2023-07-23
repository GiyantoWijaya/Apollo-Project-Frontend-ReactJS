import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Alert } from "react-bootstrap";
import "./register.style.css";

import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(true);

  let navigate = useNavigate();

  // const [inputUser, setInputUser] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  // });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // let { username, email, password } = e;

    try {
      let result = await axios.post(
        "http://localhost:5001/api/authentication/register",
        {
          username,
          email,
          password,
        }
      );

      if (result.status === 201) {
        setStatus(false);
      }

      setUsername("");
      setEmail("");
      setPassword("");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = (event) => {
    navigate(`/`);
  };

  // const handleChange = (event) => {
  //   let value = event.target.value;
  //   let name = event.target.name;

  //   setInputUser({ inputUser, [name]: value });
  // };

  return (
    <div className="register-form">
      <h1>Register</h1>

      <Form onSubmit={handleSubmit}>
        {status === false && (
          <Alert variant="success" dismissible>
            <Alert.Heading>Success !</Alert.Heading>
            <p>Data user berhasil dibuat</p>
          </Alert>
        )}
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Enter username"
            minLength={6}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="w-100 my-2 btn btn-lg register-button"
        >
          Register
        </Button>
        <Button
          className="w-100 my-2 btn btn-lg btn-danger"
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
