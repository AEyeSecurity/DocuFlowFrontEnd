import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingV2 from './pages/LandingV2';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <LandingV2 />
    </Router>
  );
}

export default App;
