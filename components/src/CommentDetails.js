import React from 'react';

const CommentDetails = ({author, time, imageLink, post}) => {
    return (
      <div className="comment">
        <a href="/" className="avatar">
          <img
            alt="avatar"
            src={imageLink}
          ></img>
        </a>
        <div className="content">
          <a href="/" className="author">
            {author}
          </a>
          <div className="metadata">
            <span className="date">{time}</span>
          </div>
          <div className="text">{post}</div>
        </div>
      </div>
    );
}

export default CommentDetails;
