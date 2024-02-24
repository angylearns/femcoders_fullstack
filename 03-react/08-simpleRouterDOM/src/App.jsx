import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/"><h3>Home</h3></NavLink>
        <NavLink to="/about"><h3>About</h3></NavLink>
      </nav>

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
