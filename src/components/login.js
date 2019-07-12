import React from "react";
import "../css/login.css";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.password !== "" && this.state.email !== "") {
      this.props.history.push("/Category");
    } else {
      alert("you have to fill first")
    }
  };

  render() {
    return (
      <Form
        className="login-form d-flex flex-column justify-content-center align-items-center"
        onSubmit={this.handleSubmit}
      >
        <h4>
          <span className="font-weight-bold">My Account</span>
        </h4>
        <FormGroup className="w-100">
          <label>Email</label>
          <Input
            name="email"
            type="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup className="w-100">
          <label>Password</label>
          <Input
            name="password"
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button className="btn-lg size=lg w-100 color">Sign in</Button>
        <div className="text-center pt-3">
          or continue with your social account
        </div>
        <FacebookLoginButton className="mt-3 mb-3 w-100" />
        <div className="text-center">
          <a href="/sign-up">Sign up</a>
          <span className="p-2">|</span>
          <a href="/forgot password">Forgot Password</a>
        </div>
      </Form>
    );
  }
}

export default Login;
