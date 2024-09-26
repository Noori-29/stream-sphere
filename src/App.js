// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VideoPlayerPage from './pages/VideoPlayerPage';
import Sidebar from './components/Sidebar';
import axios from 'axios';
import './App.css';

const App = () => {
  const [videos, setVideos] = useState([]);

  const fetchVideosByCategory = async (category) => {
    try {
      const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',  // Correct API endpoint
        params: {
          part: 'snippet',
          type: 'video',
          maxResults: 50,
          q: category, // Using the category as the query
        },
        headers: {
          'x-rapidapi-key': '7590b357e5msh931546f54d50b5bp1e0596jsn38387de05a4d',
          'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
        },
      };

      const response = await axios.request(options);
      setVideos(response.data.items); // Update state with fetched videos
    } catch (error) {
      console.error('Error fetching category videos', error);
    }
  };

  return (
    <Router>
      <div className="app">
        <Sidebar fetchVideosByCategory={fetchVideosByCategory} />
        <Routes>
          <Route path="/" element={<HomePage videos={videos} setVideos={setVideos} />} />
          <Route path="/video/:id" element={<VideoPlayerPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
