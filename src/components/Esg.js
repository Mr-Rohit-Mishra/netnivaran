import React, { Component } from 'react'
import{NavLink}from "react-router-dom";


export default class Esg extends Component {
  render() {
    return (
      <>
      <div className="esgimgcontainer"></div>
      <div className="esgcontent">
        <p>At Netnivaran, we believe business success and sustainability go hand-in-hand. Our comprehensive ESG consultancy services help organizations drive positive impact.</p>
        <p>"Every leaf on every tree is tuned down to the subatomic level for gathering as much light as possible into every core.” Likewise, we tune our solutions at a granular level to maximize efficiency and sustainability.”</p>
        <p>We recognize that nature loves efficiency. At Netnivaran, so do we. Climate change is a global issue requiring collective action and innovative solutions. Our ESG services help businesses implement efficient, sustainable practices.</p>
        <h2>Our ESG Services</h2>
        <p><strong>- Sustainability Strategy :</strong> We help develop customised sustainability strategies aligned with your vision and goals including science-based targets, materiality assessment, and integrating sustainability.</p>
        <p><strong>- ESG Reporting :</strong> We offer end-to-end support in sustainability reporting as per (regulations). This includes identifying metrics, data analysis, benchmarking and report preparation.</p>
        <p><strong>- Stakeholder Engagement :</strong> We facilitate stakeholder mapping and engagement through surveys, focus groups etc. to incorporate their priorities into your ESG strategy.</p>
        <p><strong>- ESG Rating Improvement :</strong> We review your ESG performance and provide recommendations to improve ratings and rankings.</p>
        <p><strong>- Net Zero Transition :</strong> We provide advisory and roadmaps to help you transition towards net zero emissions in line with climate science.</p>
        <p><strong>- ESG Training and Assurance :</strong> We build ESG capabilities within your organization through training. We also provide independent assurance of ESG disclosures as per standards.</p>
        <p><strong>- Our Commitment to Sustainability:</strong> We recognise climate change is a global issue requiring collective action. As a digital services company, we looked inward first to reduce our own CO2 emissions.</p>
        <p>We developed a website carbon calculator to estimate emissions based on site size, coding, images, data centers, and hardware/software. We are constantly refining this tool to improve accuracy.</p>
        <p>Sustainability is a core value we integrate into all our work. Let us help you drive positive change.</p>
        <p> <NavLink to="/"><strong>Contact us</strong></NavLink> to begin your ESG journey today!</p>
      </div>
      </>
    )
  }
}
