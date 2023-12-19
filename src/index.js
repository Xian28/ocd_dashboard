import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error404 from './pages/404/Error404';
import LandingPage from './pages/LandingPage/LandingPage';
import HomeMain from './pages/Home/HomeMain/HomeMain';
import Dashboard from './pages/Home/Dashboard/Dashboard';
import Regional from './pages/Home/Regional/Regional';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path = "/" exact element = {<App />}>
        <Route index element = {<LandingPage />}/>
        <Route path = "*" element = {<Error404 />}/>
        <Route path = "not-found" element = {<Error404 />}/>
        <Route path = "home" element = {<HomeMain />}>
          <Route index element = {<Dashboard />} />
          <Route path = "dashboard" element = {<Dashboard />} />
          <Route path = "regional" element = {<Regional />} />
          {/* <Route path = "events" element = {<Events />} />
          <Route path = "attendance" element = {<Attendance />} /> */}
          <Route path = "*" element = {<Error404 />}/>
          <Route path = "not-found" element = {<Error404 />}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
