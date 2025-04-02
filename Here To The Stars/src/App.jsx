import './App.css'
import React, {useEffect, useState} from "react"
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import fetchData from '../adapters/FetchData.js'



 const SPACE_API = 'https://api.spaceflightnewsapi.net/v4/articles/'

 const SpaceHome = ({ articles }) => {
  return (
    <div className="container">
      <h1 className="title">Here To The Stars</h1>
      <div className="grid">
        {articles.map((article) => (
          <Link to={article.url} target="_blank" className="news-card-link">
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
  )
 };

function App() { 
  const [articles, setArticles] = useState([])
  useEffect(() => {
    fetch(SPACE_API)
      .then((res) => {
        console.log("Reg resp:", res);
        return res.json();
      })
      .then((data) => {
        console.log("Parsed JSON data resp:", data);
        setArticles(data.results);
      })
      .catch((err) => console.error("Error fetching news:", err));
  }, []);
   
    return (
        <Routes>
          <Route path="/" element={<SpaceHome articles={articles} />} />
        </Routes>
    )
};
export default App
