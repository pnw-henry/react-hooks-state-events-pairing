import React, { useState } from "react";
import video from "../data/video.js";
import VideoFrame from "./Header";
import Comments from "./Comments";
import Likes from "./Likes";

function App() {
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);

  function onUpvoteClick() {
    setUpvotes(upvotes + 1);
  }

  function onDownvoteClick() {
    setDownvotes(downvotes - 1);
  }
  return (
    <div className="App">
      <VideoFrame video={video} />
      <Likes
        upvotes={upvotes}
        onUpvoteClick={onUpvoteClick}
        downvotes={downvotes}
        onDownvoteClick={onDownvoteClick}
      />
      <Comments entries={video.comments} />
    </div>
  );
}

export default App;
