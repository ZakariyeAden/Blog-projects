import React from "react";
import "./Style/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import CreatePost from "./Pages/CreatePost";
import Post from "./Pages/Post";
function App() {
  return (
    <>
      <div className="navbar">
        <div className="links">
          <a href="/">Main Page</a>
          <a href="/createpost">Create Post</a>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/post:postId" element={<Post />} />
      </Routes>
    </>
  );
}

export default App;
