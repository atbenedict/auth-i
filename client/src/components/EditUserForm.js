import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { editUser } from "../store/actions/userActions";
import { TiUserDeleteOutline } from "react-icons/ti";

class EditUserForm extends Component {
  constructor(props) {
    super(props);
    const userID = localStorage.getItem("userId");
    this.state = {
      id: userID,
      username: "",
      fullName: "",
      password: "",
      email: "",
      userImgUrl: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editUser(this.state.id, this.state);
  }

  render() {
    return (
      <StyledFormContainer>
        <h1>Update Your Information</h1>
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
          <StyledLabel>
            <p>Full Name</p>
            <StyledInput
              name="fullName"
              type="text"
              value={this.state.fullName}
              onChange={this.handleInputChange}
            />
          </StyledLabel>
          <StyledLabel>
            <p>Password</p>
            <StyledInput
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </StyledLabel>
          <StyledLabel>
            <p>Email (optional)</p>
            <StyledInput
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </StyledLabel>
          <StyledLabel>
            <p>Avatar URL (optional)</p>
            <StyledInput
              name="email"
              type="text"
              value={this.state.userImgUrl}
              onChange={this.handleInputChange}
            />
          </StyledLabel>
          <StyledButton type="submit">UPDATE</StyledButton>
        </StyledForm>
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
  editUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUserForm);
