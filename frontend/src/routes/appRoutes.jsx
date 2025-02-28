import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../compontents/LandingPage';
import SignIn from "../compontents/SignIn";
import SignUp from "../compontents/SignUp";
import Entrepreneur from "../compontents/Entrepreneur";
import Backers from "../compontents/Backers";



// import Home from '../pages/Home';
// import Dashboard from '../pages/Dashboard';
// import Login from '../pages/Login';
// import Signup from '../pages/Signup';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/entrepreneur" element={<Entrepreneur />} />
        <Route path="/backers" element={<Backers />} />

        {/* <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
