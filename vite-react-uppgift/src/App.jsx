import React from 'react';
import './App.css'
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import PostList from './components/PostList';
import TagList from './components/TagList';

function App() {

  return (
    <>
      <div>
        <Navbar />
        <h1>F25D Borås YH - React kurs</h1>
        <Sidebar />
        <div className="posttag-container">
        <PostList />
        <TagList />
        </div>
      </div>
    </>
  )
}

export default App
