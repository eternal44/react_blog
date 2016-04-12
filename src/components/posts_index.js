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

  render() {
    return (
      <div className="text-xs-right">
        <Link to="/posts/new" className="btn btn-primary">
          Add a post
        </Link>
        <div>
        List of blog posts
        </div>
      </div>
    );
  }
}

// using an object instead of this function below to export
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch);
// }

                              // using { fetchPosts } instead of { fetchPosts: fetchPosts }
export default connect(null, { fetchPosts })( PostsIndex );
