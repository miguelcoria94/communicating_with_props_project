import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from "./CommentDetails"

const App = () => {
    return (
      <div className="ui container comments">
        <CommentDetails author="Miky" time="Today at 4:50PM" />
        <CommentDetails author="Arianna" time="Today at 4:33PM" />
        <CommentDetails author="Julie" time="Today at 3:30PM" />
      </div>
    );
}

ReactDOM.render(<App/>, document.querySelector("#root"))