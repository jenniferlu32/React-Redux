import React from 'react';
import { connect } from 'react-redux';

const Blogs = ({ blogs }) => {
  console.log(blogs)
  return (
    <div>
      <h1>Blogs</h1>
      <ul>
      {
        blogs.length > 0 && blogs.map((blog, key) => {
          return ([
            <li key={key}>{blog.title} by {blog.blogger.firstName} {blog.blogger.lastName}</li>,
            <button key={blog.id}>Delete</button>
          ])
        })
      }
      </ul>
    </div>
  )
};

const mapStateToProps = ({ blogs }) => ({
  blogs
 })

export default connect(mapStateToProps)(Blogs);
