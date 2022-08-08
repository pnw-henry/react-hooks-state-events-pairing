import React, { useState } from "react";

function Comments({ entries }) {
  const [showResults, setShowResults] = useState(true);
  const [comments, setComments] = useState(entries);

  const commentEntries = comments.map((comment) => {
    return (
      <div key={comment.id}>
        <h2>{comment.user}</h2>
        <p>{comment.comment}</p>
      </div>
    );
  });

  function handleClick() {
    setShowResults((showResults) => !showResults);
    if (showResults === true) {
      setComments([]);
    } else {
      setComments(entries);
    }
  }

  return (
    <div id="comments">
      <button id="comment-button" type="button" onClick={handleClick}>
        {showResults ? "Hide Comments" : "Show Comments"}
      </button>
      <br></br>
      <h1 id="comment-count">{entries.length} Comments</h1>
      {commentEntries}
    </div>
  );
}

export default Comments;
