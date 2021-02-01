import React from 'react';

const CommentDetails = ({author, time}) => {
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
            {author}
          </a>
          <div className="metadata">
            <span className="date">{time}</span>
          </div>
          <div className="text">Nice Blog Post</div>
        </div>
      </div>
    );
}

export default CommentDetails;
