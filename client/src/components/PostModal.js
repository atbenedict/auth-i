import React from "react";
import { connect } from "react-redux";
import { TiHeartOutline, TiHeartFullOutline } from "react-icons/ti";
import { deletePost, editPost } from "../store/actions";

class PostModal extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    if (!this.props.src) {
      console.log("whut");
      return null;
    }
    const parseUsers = () => {
      return this.props.users.map(thing => ({
        id: thing.id,
        username: thing.username,
        fullName: thing.fullName,
        userImgUrl: thing.userImgUrl
      }));
    };
    const user = localStorage.getItem("userId");

    return (
      <div>
        <div className="modal-overlay" onClick={this.props.closeModal} />
        <div isOpen={!!this.props.src.imageUrl} className="modal">
          <div className="modal-body">
            <a href="#" className="modal-close" onClick={this.props.closeModal}>
              &times;
            </a>
            {this.props.hasPrev && (
              <a href="#" className="modal-prev" onClick={this.props.findPrev}>
                &lsaquo;
              </a>
            )}
            {this.props.hasNext && (
              <a href="#" className="modal-next" onClick={this.props.findNext}>
                &rsaquo;
              </a>
            )}
            {this.props.src.userId == user ? (
              <>
                <button onClick={e => this.props.deletePost(this.props.src.id)}>
                  Delete
                </button>

                <button>Edit</button>
              </>
            ) : null}

            <img src={this.props.src.imageUrl} />
          </div>
          <span className="postInfoLine">{this.artistIndex}</span>
          <span className="postInfoLine">{this.props.src.postName}</span>
          <span className="postInfoLine">{this.props.src.description}</span>
          <span className="postInfoLine">
            {this.props.src.upvotes === 0 ? (
              <TiHeartOutline />
            ) : (
              <TiHeartFullOutline />
            )}
            {`   ${this.props.src.upvotes} likes`}
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isEditing: state.isEditing,
  users: state.user.users,
  user: state.user.user.id
});

export default connect(
  mapStateToProps,
  { deletePost, editPost }
)(PostModal);
