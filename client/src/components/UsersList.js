import React from "react";
import { connect } from "react-redux";
import { getAllUsers } from "../store/actions";

import "../styles/postsList.css";

class UsersList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="gallery-container">
        <div className="gallery-grid">
          {this.props.users.map((user, id) => {
            return <p>{user.username}</p>;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.user.users
});

export default connect(
  mapStateToProps,
  {}
)(UsersList);
