import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";  // Import useNavigate
import "./App.css";

const NEWS_API_URL = "https://saurav.tech/NewsAPI/top-headlines/category/general/us.json";

const Home = ({ articles }) => {
  const navigate = useNavigate(); 
  

  const handleGoBack = () => {
    navigate("/");  
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Here to the Stars 🌎🚀</h1>
    
      <button onClick={handleGoBack} className="go-back-button">
        Traverse Space
      </button>
      
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

  return <Home articles={articles} />;
};

export default App;
