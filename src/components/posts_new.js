import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
  render() {
    // const title = this.props.fields.title
    // the line below is the line above in es6
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create A New Post</h3>

        <div className="form-group">
          <label>Title</label>
          {/* '{...title}' destructures title object and passes into input */}
          <input type="text" className="form-control" {...title}/>
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
        </div>

        <div className="form-group">
          <label>Content</label>
          <input type="textarea" className="form-control" {...content} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

// connect: 1st argument is mapStateToProps
// 2nd argument is mapDispatchToProps

// reduxForm: 1st arg is form config
// 2nd is mapStateToProps
// 3rd is mapDispatchToProps

export default reduxForm({
  // form name has to be unique
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);
