import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import { createPost } from "../store/actions/postActions";
import "../styles/styles.css";
import "../styles/form.css";

class CreatePost extends Component {
  handleSubmit = (values, { props = this.props, setSubmitting }) => {
    this.props.createPost(values);
    setSubmitting(false);
    return;
  };

  render() {
    return (
      <form>
        <Formik
          initialValues={{
            postName: "",
            description: "",
            imageUrl: ""
          }}
          onSubmit={this.handleSubmit}
          render={formProps => {
            return (
              <div className="createPostForm">
                <h1>Create New Post</h1>
                <Form>
                  <Field
                    type="text"
                    name="postName"
                    label="Post Name"
                    placeholder="Post Name"
                  />

                  <Field
                    type="text"
                    name="description"
                    placeholder="Description"
                  />

                  <Field type="text" name="imageUrl" placeholder="Image URL" />

                  <button type="submit" disabled={formProps.isSubmitting}>
                    CREATE POST
                  </button>
                </Form>
              </div>
            );
          }}
        />
      </form>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  createPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost);
