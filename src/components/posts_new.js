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

        {/* using interpolation to conditionally assign CSS class*/}
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          {/* '{...title}' destructures title object and passes into input */}
          <input type="text" className="form-control" {...title}/>
          <div className="text-help">
            {title.touched ? title.error : null}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
            {categories.touched ? categories.error : null}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <input type="textarea" className="form-control" {...content} />
          <div className="text-help">
            {content.touched ? content.error : null}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a username';
  }

  if(!values.categories) {
    errors.categories = "Enter categories"
  }

  if(!values.content) {
    errors.content = "Write something"
  }

  return errors;
}

// connect: 1st argument is mapStateToProps
// 2nd argument is mapDispatchToProps

// reduxForm: 1st arg is form config
// 2nd is mapStateToProps
// 3rd is mapDispatchToProps

export default reduxForm({
  // form name has to be unique
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);
