import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Error from "./Error";

export default function Registration() {
  const [firstName, setFirstname] = useState("");
  const [surName, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, isError] = useState(false);
  const [formValidated, validateForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      firstName,
      surName,
      email,
      password,
      password2
    };
    if (firstName.length < 3) {
      isError(true);
      validateForm(false);
    }
    if (surName.length < 4) {
      isError(true);
      validateForm(false);
    }
    if (firstName.length < 3) {
      isError(true);
      validateForm(false);
    }
    if (password2 === password) {
      isError(true);
      validateForm(false);
    } else {
      isError(false);
      validateForm(true);
      console.log(userData);
    }
  };

  return (
    <>
      <div>Registration</div>
      {error && <Error />}
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Text className="text-muted">
          We'll never share your data with anyone else.
        </Form.Text>
        <Form.Group controlId="formBasicFirstname">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={firstName}
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
            type="text"
            placeholder="Enter your firstname"
          />
        </Form.Group>
        <Form.Group controlId="formBasicSurname">
          <Form.Label>Surname</Form.Label>
          <Form.Control
            value={surName}
            onChange={(e) => {
              setSurname(e.target.value);
            }}
            type="text"
            placeholder="Enter your surname"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            placeholder="Enter your surname"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter your password"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPasswordAgain">
          <Form.Label>Password Confirm</Form.Label>
          <Form.Control
            value={password2}
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
            type="password"
            placeholder="Enter your password again"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
