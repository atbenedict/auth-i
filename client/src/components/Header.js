import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../store/actions/authActions";
import {
  MdPalette,
  MdAddCircleOutline,
  MdModeEdit,
  MdExitToApp
} from "react-icons/md";
import "../styles/styles.css";
import { withRouter } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <div>
        <nav className="header">
          <Link exact to="/" className="logo">
            <div className="palette">
              <MdPalette />
            </div>
            <span className="logotype">artful</span>
          </Link>
          <div className="userMenu">
            {this.props.loggedIn ? (
              <span className="icons">
                <Link to="/add">
                  <MdAddCircleOutline />
                </Link>
                <Link to="/edit">
                  <MdModeEdit />
                </Link>
                <MdExitToApp onClick={this.props.logoutUser} />
              </span>
            ) : null}
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
  logInMessage: state.auth.logInMessage
});

const mapDispatchToProps = {
  logoutUser
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));
