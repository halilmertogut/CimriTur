import React, { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import { useDispatch } from 'react-redux';
import { checkSession } from './redux/authActions';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkSession());
  }, [dispatch]);
  return (
    <Router> {/* Ana Router */}
      <MainLayout />
    </Router>

  );
}

export default App;
