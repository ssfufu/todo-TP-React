import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/header.jsx';
import Footer from './components/footer';


ReactDOM.render(
  <React.StrictMode>
    <main style={{backgroundColor: '#212529', minHeight: '100vh'}}>
    <Router>
    <Header/>

    <Routes>
      <Route path="/" element={<App/>}/>
    </Routes>
    <Footer/>
    </Router>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);