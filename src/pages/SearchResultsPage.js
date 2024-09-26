// src/pages/SearchResultsPage.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import VideoList from '../components/VideoList';
import '../styles/SearchResultsPage.css';

const SearchResultsPage = () => {
  const { query } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get('https://youtube-data-api-v33.p.rapidapi.com/i18nRegions', {
          params: {
            part: 'snippet',
            q: query,
            maxResults: 50,
          },
          headers: {
            'x-rapidapi-key': '7590b357e5msh931546f54d50b5bp1e0596jsn38387de05a4d',
            'x-rapidapi-host': 'youtube-data-api-v33.p.rapidapi.com',
          },
        });
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div className="search-results-page">
      <h2>Search Results for "{query}"</h2>
      <VideoList videos={videos} />
    </div>
  );
};

export default SearchResultsPage;
