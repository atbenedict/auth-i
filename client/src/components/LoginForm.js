import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { loginUser } from "../store/actions/authActions";
import logo from "../assets/logo.png";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.loginUser(this.state);
  };

  render() {
    return (
      <StyledFormContainer>
        <h1>Returning Members</h1>
        <StyledForm onSubmit={this.handleSubmit}>
          <StyledLabel>
            <p>Username</p>
            <StyledInput
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </StyledLabel>
          <label>
            <p>Password</p>
            <StyledInput
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
          <StyledButton type="submit">LOGIN</StyledButton>
        </StyledForm>
        <StyledImg src={logo} />
      </StyledFormContainer>
    );
  }
}
const StyledFormContainer = styled.div`
  margin: 40px auto;

  max-width: 40%;
  min-width: 300px;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
  label {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 5px;
  }
`;
const StyledLabel = styled.label``;
const StyledInput = styled.input`
  border-radius: 6px;
  font-size: 1rem;
`;

const StyledImg = styled.img`
  margin-top: 20px;
  width: 80%;
`;

const StyledButton = styled.button`
  max-width: 150px;
  margin: 20px 0;
  padding: 4px 20px;
  border-style: none;
  border-radius: 6px;
  background-color: #40627c;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  font-size: 17px;
  font-weight: 500;
  color: #e8e595;
  cursor: pointer;
  outline: none;
  -webkit-appearance: none;
`;
const mapStateToProps = state => ({});

const mapDispatchToProps = {
  loginUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
