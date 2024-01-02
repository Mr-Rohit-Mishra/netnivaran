import React, { Component } from 'react'
import { NavLink } from "react-router-dom";




export default class Contactus extends Component {
    render() {
        return (
            <>
                <div className="contactcontainer">
                    <div id="contacthead">
                        <h2>What's on your mind?</h2>
                        <p>We're here to help! Tell us what you’re looking for and we’ll get you connected to the right people.</p>
                    </div>
                    <div className="contactcard">
                        <div id="card1">
                            <img src={process.env.PUBLIC_URL + '/images/services.png'} alt="contactlogo" className="contactlogo" />
                            <NavLink to="/Contactus"><p>Request for services</p></NavLink>
                        </div>
                        <div id="card2">
                            <img src={process.env.PUBLIC_URL + '/images/investor.png'} alt="contactlogo" className="contactlogo" />
                            <NavLink to="/clients"><p>Investor Information</p></NavLink>
                        </div>
                        <div id="card3">
                            <img src={process.env.PUBLIC_URL + '/images/contact.png'} alt="contactlogo" className="contactlogo" />
                            <NavLink to="/"><p>Contact Information</p></NavLink>
                        </div>
                    </div>
                    <div className="contactnavigation">
                        <p>Looking for something else?</p>
                        <div id="links">
                            <NavLink to="/termscondition">Web Development<div id="arrow">&#8680;</div></NavLink>
                            <NavLink to="/esg">Domain Registration<div id="arrow">&#8680;</div></NavLink>
                            <NavLink to=".testimonialcontainer">E-Mail Packages<div id="arrow">&#8680;</div></NavLink>
                            <NavLink to="/clients">Hosting Server Packages<div id="arrow">&#8680;</div></NavLink>
                        </div>
                    </div>
                </div>


                <div className="contactusform" id="requestForServices">
                    <h2>REQUEST FOR SERVICES</h2>
                    <p>We’ve driven growth and purposeful transformation across every industry and we’re excited to build on your belief. Tell us a bit more about yourself, so we can get the ball rolling.</p>
                    <div className="formcontainer">
                        <form>
                            <input type="text" id="name" name="name" placeholder="Enter Full Name"/>
                            <input type="text" id="email" name="email" placeholder="Enter E-Mail"/>
                            <input type="text" id="phone" name="phone" placeholder="Enter Phone Number"/>
                            <textarea id="message" name="message" placeholder="How Can we Help You?"></textarea>
                            <div id="consent">
                                <input type="checkbox" id="check1" name="check1" value="check1" required style={{width:'15px', height:'15px',display:'inline-block'}}/>
                                <label for="check1"> I consent to processing of my personal data entered above for NetNivaran to contact me.</label><br/>
                            </div>
                            <button type="submit" className="submitButton">Send</button>
                        </form>
                        <div id="image">
                            <img src={process.env.PUBLIC_URL + '/images/servicerequest.png'} alt="contactformimage" id="contactformimage" />
                        </div>
                    </div>
               </div>
                <div className="contactusform" id="requestForServices">
                    <h2>Contact Information</h2>
                    <p>We're so glad you reached out! Connecting you to our experts on the ground is a priority for us.</p>
                    <div className="contactinfocontainer">
                        <div id="image">
                            <img src={process.env.PUBLIC_URL + '/images/contactus.jpg'} alt="contactformimage" id="contactformimage" />
                        </div>
                        <div id="contactinfo">
                            <h3><strong>WEBSITE : </strong>www.netnivaran.com</h3>
                            <h3><strong>TELEPHONE : </strong>011-4282 8113/14.</h3>
                            <h3>PROJECTS :</h3>
                            <p><strong>Contact No : </strong>+91-98100-07511</p>   
                            <p><strong>Mail : </strong>info@netnivaran.com</p>
                            <h3>SUBSCRIPTION :</h3>
                            <p><strong>Contact No : </strong>+91-96430-02648</p>
                            <p><strong>Mail : </strong>support@netnivaran.com</p>
                            <h3>HR</h3>
                            <p><strong>Mail : </strong>hr@netnivaran.com</p>
                        </div>
                        
                    </div>
               </div>
            </>
        )
    }
}
