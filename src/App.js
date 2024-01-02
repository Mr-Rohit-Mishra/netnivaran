import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import About from './components/About';
import Esg from './components/Esg';
import Clients from './components/Clients';
import Contactus from './components/Contactus';
import Contactservice from './components/Contactservice';
import Contactinfo from './components/Contactinfo';
import{BrowserRouter,Routes,Route,}from "react-router-dom";

import React, { Component } from 'react'

export default class App extends Component {

  render() {
    return (
      <>
        <BrowserRouter>
        <Header />

          <Routes>
            <Route exact path="/netnivaran/" element={<Main/>}/>
            <Route exact path="/" element={<Main />}/>
            <Route exact path="/About" element={<About/>}/>
            <Route exact path="/Esg" element={<Esg/>}/>
            <Route exact path="/clients" element={<Clients/>}/>
            <Route exact path="/Contactus" element={<Contactus/>}/>
            <Route exact path="/Contactinfo" element={<Contactinfo/>}/>
            <Route exact path="/Contactservice" element={<Contactservice/>}/>
          </Routes>

        <Footer/>
      </BrowserRouter>
      </>
    )
  }
}



