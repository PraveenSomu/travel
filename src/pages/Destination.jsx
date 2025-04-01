import React, { useState } from 'react'

import "../StyleSheets/Destination.css";
import "../StyleSheets/about.css";

// info pngs-----------------

import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

import beach1 from "../assets/beach1.jpg";
import beach2 from "../assets/beach2.jpg";
import beach3 from "../assets/beach3.jpg";
import beach4 from "../assets/beach4.jpg";

// world wonder images------------------

import wonder1 from "../assets/wonder1.jpg";
import wonder2 from "../assets/wonder2.jpg";
import wonder3 from "../assets/wonder3.jpg";
import wonder4 from "../assets/wonder4.jpg";
import wonder5 from "../assets/wonder5.jpg";
import wonder6 from "../assets/wonder6.jpg";
import wonder7 from "../assets/wonder7.jpg";

// Maladives ---------
import maladiv1 from "../assets/maladiv1.jpg"
import maladiv2 from "../assets/maladiv2.jpg"
import maladiv3 from "../assets/maladiv3.jpg"
import maladiv4 from "../assets/maladiv4.jpg"
import maladiv5 from "../assets/maladiv5.jpg"
import maladiv6 from "../assets/maladiv6.jpg"
import maladiv7 from "../assets/maladiv7.jpg"
import maladiv8 from "../assets/maladiv8.jpg"

// Brazil images----------
import brazil1 from "../assets/brazil1.jpg"
import brazil2 from "../assets/brazil2.jpg"
import brazil3 from "../assets/brazil3.jpg"
import brazil4 from "../assets/brazil4.jpg"
import brazil5 from "../assets/brazil5.jpg"
import brazil6 from "../assets/brazil6.jpg"

// America images-------------

import america1 from "../assets/america1.jpg"
import america2 from "../assets/america2.jpg"
import america3 from "../assets/america3.jpg"
import america4 from "../assets/america4.jpg"
import america5 from "../assets/america5.jpg"
import america6 from "../assets/america6.jpg"
import america7 from "../assets/america7.jpg"
import america8 from "../assets/america8.jpg"

// Indonaisa images ----------

import ind1 from "../assets/ind1.jpg"
import ind2 from "../assets/ind2.jpg"
import ind3 from "../assets/ind3.jpg"
import ind4 from "../assets/ind4.jpg"
import ind5 from "../assets/ind5.jpg"

// italy images -----------

import italy1 from "../assets/italy1.jpg"
import italy2 from "../assets/italy2.jpg"
import italy3 from "../assets/italy3.jpg"
import italy4 from "../assets/italy4.jpg"
import italy5 from "../assets/italy5.jpg"
import Footer from '../Components/footer';










const Destination = () => {
  const [showtab, setShowtab] = useState(1);

  const handletab = (e) => {
    setShowtab(e);
  };

  return (
    <>
      <section>
        <div className="des-bkg">
          <div className="head3">
            <h1>Our Destination!!</h1>
          </div>
        </div>
        <div className="head4">
          <h2>Travel Tips..</h2>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 py-5 g-3">
          <div className="tips cols">
            <img src={info1} alt="pngs" />
            <h2>Visa Information</h2>
            <p>
              Check visa requirements before traveling, ensuring a smooth entry
              and compliance with destination regulations.
            </p>
          </div>
          <div className="tips cols">
            <img src={info2} alt="pngs" />
            <h2>Health and Safety Tips</h2>
            <p>
              Prioritize health, stay hydrated, follow safety guidelines, and
              maintain personal hygiene for a secure journey.
            </p>
          </div>
          <div className="tips cols">
            <img src={info3} alt="pngs" />
            <h2>Currency and Tipping</h2>
            <p>
              Familiarize with local currency, consider customary tipping
              practices for respectful and seamless travel experiences.
            </p>
          </div>
        </div>
        <div className="desc-box">
          <div className="goa text-center row row-cols-1 row-cols-lg-2">
            <div className="cols tour-box">
              <img src={beach1} alt="couple pic" />
            </div>
            <div className="cols golden-box">
              <h3>Golden Sands Honeymoon Package</h3>

              <div className="row row-cols-2">
                <div className="img-box2 cols">
                  <div className="goa-box d-flex">
                    <div>
                      <i class="bi bi-clock-history"></i>
                    </div>
                    <div className="chat-box">
                      <h5>Duration</h5>
                      <h6>3 Nights 4 Days</h6>
                    </div>
                  </div>
                  <div className="goa-box d-flex">
                    <div>
                      <i class="bi bi-balloon-heart"></i>
                    </div>
                    <div className="chat-box">
                      <h5>Group Size</h5>
                      <h6>Unlimited</h6>
                    </div>
                  </div>
                  <div className="goa-box d-flex">
                    <div>
                      <i class="bi bi-chat-left-heart"></i>
                    </div>
                    <div className="chat-box">
                      <h5>Tour Type</h5>
                      <h6>Daily Tour</h6>
                    </div>
                  </div>
                </div>
                <div className="img-box-3 cols">
                  <img src={beach3} alt="couple imgs" />
                </div>
              </div>
            </div>
          </div>
          <div className="goa text-center row row-cols-1 row-cols-lg-2">
            <div className="cols tour-box">
              <img src={beach2} alt="couple pic" />
            </div>
            <div className="cols golden-box">
              <h3>Enchanting Special Tour</h3>

              <div className="row row-cols-2">
                <div className="img-box2 cols">
                  <div className="goa-box d-flex">
                    <div>
                      <i class="bi bi-clock-history"></i>
                    </div>
                    <div className="chat-box">
                      <h5>Duration</h5>
                      <h6>4 Nights 3 Days</h6>
                    </div>
                  </div>
                  <div className="goa-box d-flex">
                    <div>
                      <i class="bi bi-balloon-heart"></i>
                    </div>
                    <div className="chat-box">
                      <h5>Group Size</h5>
                      <h6>2 Couples</h6>
                    </div>
                  </div>
                  <div className="goa-box d-flex">
                    <div>
                      <i class="bi bi-chat-left-heart"></i>
                    </div>
                    <div className="chat-box">
                      <h5>Tour Type</h5>
                      <h6>Season</h6>
                    </div>
                  </div>
                </div>
                <div className="img-box-3 cols">
                  <img src={beach4} alt="couples img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="homehead text-center">
          <h2>The Popular Destination </h2>
        </div>
        <ul className="menubtn" id="tabcont">
          <li className="nav-item btn from-top btn0">
            <button
              className={showtab === 1 ? "nav-link active" : "nav-link"}
              onClick={() => handletab(1)}
            >
              World Wonder
            </button>
          </li>
          <li className="nav-item btn from-top btn0">
            <button
              className={showtab === 2 ? "nav-link active" : "nav-link"}
              onClick={() => handletab(2)}
            >
              Maladives
            </button>
          </li>
          <li className="nav-item btn from-top btn0">
            <button
              className={showtab === 3 ? "nav-link active" : "nav-link"}
              onClick={() => handletab(3)}
            >
              Brazil
            </button>
          </li>
          <li className="nav-item btn from-top btn0">
            <button
              className={showtab === 4 ? "nav-link active" : "nav-link"}
              onClick={() => handletab(4)}
            >
              America
            </button>
          </li>
          <li className="nav-item btn from-top btn0">
            <button
              className={showtab === 5 ? "nav-link active" : "nav-link"}
              onClick={() => handletab(5)}
            >
              Indonesia
            </button>
          </li>
          <li className="nav-item btn from-top btn0">
            <button
              className={showtab === 6 ? "nav-link active" : "nav-link"}
              onClick={() => handletab(6)}
            >
              Italy
            </button>
          </li>
        </ul>
        <div className="tab-content">
          <div
            id="menucont2"
            className={
              showtab === 1 ? "tab-pane fade show active" : "tab-pane fade show"
            }
          >
            <div className="head4">
              <h2>World Wonders..</h2>
              <h4>Combo..</h4>
              <button className="btn btn-primary">$1280</button>
              <small>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i> | 5678 review
              </small>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  py-1 g-5">
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={wonder1} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Chichén Itzá</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 618
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$480</button>
                </div>
              </div>
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={wonder2} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3> Taj Mahal</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 798
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$350</button>
                </div>
              </div>
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={wonder3} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3> Machu Picchu</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 745
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$450</button>
                </div>
              </div>
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={wonder4} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Colosseum</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 657
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$500</button>
                </div>
              </div>
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={wonder5} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Petra</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 726
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$400</button>
                </div>
              </div>
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={wonder6} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Giza Pyramids</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 511
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$300</button>
                </div>
              </div>
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={wonder7} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Great Wall of China</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 598
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$450</button>
                </div>
              </div>
            </div>
          </div>
          <div
            id="menucont2"
            className={
              showtab === 2 ? "tab-pane fade show active" : "tab-pane fade"
            }
          >
            <div className="head4">
              <h2>Maladives..</h2>
              <h4>Combo..</h4>
              <button className="btn btn-primary">$1730</button>
              <small>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i> | 8013 review
              </small>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  py-1 g-5">
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={maladiv1} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Banana Reef</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 788
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$630</button>
                </div>
              </div>
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={maladiv2} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Malé</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 545
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$590</button>
                </div>
              </div>
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={maladiv3} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Artificial Beach</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 845
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$340</button>
                </div>
              </div>
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={maladiv4} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Veligandu Maldives Resort</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 977
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$600</button>
                </div>
              </div>
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={maladiv5} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Maafushi</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 726
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$560</button>
                </div>
              </div>
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={maladiv6} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Fihalhohi Island</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 511
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$600</button>
                </div>
              </div>
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={maladiv7} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Alimatha Island</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 598
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$450</button>
                </div>
              </div>
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={maladiv8} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Gulhi Beach</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 598
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$450</button>
                </div>
              </div>
            </div>
          </div>
          <div
            id="menucont2"
            className={
              showtab === 3 ? "tab-pane fade show active" : "tab-pane fade"
            }
          >
            <div className="head4">
              <h2>Brazil..</h2>
              <h4>Combo..</h4>
              <button className="btn btn-primary">$1350</button>
              <small>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i> | 7308 review
              </small>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  py-1 g-5">
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={brazil1} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Christ the Redeemer</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 618
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$480</button>
                </div>
              </div>
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={brazil2} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Copacabana Beach</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 798
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$350</button>
                </div>
              </div>
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={brazil3} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Iguazu Falls</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 745
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$450</button>
                </div>
              </div>
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={brazil4} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Caves and Waterfalls</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 657
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$500</button>
                </div>
              </div>
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={brazil5} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Dunas de Genipabu</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 726
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$400</button>
                </div>
              </div>
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={brazil6} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Praia do Arpoador</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 511
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$300</button>
                </div>
              </div>
            </div>
          </div>
          <div
            id="menucont2"
            className={
              showtab === 4 ? "tab-pane fade show active" : "tab-pane fade"
            }
          >
            <div className="head4">
              <h2>America..</h2>
              <h4>Combo..</h4>
              <button className="btn btn-primary">$1980</button>
              <small>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i> | 10834 review
              </small>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  py-1 g-5">
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={america1} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Alcatraz Island</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 812
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$480</button>
                </div>
              </div>
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={america2} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Universal Studios Hollywood</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 748
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$550</button>
                </div>
              </div>
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={america3} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Central Park</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 455
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$850</button>
                </div>
              </div>
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={america4} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Mount Rushmore</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 756
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$580</button>
                </div>
              </div>
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={america5} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Statue of Liberty</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 796
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$490</button>
                </div>
              </div>
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={america6} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Sightseeing Cruise</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 901
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$380</button>
                </div>
              </div>
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={america8} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Top of the Rock</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 598
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$450</button>
                </div>
              </div>
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={america7} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Golden Gate Bridge</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 598
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$450</button>
                </div>
              </div>
            </div>
          </div>
          <div
            id="menucont2"
            className={
              showtab === 5 ? "tab-pane fade show active" : "tab-pane fade"
            }
          >
            <div className="head4">
              <h2>Indonesia..</h2>
              <h4>Combo..</h4>
              <button className="btn btn-primary">$1100</button>
              <small>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i> | 8978 review
              </small>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  py-1 g-5">
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={ind1} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Best of Ubud</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 618
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$480</button>
                </div>
              </div>
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={ind2} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Denpasar</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 798
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$350</button>
                </div>
              </div>
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={ind3} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Water Temples </h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 745
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$450</button>
                </div>
              </div>
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={ind4} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Kelingking Beach</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 657
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$500</button>
                </div>
              </div>
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={ind5} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Ijen Crater</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 726
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$400</button>
                </div>
              </div>
            </div>
          </div>
          <div
            id="menucont2"
            className={
              showtab === 6 ? "tab-pane fade show active" : "tab-pane fade"
            }
          >
            <div className="head4">
              <h2>Italy..</h2>
              <h4>Combo..</h4>
              <button className="btn btn-primary">$1660</button>
              <small>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i> | 8978 review
              </small>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  py-1 g-5">
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={italy1} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Pompeii, Amalfi Coast</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 618
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$480</button>
                </div>
              </div>
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={italy2} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Trastevere</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 798
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$350</button>
                </div>
              </div>
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={italy3} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Tuscan Countryside</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 745
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$450</button>
                </div>
              </div>
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={italy4} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Tower of Pisa</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 657
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$500</button>
                </div>
              </div>
              <div className="cols card1 text-center">
                <div className="shadow">
                  <img src={italy5} alt="world 7 wonder images" />
                  <div className="card-box text-start">
                    <h3>Doge's Palace</h3>
                    <small>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i> | 726
                      review
                    </small>
                  </div>
                  <button className="btn btn-primary">$400</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Destination;
