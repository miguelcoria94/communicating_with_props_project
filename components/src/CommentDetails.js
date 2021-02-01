import React from 'react';

const CommentDetails = () => {
    return (
      <div className="comment">
        <a href="/" className="avatar">
          <img
            alt="avatar"
            src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"
          ></img>
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 6 p.m</span>
          </div>
          <div className="text">Nice Blog Post</div>
        </div>
      </div>
    );
}

export default CommentDetails;
