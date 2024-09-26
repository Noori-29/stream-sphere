import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import '../styles/HomePage.css'; // Assuming this has the required CSS

const HomePage = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Function to fetch videos based on category
  const fetchVideosByCategory = async (category) => {
    setIsLoading(true);

    const options = {
      method: 'GET',
      url: 'https://youtube-v31.p.rapidapi.com/search',
      params: {
        part: 'snippet',
        type: 'video',
        maxResults: 50,
        q: category, // Use the category as the query
      },
      headers: {
        'x-rapidapi-key': '7590b357e5msh931546f54d50b5bp1e0596jsn38387de05a4d',
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setVideos(response.data.items); // Update state with fetched videos
    } catch (error) {
      console.error('Error fetching videos for category:', category, error);
    }
    setIsLoading(false);
  };

  // Fetch trending videos by default when the page loads
  useEffect(() => {
    const fetchTrendingVideos = async () => {
      setIsLoading(true);

      const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
          part: 'snippet',
          chart: 'mostPopular',
          maxResults: 50,
        },
        headers: {
          'x-rapidapi-key': '7590b357e5msh931546f54d50b5bp1e0596jsn38387de05a4d',
          'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setVideos(response.data.items); // Set the state with trending videos
      } catch (error) {
        console.error('Error fetching trending videos:', error);
      }
      setIsLoading(false);
    };

    fetchTrendingVideos();
  }, []);

  return (
    <div className="homepage">
      <Header /> {/* Include the Header component */}
      <div className="content">
        <Sidebar fetchVideosByCategory={fetchVideosByCategory} /> {/* Sidebar with fetch function passed */}
        <div className="video-content">
          <h2>Trending Videos</h2>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <div className="video-grid">
              {videos.map((video) => (
                <div key={video.id.videoId} className="video-card">
                  <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
                    <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
                  </a>
                  <div className="video-info">
                    <h3 className="video-title">{video.snippet.title}</h3>
                    <p className="video-meta">
                      {video.snippet.channelTitle} • {new Date(video.snippet.publishedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
