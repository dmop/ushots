import React from "react";
import { Button, Comment, Form, Header } from "semantic-ui-react";
import { Component } from "react";
import { getComments } from "../../actions/app";
import { connect } from "react-redux";

class Comments extends Component {
  componentWillMount() {
    this.props.getComments(this.props.commentList);
  }

  renderComments() {
    return this.props.comments.map(comment => {
      return (
        <Comment key={comment.id}>
          <Comment.Avatar src={comment.user.avatar_url} />
          <Comment.Content>
            <Comment.Author as="a">{comment.user.name}</Comment.Author>
            <Comment.Metadata>
              <div>{comment.updated_at}</div>
            </Comment.Metadata>
            <Comment.Text>
              <div
                dangerouslySetInnerHTML={{
                  __html: comment.body
                }}
              />
            </Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      );
    });
  }

  render() {
    if (!this.props.comments) return null;

    return (
      <Comment.Group>
        <Header as="h3" dividing>
          {this.props.shot.comments_count} Comments
        </Header>
        {this.renderComments()}
      </Comment.Group>
    );
  }
}

function mapStateToProps(state) {
  return {
    shot: state.shots.shot,
    comments: state.shots.comments
  };
}
export default connect(mapStateToProps, { getComments })(Comments);
