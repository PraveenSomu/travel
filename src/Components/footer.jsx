import React from "react";
import "../StyleSheets/footer.css";
import insta1 from "../assets/wonder1.jpg"
import insta2 from "../assets/ind1.jpg"
import insta3 from "../assets/wonder3.jpg"
import insta4 from "../assets/maladiv6.jpg"
import insta5 from "../assets/wonder7.jpg"
import insta6 from "../assets/maladiv7.jpg"

const Footer = () => {  
  return (
    <>
      <section className="footer">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          <div className="head-box cols">
            <a className="foot-brand" href="#">
              The Map
              <span id="span1">Adventures</span>
            </a>
            <h6>
              5<sup>th</sup>Floor , Gandhinagar,{" "}
            </h6>
            <h6>Punjai Puliampatti,</h6>
            <h6>Erode(Dt)- 638459.</h6>
            <h6>+91 9345751657</h6>
            <h6 className="text-lowercase">praveensomu567@gmail.com</h6>
            <div className="links">
              <a href="https://www.facebook.com/login.php/" target="blank">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="https://web.whatsapp.com/" target="blank">
                <i class="bi bi-whatsapp"></i>
              </a>
              <a href="https://www.instagram.com/" target="blank">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="https://x.com/i/flow/login?lang=en" target="blank">
                <i class="bi bi-twitter"></i>
              </a>
              <a href="https://www.youtube.com/" target="blank">
                <i class="bi bi-youtube"></i>
              </a>
            </div>
          </div>
          <div className="head-box cols">
            <a className="foot-brand" href="the-map/destination">
              Popular destination
            </a>
            <div className="d-flex">
              <div className="cols head-6">
                <h6>World Wonder</h6>
                <h6>Maladives</h6>
                <h6>Brazil</h6>
                <h6>America</h6>
              </div>
              <div className="cols head-6">
                <h6>Indonesia</h6>
                <h6>Italy</h6>
                <h6>Switzerland</h6>
                <h6>England</h6>
              </div>
            </div>
          </div>
          <div className="head-box cols">
            <a className="foot-brand" href="#">Instagram</a>
              <div className="insta-box ">
                  <div className="insta-img cols d-flex">
                    <img src={insta1} alt="insta imgs" />
                    <img src={insta2} alt="insta imgs" />
                    <img src={insta3} alt="insta imgs" />
                  </div>
                  <div className="insta-img cols d-flex">
                    <img src={insta4} alt="insta imgs" />
                    <img src={insta5} alt="insta imgs" />
                    <img src={insta6} alt="insta imgs" />
                  </div>
              </div>
          </div>
        </div>
        <div className="col-lg-12">
          <hr />
          <a href="#" className='ibtn1' ><i class="fa fa-angle-double-up"></i></a>
          <div className='myname'>
            <h6>Desinged & Developed By Praveenn Copyright &copy; &#8482;</h6>
          </div>
        </div>

      </section>
    </>
  );
};

export default Footer;
