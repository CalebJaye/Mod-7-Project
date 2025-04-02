import './App.css'
import React, { useEffect, useState } from "react"
import { Routes, Route, Link } from 'react-router-dom';
import Page2 from './App.jsx'; 

const SPACE_API = 'https://api.spaceflightnewsapi.net/v4/articles/';

const SpaceHome = ({ articles }) => {
  return (
    <div className="container">
      <h1 className="title">Here To The Stars ⋆⁺₊⋆ ☾⋆⁺₊⋆</h1>
      <Link to='/page2'>
        <button>Discover Earth</button>
      </Link>
      <div className="grid">
        {articles.map((article) => (
          <Link to={article.url} target="_blank" className="news-card-link" key={article.url}>
            <div className="news-card">
              <img src={article.image_url} alt={article.title} className="news-image" />
              <div className="news-card-content">
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
              </div>
            </div>
          </Link>
        ))} 
      </div>
    </div>
  );
};

function SpaceApp() { 
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(SPACE_API)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.results);
      })
      .catch((err) => console.error("Error fetching news:", err));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SpaceHome articles={articles} />} />
      <Route path="/page2" element={<Page2 />} /> 
    </Routes>
  );
}

export default SpaceApp;
