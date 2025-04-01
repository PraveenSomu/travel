import React from "react";
import "../StyleSheets/Blog.css";

import blog1 from "../assets/blog1-min.jpg";
import blog2 from "../assets/blog2-min.jpg";
import blog3 from "../assets/blog3-min.jpg";
import blog4 from "../assets/blog4-min.jpg";
import Footer from "../Components/footer";

const Blog = () => {
  return (
    <>
      <section>
        <div className="blog-bkg">
          <div className="head3">
            <h1>Blog..</h1>
          </div>
        </div>
        <div className="row">
          <div className="container col-lg-8">
            <div className="blog-box">
              <img src={blog1} alt="blog image" />
              <h2>Google inks pact for new 35-storey office</h2>
              <p>
                That dominion stars lights dominion divide years for fourth have
                don't stars is that he earth it first without heaven in place
                seed it second morning saying.
              </p>
            </div>
            <div className="blog-box">
              <img src={blog2} alt="blog image" />
              <h2>Capturing Moments, Creating Memories</h2>
              <p>
              Although words alone cannot create a photograph, inspirational quotations about photography serve as more than simply a backdrop for popular, trending Instagram images.
              </p>
            </div>
            <div className="blog-box">
              <img src={blog3} alt="blog image" />
              <h2>Your Dream Party, Our Passion</h2>
              <p>
              Even if you’re not an avid party-goer, pretty much everyone in the world loves celebrations and festivities.
              </p>
            </div>
            <div className="blog-box">
              <img src={blog4} alt="blog image" />
              <h2>Weaving Dreams into Reality</h2>
              <p>
              Every couple has a story to tell that makes them unique and adorable. However, sometimes, you need the right words to tell these stories or to express your emotions.
              </p>
            </div>
          </div>
          <div className="blog-cont col-lg-4">
            <div className="blog-box1">
              <h2>Responsibility</h2>
              <hr />
              <ul>
                <li>Resauant food (37) </li>
                <li>Travel News (10)</li>
                <li>Modern Technology (03)</li>
                <li>product (11)</li>
                <li>Inspiration (21)</li>
                <li>HealthCare (19)</li>
              </ul>
            </div>
            <div className="blog-box1">
              <h2>Recent Post</h2>
              <hr />
              <div className="recent-box d-flex">
                <img src={blog1} alt="blog images" />
                <div>
                  <h4>From life was you fish...</h4>
                  <p>January 12, 2019</p>
                </div>
              </div>
              <div className="recent-box d-flex">
                <img src={blog2} alt="blog images" />
                <div>
                  <h4>The Amazing Hubble</h4>
                  <p>02 Hours ago</p>
                </div>
              </div>
              <div className="recent-box d-flex">
                <img src={blog3} alt="blog images" />
                <div>
                  <h4>Astronomy Or Astrology</h4>
                  <p>03 Hours ago</p>
                </div>
              </div>
              <div className="recent-box d-flex">
                <img src={blog4} alt="blog images" />
                <div>
                  <h4>Asteroids telescope</h4>
                  <p>Feb 28, 2020</p>
                </div>
              </div>
              
            </div>

            <div className="blog-box2 ">
              <h2>Tag Clouds</h2>
              <hr />
              <ul>
                <li>Project</li>
                <li>Love</li>
                <li>technology</li>
                <li>travel</li>
                <li>Restaurant</li>
                <li>Life Style</li>
                <li>Design</li>
                <li>illustration</li>
              </ul>
            </div>



          </div>
        </div>
        <Footer/>
      </section>
  
    </>
  );
};

export default Blog;
