import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <>
        <div className="footer">
            <div className="row1">
                <div className="mapcontainer">
                    
                </div>
                <ul className="footerul">
                    <li><img src="netnivaranlogo.png" alt="footerlogo"/></li>
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14015.490548692067!2d77.25875!3d28.573587!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a390ca70ff%3A0x4bb87d93a08386ee!2sNetNivaran%20Internet%20Services%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1702897752662!5m2!1sen!2sin"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <li><p>101 2nd Floor, Kundan Kutir, <br/>Ashram Chowk, New Delhi, <br/>Delhi 110014</p></li>
                    <div className="Social-links">
                        <a href="/"><img id="social-logo" src="fblogo.png" alt="Facebook"/></a>
                        <a href="/"><img id="social-logo" src="linkedinlogo.png" alt="Linkedin"/></a>
                        <a href="/"><img id="social-logo" src="twitterlogo.png" alt="Twitter"/></a>
                        <a href="/"><img id="social-logo" src="instagramlogo.jpg" alt="Instagram"/></a>
                    </div>
                </ul>
                
            </div>
            <div className="row2"  >
                <ul className="footerul">
                    <h3>Services</h3>
                    <li><p>Business Intelligence</p></li>
                    <li><p>Web Development</p></li>
                    <li><p>Cloud Services</p></li>
                    <li><p>Consulting</p></li>
                    <li><p>Data Center Services</p></li>
                    <li><p>Infrastructure Public Cloud</p></li>
                    <li><p>Software as a Service</p></li>
                    <li><p>Hybrid Cloud</p></li>
                    <li><p>Tech Support</p></li>
                    <li><p>Quality Testing</p></li>
                    <li><p>Digital Marketing</p></li>
                    <li><p>Subscription</p></li>
                    <li><p>ESG</p></li>
                </ul>
            </div>
            <div className="row3"  >
                <ul className="footerul" >
                    <h3>Products And Platforms</h3>
                    <li><p>Diu hotels</p></li>
                    <li><p>Guwahati hotels</p></li>
                    <li><p>Hyderabad hotels</p></li>
                    <li><p>Mahabaleshwar hotels</p></li>
                    <li><p>Gangtok hotels</p></li>
                    <li><p>Munnar hotels</p></li>
                    <li><p>Puri hotels</p></li>
                    <li><p>Phuket City hotels</p></li>
                </ul>
            </div>
            <div className="row4" >
                <ul className="footerul">
                    <h3>Our Clients</h3>
                    <li><p>Banking</p></li>
                    <li><p>Capital Markets</p></li>
                    <li><p>Consumer Goods and Distribution</p></li>
                    <li><p>Communications, Media, and Information Services</p></li>
                    <li><p>Education</p></li>
                    <li><p>Energy, Resources, and Utilities</p></li>
                    <li><p>Healthcare</p></li>
                    <li><p>High Tech</p></li>
                    <li><p>Insurance</p></li>
                    <li><p>Life Sciences</p></li>
                    <li><p>Manufacturing</p></li>
                    <li><p>Public Services</p></li>
                    <li><p>Retail</p></li>
                    <li><p>Travel and Logistics</p></li>
                </ul>
                
            </div>
        </div>
        <div className="disclamer">
            <p>Copyrights © 2023. All rights reserved</p>
        </div>
        
        </>
    )
  }
}
