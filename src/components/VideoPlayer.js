// src/components/VideoPlayer.js

import React from 'react';
import '../styles/VideoPlayer.css';

const VideoPlayer = ({ videoId }) => {
  return (
    <div className="video-player">
      <iframe
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen
        title="Video Player"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
