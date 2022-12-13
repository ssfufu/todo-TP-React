import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/header.jsx';


ReactDOM.render(
  <React.StrictMode>
    <main>
    <Router>
    <Header/>

    <Routes>
      <Route path="/" element={<App/>}/>
    </Routes>
    </Router>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);