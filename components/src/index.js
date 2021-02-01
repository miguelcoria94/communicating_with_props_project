import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from "./CommentDetails"

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetails author="Miky" />
            <CommentDetails author="Arianna"/>
            <CommentDetails author="Julie"/>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector("#root"))