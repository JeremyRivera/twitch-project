import React from 'react';
import { useRoutes } from 'hookrouter';
import Home from './pages/home';
import PageInformation from './pages/pageinformation';
import Profile from './pages/profile';
// import "react-router-dom";
import './App.css';

const routes = {
  "/": () => <Home />,
  "/1": () => <PageInformation />,
  "/2": () => <Profile />
};

function App() {
  const routeResult = useRoutes(routes);
  return (
    routeResult
  );
};

export default App;
