import React from "react";
import "../StyleSheets/about.css";
import Footer from "../Components/footer";

import flight from "../assets/flight.jpg";

import png2 from "../assets/png2.png";
import png3 from "../assets/png3.png";
import png4 from "../assets/png4.png";
import png1 from "../assets/png1.png";




const About = () => {
  return (
    <>
      <section>
        <div className="about-bg col-md-6">
          <div className="head1">
            <h1>About The Map Adventures</h1>
            <h6>ALEADERINCLIENT-FOCUSED BUSINESS TRAVEL MANAGEMENT</h6>
          </div>
        </div>
        <div className="head-about">
          <p>
            <span>------------</span> "Established in 1975, TravelStore is
            unique in being an employee-owned company. Our team of dedicated,
            customer-focused travel professionals are invested in the success of
            your business, and demonstrate their passion for service every day."
          </p>
        </div>
        <div className="company row row-cols-1 row-cols-lg-2">
          <div className="cols">
            <div className="company-box"></div>
            <div className="company-box1">
              <img src={flight} alt="" />
            </div>
          </div>
          <div className="cols company-profile">
            <h1>Company Profile</h1>
            <p>
              The Map Adventure is the largest independently owned travel agency
              headquartered in California, and consistently ranked among the top
              50 largest in the United States.
            </p>
            <h3>Our Mission Statement</h3>
            <p>
              "We are an employee-owned company with a passion for providing
              exemplary customer service, leveraging our expertise and
              technology to deliver innovative travel solutions in a gratifying
              work environment."
            </p>
          </div>
        </div>
        <div className="head2">
          <h1>What Makes Us Different..</h1>
        </div>
        <div className="award row row-cols-1 row-cols-md-2 ">
          <div className="award-box cols">
            <div className="award-sml-box">
              <img src={png4} alt="" />
              <h2>Employee-Owned</h2>
              <p>
                We are unique being an employee-owned travel agency, with a high
                bar for our integrity and dedication to customer service. Our
                strong company culture is anchored by our mission and values.
              </p>
            </div>
          </div>
          <div className="award-box cols">
            <div className="award-sml-box">
              <img src={png3} alt="" />
              <h2>Award-Winning</h2>
              <p>
                Our award-winning company consistently ranks among the best
                agencies in the country (Travel Weekly, Business Travel Weekly).
                Our passion for our profession has resulted in being named
                multiple years as one of the "Best Places To Work" in Los
                Angeles County and Sacramento.
              </p>
            </div>
          </div>
          <div className="award-box cols">
            <div className="award-sml-box">
              <img src={png2} alt="" />
              <h2>Engaged</h2>
              <p>
                Our management team is active on various travel advisory boards
                and committees for travel organizations, travel magazines (Afar,
                Travel+Leisure), major hotel brands, and airlines. We are
                engaged with our industry and our opinions continue to be sought
                across the broad spectrum of our industry.
              </p>
            </div>
          </div>
          <div className="award-box cols">
            <div className="award-sml-box">
              <img src={png1} alt="" />
              <h2>Connected</h2>
              <p>
                TravelStore is a top member of the prestigious Signature Travel
                Network, a highly regarded worldwide partnership allowing us to
                provide our customers unmatched benefits and additional value
                when you travel. We are a Premium Member of ASTA (American
                Society of Travel Advisors), CLIA (Cruise Line International
                Association) and an affiliate of BCD Travel.
              </p>
            </div>
          </div>
        </div>
        <div className="head2">
          <h1>Chairman's Message</h1>
          <p>After working for Lufthansa Airlines in Frankfurt, Nairobi and New York for six years, I moved to Los Angeles and opened The Map Adventure Inc. in 1975. We began as a boutique agency with a handful of employees writing paper airline tickets. Today we’ve transitioned to issuing e-tickets — one of the many advancements our industry has seen in the last 5+ years.</p>
          <p>Our first office was located near UCLA in Westwood Village, California, because I thought professors planning sabbaticals would make for great clientele. With a developing reputation in the travel industry, the company grew and I opened a second office in 1980, followed by more branches across the Golden State. </p>
          <p>As Chairman and [former] CEO of TravelStore, my goal has always been to make sure our company is operating with the most sophisticated technology, while ensuring we continue to deliver a personalized level of service to each of our clients.</p>
          <p>We have always been guided by values like humility, integrity and respect in how we work with each other and we have strived to treat others the way we wish to be treated. This is the philosophy that has brought us much success. As we look to the future, it gives me great confidence and pride to know that no matter how much the world may change, you can rely on TravelStore to act in accordance with these values.</p>
          <p>My sincere thanks to all of our professional agents and staff, the preferred suppliers we work with, and to our respected clients without whom our success would not be possible.</p>
        </div>
        <Footer/>
      
      
        
       
      </section>
    </>
  );
};

export default About;
