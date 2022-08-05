import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Player from './pages/Player';
import AddProject from './pages/AddProject';
import './App.css';
import NavBar from './components/NavBar';
import Project from './pages/Project';
import Feed from './pages/feed';
import Settings from './pages/setting';
import Posts from './pages/posts';

const App = () => {
  return(
  <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/player" element={<Player />} />
      <Route path="/addproject" element={<AddProject/>}/>
      <Route path="/projects" element={<Project/>}/>
      <Route path="/posts" element={<Posts/>}/>
      <Route path="/settings" element={<Settings/>}/>
      <Route path="/feed" element={<Feed/>}/>
    </Routes>
  </>
    )
};

export default App;
