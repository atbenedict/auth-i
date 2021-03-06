import React, { Component } from "react";
import { Route, NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import BreadCrumbs from "../components/BreadCrumbs";
import UsersList from "../components/UsersList";

export class LoggedInView extends Component {
  render() {
    return (
      <div>
        <h1>Welcome Aboard</h1>
        <UsersList />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoggedInView);
