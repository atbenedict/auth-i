import React, { Component } from "react";

import { connect } from "react-redux";
import PostsList from "./PostsList";
import Header from "./Header";
import EditUserForm from "./EditUserForm";
import AddPostForm from "./AddPostForm";
import "../styles/styles.css";

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      adding: false,
      editing: false
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="wrapper">
          <PostsList />
          <AddPostForm />
          <EditUserForm />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
