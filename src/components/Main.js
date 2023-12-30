import React from 'react'
import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import{NavLink}from "react-router-dom";







function ReactSimplyCarouselExample() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <>
      <div className="carousel-container">
        <ReactSimplyCarousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={1}
          itemsToScroll={1}
          forwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              margin: '-40px',
              alignSelf: 'center',
              background: 'black',
              border: '2px solid white',
              borderRadius: '50%',
              color: 'white',
              cursor: 'pointer',
              fontSize: '20px',
              height: 30,
              lineHeight: 1,
              textAlign: 'center',
              width: 30,
              zIndex: 9,
            },
            children: <span>{`>`}</span>,
          }}
          backwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              margin: '-40px',
              alignSelf: 'center',
              background: 'black',
              border: '2px solid white',
              borderRadius: '50%',
              color: 'white',
              cursor: 'pointer',
              fontSize: '20px',
              height: 30,
              lineHeight: 1,
              textAlign: 'center',
              width: 30,
              zIndex: 9,
            },
            children: <span>{`<`}</span>,
          }}
          responsiveProps={[
            {
              itemsToShow: 1,
              itemsToScroll: 1,
              minWidth: 1920,
            },
          ]}
          speed={400}
          easing="linear"
        >

          <div className="slide slide1">
            <h4>Empowering Growth Across</h4>
            <p>The Sustainable Digital Landscape...</p>
            <button type="button" className="learnMoreButton">Learn More</button>
          </div>
          <div className="slide slide2">
            <h4>Digital Marketing</h4>
            <p>We help build your Trade Mark with Technology, Marketing & Creativity</p>
            <button type="button" className="learnMoreButton">Learn More</button>
          </div>
          <div className="slide slide3">
            <h4>Lead the way to a Sustainable Digital Era with Green Tech Solutions.</h4>
            <p>We combine Technology, Creativity, and Values to Create a sustainable greener today and a better tomorrow.</p>
            <button type="button" className="learnMoreButton">Learn More</button>
          </div>
          <div className="slide slide4">
            <h4>20 Years</h4>
            <p> 1400 Valued Customers, and a Commitment to Impact!</p>
            <button type="button" className="learnMoreButton">Learn More</button>
          </div>
          <div className="slide slide5">
            <h4>Measure, Reduce & Make<br/> an Impact</h4>
            <p>Take Charge of Your Carbon Footprint Measure,</p>
            <p>Discover the Environmental Impact of Your Online Presence</p>
            <p>and Transform Your Sustainability Journey.</p>
            <p>Calculate yours Website Emission Now...</p>

            <div className="input-group crbncalctr">
		  				<input type="url" name="url" className="form-control rounded" placeholder="Enter Your Url..." aria-label="Search" aria-describedby="search-addon"/>
		  				<button type="submit" className="submitButton" target="_blank">Search</button>
		  			</div>
          </div>

        </ReactSimplyCarousel>
        
      </div>
      <div className="section">
          <h2>Empowering Growth Across The Sustainable <br/>Digital Landscape...</h2>
          
          <div className="box1">
            <div className="card1">
              <img className="logo" src={process.env.PUBLIC_URL + '/images/cloud.png'} alt="cloud"/>
              <h4>Green Cloud</h4>
              <p>Empowering Growth Across the Digital Landscape. In a data-driven world, we tackle the challenge of sustainable data storage. Our eco-friendly Green Cloud platform offers efficient and secure storage tailored to Healthcare, Government Agencies, and E-Commerce. Reduce your carbon footprint while ensuring data security.</p>
              <button type="button" className="learnMoreButton">&#129154;</button>
            </div>
            <div className="card2">
              <img className="logo" src={process.env.PUBLIC_URL + '/images/subcriptions.png'} alt="subcriptions"/>
              <h4>Business Subscription Solutions</h4>
              <p>Embrace the Future of Business. Experience seamless connectivity, unmatched security, and real-time monitoring for optimal operations and sustainable growth. Our advanced subscription solutions empower your business in the digital era, keeping you ahead of the competition.</p>
              <button type="button" className="learnMoreButton">&#129154;</button>
            </div>
            <div className="card3">
              <img className="logo" src={process.env.PUBLIC_URL + '/images/digitalmarketting.png'} alt="digitalmarketting"/>
              <h4>Digital Marketing</h4>
              <p>Navigating the Dynamic Digital Landscape. From online advertising to social networks, we tailor your digital strategy for success. Discover effective tools and platforms aligned with your unique goals. Let us guide you towards triumph in the fast-paced world of digital marketing.</p>
              <button type="button" className="learnMoreButton">&#129154;</button>
            </div>
          </div>
          <div className="box2">
            <div className="card4">
              <img className="logo" src={process.env.PUBLIC_URL + '/images/itsolution.png'} alt="itsolution"/>
              <h4>IT Solutions</h4>
              <p>Transforming Your Business with Seamless Technology. Experience comprehensive IT services, from strategic planning to implementation and support. Our robust solutions offer unmatched connectivity and real-time monitoring for optimal operations, simplifying your business processes. </p>
              <button type="button" className="learnMoreButton">&#129154;</button>
            </div>
            <div className="card5">
              <img className="logo" src={process.env.PUBLIC_URL + '/images/esg.png'} alt="esg"/>
              <h4>Sustainability and ESG Consultancy</h4>
              <p>Driving Positive Impact. Gain expert guidance in Environmental, Social, and Governance practices. Navigate sustainability complexities, enhance brand reputation, and unlock long-term value. Together, we create a sustainable future for your business and the world.</p>
              <button type="button" className="learnMoreButton">&#129154;</button>
            </div>
            <div className="card6">
              <img className="logo" src={process.env.PUBLIC_URL + '/images/brandconsultancy.png'} alt="brandconsultancy"/>
              <h4>Brand Consultancy</h4>
              <p>Elevate Your Brand for Success. Empower your brand with data-driven analysis and strategic positioning. Enhance consumer perception across multiple channels, and sustain market dominance. Lead the change with our comprehensive brand strategies.  </p>
              <button type="button" className="learnMoreButton">&#129154;</button>
            </div>
          </div>
          
        </div>
        <div className="section">
          <h2>Digital Marketing</h2>
          <p>We help build your Trade Mark with Technology, Marketing & Creativity</p>
          <div className="box1">
            <div className="card1">
              <img className="logo" src={process.env.PUBLIC_URL + '/images/contentmrktng.png'} alt="contentmrktng" style={{height:70 }}/>
              <h4>Content Marketing</h4>
              <p>We create captivating content that sells! Our writers are here to tell your brand's story which engages the audience and drives action. </p>
              <button type="button" className="learnMoreButton">&#129154;</button>
            </div>
            <div className="card2">
              <img className="logo" src={process.env.PUBLIC_URL + '/images/digital.png'} alt="digital"/>
              <h4>Digital PR</h4>
              <p>Make headlines that echo! Our PR experts boost your brand's visibility, credibility and conversations across the digital world.</p>
              <button type="button" className="learnMoreButton">&#129154;</button>
            </div>
            <div className="card3">
              <img className="logo" src={process.env.PUBLIC_URL + '/images/performance.png'} alt="performancemarketting"/>
              <h4>Performance Marketing</h4>
              <p>Skyrocket to success! Our data-driven strategies fuel remarkable growth and deliver a fantastic return on investment (ROI).</p>
              <button type="button" className="learnMoreButton">&#129154;</button>
            </div>
          </div>
          <div className="box2">
            <div className="card4">
              <img className="logo" src={process.env.PUBLIC_URL + '/images/digitalmarketting.png'} alt="digitalmarketting" style={{height:50 }}/>
              <h4>Social Media</h4>
              <p>Likes to love, your social journey starts here! Connect, engage, and build a loyal community with the power of social media.</p>
              <button type="button" className="learnMoreButton">&#129154;</button>
            </div>
            <div className="card5">
              <img className="logo" src={process.env.PUBLIC_URL + '/images/videoprductn.png'} alt="videoprductn"/>
              <h4>Video Production</h4>
              <p>Lights, camera, action! Turn your vision into captivating stories. Our visually stunning and emotionally compelling videos take your brand to new heights.</p>
              <button type="button" className="learnMoreButton">&#129154;</button>
            </div>
            <div className="card6">
              <img className="logo" src={process.env.PUBLIC_URL + '/images/webapp.png'} alt="webapp" style={{height:30 }}/>
              <h4>Web & APP Design</h4>
              <p>Crafting experiences beyond compare. Step into a world of seamless design that delivers exceptional user experiences.</p>
              <button type="button" className="learnMoreButton">&#129154;</button>
            </div>
          </div>
          
        </div>
        <div className="testimonialcontainer">
          <h2>TESTIMONIALS</h2>
        <ReactSimplyCarousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={3}
          itemsToScroll={1}
          forwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              margin: '20px',
              alignSelf: 'center',
              background: 'black',
              border: '2px solid white',
              borderRadius: '50%',
              color: 'white',
              cursor: 'pointer',
              fontSize: '20px',
              height: 30,
              lineHeight: 1,
              textAlign: 'center',
              width: 30,
              zIndex: 9,
            },
            children: <span>{`>`}</span>,
          }}
          backwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              margin: '20px',
              alignSelf: 'center',
              background: 'black',
              border: '2px solid white',
              borderRadius: '50%',
              color: 'white',
              cursor: 'pointer',
              fontSize: '20px',
              height: 30,
              lineHeight: 1,
              textAlign: 'center',
              width: 30,
              zIndex: 9,
            },
            children: <span>{`<`}</span>,
          }}
          responsiveProps={[
            {
              itemsToShow: 3,
              itemsToScroll: 1,
              minWidth: 1326,
            },
          ]}
          speed={400}
          easing="linear"
        >

          <div className="testimonialslide1">
            <h4>Sona Menezes</h4>
            <h6>Executive Secretary to Mr. Arjun Wallia(Group Founder & Chairman, The Walsons Group)</h6>
            <p>We are happy with the services of NetNivaran. They have given us the necessary support. The team is efficient and prompt. We wish the team progress and look forward to working together in times to come.</p>
            <NavLink to="www.walsonsgroup.com" alt="weblink" target="blank" id="weblink">www.walsonsgroup.com</NavLink>
            <badge type="badge" className="testimonialbadge">
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/whitestar.png'} alt="star"/>
            </badge>
          </div>
          <div className="testimonialslide2">
            <h4>Ramesh K Khattar</h4>
            <h6>(Proprietor)Radiant Elastochem</h6>
            <p>First of all congratulations to you and your entire team for reaching a milestone of two decades of solutions providers and wish you all to complete many more in times to come. It has been really nice dealing with you all during my association of nineteen years and appreciate your dedication and keenness to surpass customers expectations by providing timely and excellent services with good communication skills and subject knowledge. Look forward being associated for longer times and convey our best wishes for your entire team for all times to come. Keep it up and stay blessed always.</p>
            <NavLink to="www.radiantelastochem.org" alt="weblink" target="blank" id="weblink">www.radiantelastochem.org</NavLink>
            <badge type="badge" className="testimonialbadge">
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
            </badge>
          </div>
          <div className="testimonialslide3">
            <h4>Neha Arora</h4>
            <h6>Assistant Manager Human Resources Virtuoso Staffing Solutions (P) Ltd</h6>
            <p>"NetNivaran has provided us with top-notch services and has been our preferred vendor for many years. In the past 5 years of our association, their team has been prompt in responding and highly committed to delivering seamless services. They have obliged to all our requests and have helped us with all our queries time and again. We recommend NetNivaran to anyone who is looking for reliable digital services.”</p>
            <NavLink to="www.virtuosorecruitment.com" alt="weblink" target="blank" id="weblink">www.virtuosorecruitment.com</NavLink>
            <badge type="badge" className="testimonialbadge">
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
            </badge>
          </div>
          <div className="testimonialslide4">
            <h4>Manu Arya</h4>
            <h6>Senior Manager| Information Technology Frog Cellsat Ltd</h6>
            <p>I would like to take this opportunity to express our sincerest gratitude for your exceptional support and partnership throughout the last 10 years.Your loyalty and commitment have been great in helping us reach this significant milestone. Thank you once again for your support and partnership. We look forward to many more years of success together.</p>
            <NavLink to="www.frogcellsat.com" alt="weblink" target="blank" id="weblink">www.frogcellsat.com</NavLink>
            <badge type="badge" className="testimonialbadge">
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
            </badge>
          </div>
          <div className="testimonialslide5">
            <h4>Ved Prakash Mishra</h4>
            <h6>(IT Manager ) Virola International</h6>
            <p>We have been using web services from NetNivaran for the past few years and are happy to see them grow</p>
            <NavLink to="www.virolaindia.com" alt="weblink" target="blank" id="weblink">www.virolaindia.com</NavLink>
            <badge type="badge" className="testimonialbadge">
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/whitestar.png'} alt="star"/>
            </badge>
          </div>
          <div className="testimonialslide6">
            <h4>Meena Jain</h4>
            <h6>Executive Assistant Ipower Batteries Pvt Ltd</h6>
            <p>We developed a great relationship with NetNivaran because of their dedicated support and unparalleled digital services.We appreciate NetNivaran's attention to details and creative approach to building our website.We have been using web services from NetNivaran for the past few years and are happy to see them grow. Peace of mind and easy working with the NetNivaran team. NetNivaran has our trust, it's been … year we have been associated with them.</p>
            <NavLink to="www.ipowerbatteries.in" alt="weblink" target="blank" id="weblink">www.ipowerbatteries.in</NavLink>
            <badge type="badge" className="testimonialbadge">
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
            </badge>
          </div>
          <div className="testimonialslide7">
            <h4>Maggie Gonsalves</h4>
            <h6>Executive Secretary to Mr. Arvind Khanna Umeed</h6>
            <p>Umeed has been associated with NetNivaran for the past many years and their services and the support staff has always been very supportive and dedicated with a quick response and solution. I wish them the very best for completion of 23 years and for their future.</p>
            <NavLink to="www.arvindkhanna.com" alt="weblink" target="blank" id="weblink">www.arvindkhanna.com</NavLink>
            <badge type="badge" className="testimonialbadge">
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
            </badge>
          </div>
          <div className="testimonialslide8">
            <h4>Maroof Hasan</h4>
            <h6>Sr. Manager-HR NF Infratech Service Pvt. Limited</h6>
            <p>We are highly satisfied with the quality of service and support provided by Netnivaran team.</p>
            <NavLink to="www.nfinfratech.com" alt="weblink" target="blank" id="weblink">www.nfinfratech.com</NavLink>
            <badge type="badge" className="testimonialbadge">
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
            </badge>
          </div>
          <div className="testimonialslide9">
            <h4>Shekhar Pathran</h4>
            <h6>(IT Manager ) Oilex Trading Pvt Ltd.</h6>
            <p>We maintained a great relationship with NetNivaran because of their dedicated support and unparalleled digital services. We appreciate NetNivaran’s attention to details and creative approach to building our website.We have been using web services from NetNivaran for the past 7-8 years and are happy to see them grow. Peace of mind and easy working with the NetNivaran team.NetNivaran has our trust, it's been … year we have been associated with them.</p>
            <NavLink to="www.oilexindia.in" alt="weblink" target="blank" id="weblink">www.oilexindia.in</NavLink>
            <badge type="badge" className="testimonialbadge">
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
            </badge>
          </div>
          <div className="testimonialslide10">
            <h4>Meraj Ahmed</h4>
            <h6>Executive Secretary to Director General (Indian Sugar Mills Association)</h6>
            <p>We developed a great relationship with NetNivaran because of their dedicated support and unparalleled digital services.NetNivaran has our trust, it's been about 15 years since we have been associated with them.</p>
            <NavLink to="www.indiansugar.com" alt="weblink" target="blank" id="weblink">www.indiansugar.com</NavLink>
            <badge type="badge" className="testimonialbadge">
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
              <img className="star" src={process.env.PUBLIC_URL + '/images/filledstar.png'} alt="star"/>
            </badge>
          </div>
        </ReactSimplyCarousel>
        
      </div>
    </>
  );
}

export default ReactSimplyCarouselExample;

