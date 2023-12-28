import React, { Component } from 'react'
import{NavLink}from "react-router-dom";


export default class Header extends Component {



  render() {
    return (

      <>
      <div className="navbar">
        <img src="netnivaranlogo.png" alt="logo" className="mainlogo"/>
        <ul id="navul">
          <li><NavLink to="/netnivaran/" className="active">Home</NavLink></li>
          <li><NavLink to="/About">US</NavLink></li>
          <li><NavLink to="/About">IT Solution &#11167;</NavLink>
            <ul className="dropdown">
              <li>Business Intelligence</li>
              <li>Web Development</li>
              <li>IT Management</li>
              <li>Quality Testing</li>
            </ul>
          </li>
          <li><NavLink to="/About">Digital Marketing &#11167;</NavLink>
            <ul className="dropdown">
              <li>Content and Social Strategy</li>
              <li>Performance Marketing & E-commerce</li>
              <li>Omnichannel Digital Services</li>
              <li>Reputation Management</li>
              <li>Digital sustainability</li>
              <li>Visual Storytelling</li>
            </ul>
          </li>
          <li><NavLink to="/">Subscription &#11167;</NavLink>
            <ul className="dropdown">
              <li>Green Cloud</li>
              <li>Codeguard Website Backup</li>
              <li>Domain Registration</li>
              <li>Email Packages G Suite</li>
              <li>Email Packages Microsoft 365</li>
              <li>Email Packages Rediff</li>
              <li>Hosting Server Packages</li>
              <li>Sitelock Malware Removal</li>
              <li>SSL Certificate</li>
            </ul>
          </li>
          <li><NavLink to="/">ESG  </NavLink></li>
          <li><NavLink to="/">Staffing &#11167;</NavLink>
            <ul className="dropdown">
              <li>Advisory Consultancy</li>
              <li>Screening Recruitment</li>
              <li>Team Management</li>
            </ul>
          </li>
          <li><NavLink to="/">Happy People &#11167;</NavLink>
            <ul className="dropdown">
              <li>Our Clients</li>
              <li>Testimonials</li>
            </ul>
          </li>
          <li><NavLink to="/">CO<sub>2</sub> Calculator</NavLink></li>
          <li><NavLink to="/"><button type="button" className="contactus">Contact Us</button></NavLink></li>
          <img src="bar.png" alt="images" id="remove"/>
        </ul>
        
       
      </div>
    </>
    )
  }
}
