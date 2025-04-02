import {useEffect, useState} from 'react'
import fetchData from './adapters/FetchData.js'
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { SPACE_API } from '../App.jsx';
import fetchData from './adapters/FetchData.js';



const SPACE_API = 'https://api.spaceflightnewsapi.net/v4/articles/'

const SpaceNewsPage = () => {
   const [articles, setArticles] = useState([])

  useEffect(() => {
    fetchData(SPACE_API)
    .then((res) => res.json())
    .then((data) => setArticles(data.articles))
    .catch((err) => console.error("Error fetching news:", err))
  }, []);

  return (
    <div>
      
    </div>
  )
};

export default SpaceNewsPage