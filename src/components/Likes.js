import React from "react";

function Likes({ upvotes, onUpvoteClick, downvotes, onDownvoteClick }) {
  return (
    <div id="counters">
      <button
        onClick={onUpvoteClick}
        className="upvote-counter"
        type="button"
        value={upvotes}
      >
        {upvotes} Likes
      </button>
      <button
        onClick={onDownvoteClick}
        className="downvote-counter"
        type="button"
        value={downvotes}
      >
        {downvotes} Dislikes
      </button>
    </div>
  );
}

export default Likes;
