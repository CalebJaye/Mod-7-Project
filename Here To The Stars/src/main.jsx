import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; 
import SpaceApp from "./SpaceApp";  // Import SpaceApp

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SpaceApp />  {/* This is the only Router in the app */}
  </BrowserRouter>
);
