import React from 'react'
import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

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

            <div class="input-group crbncalctr">
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
              <img className="logo" src="./images/cloud.PNG" alt="cloud"/>
              <h4>Green Cloud</h4>
              <p>Empowering Growth Across the Digital Landscape. In a data-driven world, we tackle the challenge of sustainable data storage. Our eco-friendly Green Cloud platform offers efficient and secure storage tailored to Healthcare, Government Agencies, and E-Commerce. Reduce your carbon footprint while ensuring data security.</p>
              <button type="button" className="learnMoreButton">&#129154;</button>
            </div>
            <div className="card2">
              <img className="logo" src="./images/subcriptions.PNG" alt="subcriptions"/>
              <h4>Business Subscription Solutions</h4>
              <p>Embrace the Future of Business. Experience seamless connectivity, unmatched security, and real-time monitoring for optimal operations and sustainable growth. Our advanced subscription solutions empower your business in the digital era, keeping you ahead of the competition.</p>
              <button type="button" className="learnMoreButton">&#129154;</button>
            </div>
            <div className="card3">
              <img className="logo" src="./images/digitalmarketting.PNG" alt="digitalmarketting"/>
              <h4>Digital Marketing</h4>
              <p>Navigating the Dynamic Digital Landscape. From online advertising to social networks, we tailor your digital strategy for success. Discover effective tools and platforms aligned with your unique goals. Let us guide you towards triumph in the fast-paced world of digital marketing.</p>
              <button type="button" className="learnMoreButton">&#129154;</button>
            </div>
          </div>
          <div className="box2">
            <div className="card4">
              <img className="logo" src="./images/itsolution.PNG" alt="itsolution"/>
              <h4>IT Solutions</h4>
              <p>Transforming Your Business with Seamless Technology. Experience comprehensive IT services, from strategic planning to implementation and support. Our robust solutions offer unmatched connectivity and real-time monitoring for optimal operations, simplifying your business processes. </p>
              <button type="button" className="learnMoreButton">&#129154;</button>
            </div>
            <div className="card5">
              <img className="logo" src="./images/esg.PNG" alt="esg"/>
              <h4>Sustainability and ESG Consultancy</h4>
              <p>Driving Positive Impact. Gain expert guidance in Environmental, Social, and Governance practices. Navigate sustainability complexities, enhance brand reputation, and unlock long-term value. Together, we create a sustainable future for your business and the world.</p>
              <button type="button" className="learnMoreButton">&#129154;</button>
            </div>
            <div className="card6">
              <img className="logo" src="./images/brandconsultancy.PNG" alt="brandconsultancy"/>
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
              <img className="logo" src="./images/contentmrktng.PNG" alt="contentmrktng" style={{height:70 }}/>
              <h4>Content Marketing</h4>
              <p>We create captivating content that sells! Our writers are here to tell your brand's story which engages the audience and drives action. </p>
              <button type="button" className="learnMoreButton">&#129154;</button>
            </div>
            <div className="card2">
              <img className="logo" src="./images/digital.PNG" alt="digital"/>
              <h4>Digital PR</h4>
              <p>Make headlines that echo! Our PR experts boost your brand's visibility, credibility and conversations across the digital world.</p>
              <button type="button" className="learnMoreButton">&#129154;</button>
            </div>
            <div className="card3">
              <img className="logo" src="./images/performance.PNG" alt="performancemarketting"/>
              <h4>Performance Marketing</h4>
              <p>Skyrocket to success! Our data-driven strategies fuel remarkable growth and deliver a fantastic return on investment (ROI).</p>
              <button type="button" className="learnMoreButton">&#129154;</button>
            </div>
          </div>
          <div className="box2">
            <div className="card4">
              <img className="logo" src="./images/digitalmarketting.PNG" alt="digitalmarketting" style={{height:50 }}/>
              <h4>Social Media</h4>
              <p>Likes to love, your social journey starts here! Connect, engage, and build a loyal community with the power of social media.</p>
              <button type="button" className="learnMoreButton">&#129154;</button>
            </div>
            <div className="card5">
              <img className="logo" src="./images/videoprductn.PNG" alt="videoprductn"/>
              <h4>Video Production</h4>
              <p>Lights, camera, action! Turn your vision into captivating stories. Our visually stunning and emotionally compelling videos take your brand to new heights.</p>
              <button type="button" className="learnMoreButton">&#129154;</button>
            </div>
            <div className="card6">
              <img className="logo" src="./images/webapp.PNG" alt="webapp" style={{height:30 }}/>
              <h4>Web & APP Design</h4>
              <p>Crafting experiences beyond compare. Step into a world of seamless design that delivers exceptional user experiences.</p>
              <button type="button" className="learnMoreButton">&#129154;</button>
            </div>
          </div>
          
        </div>
    </>
  );
}

export default ReactSimplyCarouselExample;

