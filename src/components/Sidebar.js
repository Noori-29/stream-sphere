import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ fetchVideosByCategory }) => {
  const categories = ['Music', 'Sports', 'Gaming', 'News'];

  return (
    <aside className="sidebar">
      <h3>Categories</h3>
      <ul>
        {categories.map((category) => (
          <li key={category} onClick={() => fetchVideosByCategory(category)}>
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
