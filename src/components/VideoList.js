// src/components/VideoList.js

import React from 'react';
import VideoCard from './VideoCard';

const VideoList = ({ videos }) => {
  if (!videos || videos.length === 0) {
    return <p>No videos available.</p>;
  }

  return (
    <div className="video-list">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoList;
