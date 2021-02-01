import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'

const App = () => {
    return (
      <div className="ui container comments">
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
        <div className="comment">
          <a href="/" className="avatar">
            <img
              alt="avatar"
              src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
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
        <div className="comment">
          <a href="/" className="avatar">
            <img
              alt="avatar"
              src="https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14046.jpg"
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
      </div>
    );
}

ReactDOM.render(<App/>, document.querySelector("#root"))