import React from 'react';
import '../styles/VideoCard.css';

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
        <h4>{video.snippet.title}</h4>
      </a>
    </div>
  );
};

export default VideoCard;
