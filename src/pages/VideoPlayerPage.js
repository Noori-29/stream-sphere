// src/pages/VideoPlayerPage.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import '../styles/VideoPlayerPage.css';

const VideoPlayerPage = () => {
  const { id } = useParams();
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    // Fetch related videos using the video id
  }, [id]);

  return (
    <div className="video-player-page">
      <VideoPlayer videoId={id} />
      {/* Related videos component could go here */}
    </div>
  );
};

export default VideoPlayerPage;
