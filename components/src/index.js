import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from "./CommentDetails"
import AprovalCard from "./ApprovalCard"

const App = () => {
    return (
        <div className="ui container comments">
        <AprovalCard />
        <CommentDetails
          author="Miky"
          time="Today at 4:50PM"
          post="Wow what a great article"
          imageLink="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"
        />
        <CommentDetails
          author="Arianna"
          time="Today at 4:33PM"
          post="You are a great writer"
          imageLink="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
        />
        <CommentDetails
          author="Julie"
          time="Today at 3:30PM"
          post="Can I share this with a friend"
          imageLink="https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/039_girl_avatar_profile_woman_headband-512.png"
        />
      </div>
    );
}

ReactDOM.render(<App/>, document.querySelector("#root"))