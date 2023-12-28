import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import{BrowserRouter,Routes,Route,}from "react-router-dom";

import React, { Component } from 'react'

export default class App extends Component {

  render() {
    return (
      <>
        <BrowserRouter>
        <Header />

          <Routes>
            <Route exact path="/" element={<Main />}/>
          </Routes>

        <Footer/>
      </BrowserRouter>
      </>
    )
  }
}



