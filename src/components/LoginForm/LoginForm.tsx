import { FC } from "react";
import "./LoginForm.css";
import Button from "../Button/Button";

const Login: FC = () => {
  return (
    <form id="login-form">
      <h1 className="login-header">Welcome back!</h1>
      <div className="login-form-row">
        <label></label>
        <input className="login-form-input" type="email" />
        <span></span>
      </div>
      <div className="login-form-row">
        <label></label>
        <input className="login-form-input" type="password" />
        <span></span>
      </div>
      <div className="login-form-row">
        <Button link="home" text="Log In" />
      </div>
    </form>
  );
};

export default Login;
