import React, { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import MainLayout from './layout/MainLayout';

function App() {


  return (
    <Router> {/* Ana Router */}
      <MainLayout />
    </Router>

  );
}

export default App;
