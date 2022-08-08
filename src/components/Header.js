import React from "react";

function VideoFrame({ video }) {
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <h1 id="title">{video.title}</h1>
      <p id="videoData">
        {video.views} Views | Uploaded {video.createdAt}
      </p>
    </div>
  );
}

export default VideoFrame;
