import React, { Component } from 'react'

export default class Contactservice extends Component {
  render() {
    return (
        <div className="contactusform">
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
    )
  }
}
