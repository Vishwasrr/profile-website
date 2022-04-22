
import './App.css';
import Navbar from './components/navbar';
import Profile from './components/profile';
import Project from './components/Project';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/projects" element={<Project />} />

          <Route path="/" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
