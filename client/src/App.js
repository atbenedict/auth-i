import React, { Component } from "react";
import { Route, NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./components/Header";
import BreadCrumbs from "./components/BreadCrumbs";
import { LoggedInView } from "./views/LoggedInView";
import { LoggedOutView } from "./views/LoggedOutView";
import AddPostForm from "./components/AddPostForm";
import EditUserForm from "./components/EditUserForm";
import PostsList from "./components/PostsList";
import { logoutUser, secretLogin } from "./store/actions/authActions";
import { getAllPosts } from "./store/actions/postActions";
import { getAllUsers } from "./store/actions/userActions";
import Home from "./views/Home";

import "./styles/styles.css";
export class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.getAllPosts();
    this.props.getAllUsers();
  }

  render() {
    return (
      <div className="App">
        {/* <Header />
        <div className="wrapper">
          {this.props.loggedIn ? <LoggedInView /> : <LoggedOutView />}
        </div> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={AddPostForm} />
        <Route path="/edit" component={EditUserForm} />
        <Route path="/posts" component={PostsList} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
  logInMessage: state.auth.logInMessage
});

// const AppWithRouter = withRouter(App);

export default withRouter(
  connect(
    mapStateToProps,
    {
      logoutUser,
      secretLogin,
      getAllPosts,
      getAllUsers
    }
  )(App)
);
