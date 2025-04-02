import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

const NEWS_API_URL = "https://saurav.tech/NewsAPI/top-headlines/category/general/us.json";

const Home = ({ articles }) => {
  return (
    <div className="app-container">
      <h1 className="app-title">Here to the Stars 🌎🚀</h1>
      <div className="news-grid">
        {articles.map((article) => (
          <Link key={article.url} to={article.url} target="_blank" className="news-card-link">
            <div className="news-card">
              <img src={article.urlToImage} alt={article.title} className="news-image" />
              <div className="news-card-content">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(NEWS_API_URL)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles))
      .catch((err) => console.error("Error fetching news:", err));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home articles={articles} />} />
    </Routes>
  );
};

export default App;
