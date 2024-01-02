import React, { Component } from 'react'

export default class Contactinfo extends Component {
  render() {
    return (
        <div className="contactusform" id="requestForServices">
            <h2>Contact Information</h2>
            <p>We're so glad you reached out! Connecting you to our experts on the ground is a priority for us.</p>
            <div className="contactinfocontainer" id="contactinfocontainer">
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
    )
  }
}






                