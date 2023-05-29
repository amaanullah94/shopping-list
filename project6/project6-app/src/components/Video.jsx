import React, { useState } from "react";

export default function VideoPlayer() {
  const videoSources = {
    deer: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
    snail: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
    cat: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
    spider: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"
  };

  const [selectedVideo, setSelectedVideo] = useState("spider");

  function handleVideoChange(event) {
    const newSelectedVideo = event.target.value;
    setSelectedVideo(newSelectedVideo);
  }

  return (
    <div>
      <h1>Video Player</h1>
      <div className="video-container">
        <video src={videoSources[selectedVideo]} controls autoPlay muted />
      </div>
      <div className="video-menu">
        {Object.keys(videoSources).map((video) => (
          <label key={video}>
            <input
              type="radio"
              name="video"
              value={video}
              checked={selectedVideo === video}
              onChange={handleVideoChange}
            />
            {video}
          </label>
        ))}
      </div>
    </div>
  );
}
