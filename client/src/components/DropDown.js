import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../store/actions/authActions";
import { FiUser } from "react-icons/fi";

class DropDown extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  render() {
    return (
      <div>
        {!this.state.showMenu ? <FiUser onClick={this.showMenu} /> : null}

        {this.state.showMenu ? (
          <div
            className="menu"
            ref={element => {
              this.dropdownMenu = element;
            }}
          >
            <button> Profile </button>
            <button> Add Post </button>
            <button
              onClick={() => {
                this.props.logoutUser();
              }}
            >
              Logout
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  logoutUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropDown);
