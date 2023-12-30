import React, { Component } from 'react'
import{NavLink}from "react-router-dom";




export default class Contactus extends Component {
  render() {
    return (
        <>
        <div className="contactcontainer">
            <div id="contacthead">
                <h2>What’s on your mind?</h2>
                <p>We’re here to help! Tell us what you’re looking for and we’ll get you connected to the right people.</p>
            </div>
            <div className="contactcard">
                <div id="card1">
                    <img src={process.env.PUBLIC_URL + '/images/services.png'} alt="contactlogo" className="contactlogo"/>
                    <NavLink to="/"><p>Request for services</p></NavLink>
                </div>
                <div id="card2">
                    <img src={process.env.PUBLIC_URL + '/images/investor.png'} alt="contactlogo" className="contactlogo"/>
                    <NavLink to="/clients"><p>Investor Information</p></NavLink>
                </div>
                <div id="card3">
                    <img src={process.env.PUBLIC_URL + '/images/contact.png'} alt="contactlogo" className="contactlogo"/>
                    <NavLink to="/"><p>Contact Information</p></NavLink>
                </div>
            </div>
            <div className="contactnavigation">
                <p>Looking for something else?</p>
                <div id="links">
                    <NavLink to="/termscondition">Terms & Conditions <div id="arrow">&#8680;</div></NavLink>
                    <NavLink to="/esg">ESG <div id="arrow">&#8680;</div></NavLink>
                    <NavLink to=".testimonialcontainer">Testimonials <div id="arrow">&#8680;</div></NavLink>
                    <NavLink to="/clients">Clients <div id="arrow">&#8680;</div></NavLink>
                </div>
            </div>
        </div>
      </>
    )
  }
}
