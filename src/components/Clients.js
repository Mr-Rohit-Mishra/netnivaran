import React, { Component } from 'react'

export default class clients extends Component {
  render() {
    return (
      
      <div className="clientsection">
        <h2>Celebrating Sustainability & Impact.</h2>
        <p>20 Years, 1400 Valued Customers, and a Commitment to Change!</p>
        <p>At NetNivaran, success is more than numbers—it's about the relationships we cherish, the positive impact we create, and the happiness we bring to our clients and partners. As we reflect on our journey, we embrace sustainability with gratitude.</p>
        <p>In showcasing our clients' logos, we faced a dilemma. We wanted to display them proudly, but we also recognized the environmental consequences of large file sizes. So, we took action.</p>
        <p>Each customer logo, a mere 50KB, may seem small. But multiplied by 1400, it amounts to a staggering 70MB! Imagine the carbon emissions if that file were downloaded 10,00,000 times in a month—enough to fill a room with smog.</p>
        <p>With deep gratitude, we thank you for being part of our journey. Together, let's continue on this path of sustainability, making a meaningful impact every step of the way.</p>
        <img src={process.env.PUBLIC_URL + '/images/NetNivaranClients.webp'} alt="allclients" className="clientimg"/>
      </div>
    
    )
  }
}
