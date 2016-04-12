import React, { Component } from 'react';
import { connect } from 'react-redux';

// removing this import in favor of using objects
// import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  // lifecycle method - automatically called by react whenever this DOM is rendered for the first time
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <span className="pull-xs-right">{post.categories}</span>
          <strong>{post.title}</strong>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

// using an object instead of this function below to export
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch);
// }

                              // using { fetchPosts } instead of { fetchPosts: fetchPosts }
export default connect(mapStateToProps, { fetchPosts })( PostsIndex );
