import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Main />
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short">Hello</i>
      </a>
    </div>
  );
};

export default App;
