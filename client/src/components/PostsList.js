import React from "react";
import { connect } from "react-redux";
import { getAllPosts } from "../store/actions";
import PostModal from "./PostModal";

import "../styles/postsList.css";

class PostsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: null };
    this.closeModal = this.closeModal.bind(this);
    this.findNext = this.findNext.bind(this);
    this.findPrev = this.findPrev.bind(this);
    this.renderPostContent = this.renderPostContent.bind(this);
  }

  renderPostContent(src, index) {
    return (
      <div onClick={e => this.openModal(e, index)}>
        <img
          src={src.imageUrl}
          id={src.id}
          artist={src.userId}
          upvotes={src.upvotes}
          key={src.id}
          postName={src.postName}
          alt={src.description}
        />
      </div>
    );
  }
  openModal(e, index) {
    this.setState({ currentIndex: index });
  }
  closeModal(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState({ currentIndex: null });
  }
  findPrev(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1
    }));
  }
  findNext(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  }
  render() {
    return (
      <div className="gallery-container">
        <div className="gallery-grid">
          {this.props.posts.map(this.renderPostContent)}
        </div>
        <PostModal
          closeModal={this.closeModal}
          findPrev={this.findPrev}
          findNext={this.findNext}
          hasPrev={this.state.currentIndex > 0}
          hasNext={this.state.currentIndex + 1 < this.props.posts.length}
          src={this.props.posts[this.state.currentIndex]}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.post.posts
});

export default connect(
  mapStateToProps,
  { getAllPosts }
)(PostsList);
