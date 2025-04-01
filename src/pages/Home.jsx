import React from "react";
import { Link } from "react-router-dom";
import Background from "../Components/bkg"


// popular images-----------
import wonder from "../assets/wonder1.jpg";
import Brazil from "../assets/brazil1.jpg";
import America from "../assets/America5.jpg";
import Indonesia from "../assets/ind3.jpg";
import Italy from "../assets/Italy1.jpg";
import Maladives from "../assets/Maladiv1.jpg";

//  Card images ------------
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import card4 from "../assets/card4.jpg";
import card5 from "../assets/card5.jpg";
import card6 from "../assets/card6.jpg";


import Recent1 from "../assets/bkg6.jpg";
import Recent2 from "../assets/america7.jpg";
import Recent3 from "../assets/maladiv4.jpg";
import Footer from "../Components/footer";



const Home = () => {
  return (
    <>
      <Background/>
      <section>
        <div className="homehead text-center">
          <h2>The Popular Destination </h2>
          <p className="text-center">
            Suffered alteration in some form, by injected humour or good day
            randomised booth anim 8-bit hella wolf moon beard words.
          </p>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 py-5 g-3">
          <div className="cols img-box text-center ">
            <img src={wonder} alt="world 7 wonder images" />
            <div className="home-box d-flex text-top">
              <Link to="the-map/destination" target="blank" className="stretched-link">
                World Wonders
              </Link>
              <h4>07 Places</h4>
            </div>
          </div>
          <div className="cols img-box text-center">
            <img src={Maladives} alt="destination images" />
            <div className="home-box d-flex text-top">
              <Link to="the-map/destination" target="blank" className="stretched-link">
                Maladives
              </Link>
              <h4>08 Places</h4>
            </div>
          </div>
          <div className="cols img-box text-center">
            <img src={Brazil} alt="destination images" />
            <div className="home-box d-flex text-top">
              <Link to="the-map/destination" target="blank" className="stretched-link">
                Brazil
              </Link>
              <h4>05 Places</h4>
            </div>
          </div>
          <div className="cols img-box text-center">
            <img src={America} alt="destination images" />
            <div className="home-box d-flex text-top">
              <Link to="the-map/destination" target="blank" className="stretched-link">
                America
              </Link>
              <h4>08 Places</h4>
            </div>
          </div>
          <div className="cols img-box text-center">
            <img src={Indonesia} alt="destination images" />
            <div className="home-box d-flex text-top">
              <Link to="the-map/destination" target="blank" className="stretched-link">
                Indonesia
              </Link>
              <h4>05 Places</h4>
            </div>
          </div>
          <div className="cols img-box text-center">
            <img src={Italy} alt="destination images" />
            <div className="home-box d-flex text-top">
              <Link to="the-map/destination" target="blank" className="stretched-link">
                Italy
              </Link>
              <h4>07 Places</h4>
            </div>
          </div>
          
        </div>
        <div className="homehead text-center">
          <h2>Popular Places</h2>
          <p className="text-center">
            We live in a wonderful world that is full of beauty, charm and
            adventure. There is no end to the adventures we can have if only we
            seek them with our eyes open.
          </p>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 py-5 g-3">
          <div className="cols card1 text-center">
            <div className="shadow">
              <img src={card1} alt="world 7 wonder images" />
              <div className="card-box text-start">
                <Link
                  to="https://en.wikipedia.org/wiki/Patagonia"
                  target="blank"
                >
                
                  Patagonia
                </Link>
                <h5>Argentina and Chile</h5>
                <small>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i> | 5678 review
                </small>
              </div>
            </div>
          </div>
          <div className="cols card1 text-center">
            <div className="shadow">
              <img src={card2} alt="world 7 wonder images" />
              <div className="card-box text-start">
                <Link
                  to="https://en.wikipedia.org/wiki/Canc%C3%BAn"
                  target="blank"
                  
                >
                 
                  Cancun
                </Link>
                <h5>Mexico</h5>
                <small>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i> | 6178 review
                </small>
              </div>
            </div>
          </div>
          <div className="cols card1 text-center">
            <div className="shadow">
              <img src={card3} alt="world 7 wonder images" />
              <div className="card-box text-start">
                <Link
                  to="https://en.wikipedia.org/wiki/Kyoto"
                  target="blank"
                 
                >
                  Kyoto
                </Link>
                <h5>Japan</h5>
                <small>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i> | 3123 review
                </small>
              </div>
            </div>
          </div>
          <div className="cols card1 text-center">
            <div className="shadow">
              <img src={card4} alt="world 7 wonder images" />
              <div className="card-box text-start">
                <Link
                  to="https://en.wikipedia.org/wiki/Santorini"
                  target="blank"
                 
                >
                  Santorini
                </Link>
                <h5>Greece</h5>
                <small>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i> | 978 review
                </small>
              </div>
            </div>
          </div>
          <div className="cols card1 text-center">
            <div className="shadow">
              <img src={card5} alt="world 7 wonder images" />
              <div className="card-box text-start">
                <Link
                  to="https://en.wikipedia.org/wiki/Peru"
                  target="blank"
                  
                >
                  
                  Peru
                </Link>
                <h5>Amazon rainforest</h5>
                <small>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i> | 1969 review
                </small>
              </div>
            </div>
          </div>
          <div className="cols card1 text-center">
            <div className="shadow">
              <img src={card6} alt="world 7 wonder images" />
              <div className="card-box text-start">
                <Link
                  to="https://en.wikipedia.org/wiki/Lisbon"
                  target="blank"
                  
                >
                  Lisbon
                </Link>
                <h5>Portugal</h5>
                <small>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i> | 876 review
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="homehead text-center">
          <Link to="the-map/destination" className="btn btn-outline-danger">
            More Places{" "}
          </Link>
        </div>
        <div className="video-box mx-auto">
          <h1>Enjoy Our Journey</h1>
          <div class="text-box">
            <a
              href="https://www.youtube.com/embed/7Dbuc6vIRnE?si=b3hawXZWPOC9rf2_"
              target="blank"
              class="btn btn-white btn-animate"
            >
              <i class="bi bi-play-circle" id="v-icon"></i>
            </a>
          </div>
        </div>
        <div className="features text-center row row-cols-1 row-cols-md-2 row-cols-lg-3 py-5 g-3">
          <div className="service cols">
            <i class="bi bi-train-front"></i>
            <h5>Comfortable Journey</h5>
            <p>
              The worst thing about being a tourist is having other tourists
              recognize you as a tourist.
            </p>
          </div>
          <div className="service cols">
            <i class="bi bi-house-door"></i>
            <h5>Luxuries Hotel</h5>
            <p>In the lap of luxury, every moment is precious.</p>
          </div>
          <div className="service cols">
            <i class="bi bi-globe-asia-australia"></i>
            <h5>Travel Guide</h5>
            <p>Travel becomes a strategy for accumulating photographs.</p>
          </div>
        </div>
        <div className="border border-2 border-danger rounded p-1 m-1 text-center">
          <h2>Read trusted reviews from our customers</h2>
          <div className="testimonial text-center row row-cols-1 row-cols-md-2 row-cols-lg-3 py-5 g-3">
            <div className="review ">
              <div className="review-box d-flex text-start align-items-center">
                <i class="bi bi-person-circle"></i>
                <h2>Sumithra Praveenn</h2>
              </div>
              <p className="text-start p-1">
              Hotels were very good except for 2 places. Also Trvel agent was immediatly change the hotel when we did not like. Cab driver was very good. His driving was smooth . Only thing need to improve the knowladge on the placess . Overall it was good.
              </p>
            </div>
            <div className="review ">
              <div className="review-box d-flex text-start align-items-center">
                <i class="bi bi-person-circle"></i>
                <h2>Silambarasan TR</h2>
              </div>
              <p className="text-start p-1">
              I recently had the pleasure of touring with Travel on Ease and had a fantastic experience with my family! The tour was well-organized, and everything was delivered as promised. The team was professional, friendly, and ensured our trip was smooth and enjoyable. Overall, I'm very satisfied with the service and would definitely recommend others. 5/5 stars!
              </p>
            </div>
            <div className="review ">
              <div className="review-box d-flex text-start align-items-center">
                <i class="bi bi-person-circle"></i>
                <h2>kayadu lohar</h2>
              </div>
              <p className="text-start p-1">
              All over trip was good. The hotels selected for stay didn’t have few basic amenities in them plus the food was not so good.The cab and driver was perfect. Everything was good expect the choice of hotels that Travel Triangle had selected for us were not upto the mark. I would rate my trip 9.9/10 overall.
              </p>
            </div>
          </div>
        </div>
        <div className="homehead text-center">
          <h2>Recent Trips</h2>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 py-5 g-3">
          <div className="cols card1 text-center">
            <div className="shadow">
              <img src={Recent1} alt="world 7 wonder images" />
              <div className="card-box text-start">
                <h6>Feb 14,2024</h6>
                <p>Dubai’s stunning skyline, the desert, and the sparkling Arabian Gulf.</p>
              </div>
            </div>
          </div>
          <div className="cols card1 text-center">
            <div className="shadow">
              <img src={Recent2} alt="world 7 wonder images" />
              <div className="card-box text-start">
                <h6>Jan 12,2024</h6>
                <p>"America's most famous house was designed in 1792 by Irish architect James Hoban</p>
              </div>
            </div>
          </div>
          <div className="cols card1 text-center">
            <div className="shadow">
              <img src={Recent3} alt="world 7 wonder images" />
              <div className="card-box text-start">
                <h6>Feb 28,2024</h6>
                <p>Venture to sights like Addu Nature Park as you discover the local area in Hithadhoo.</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Home;
