import React, { Component } from "react";
import { connect } from "react-redux";
// import { LoginForm } from "./Login";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { loginUser } from "../store/actions/authActions";
import { registerUser } from "../store/actions/userActions";

export class LoggedOutView extends Component {
  render() {
    return (
      <div>
        <div className="login-register-forms">
          <RegisterForm
            registerUser={this.props.registerUser}
            className="registrationForm"
          />
          <LoginForm loginUser={this.props.loginUser} className="loginForm" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  loginUser,
  registerUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoggedOutView);
