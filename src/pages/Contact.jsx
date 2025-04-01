import Footer from "../Components/footer";
import "../StyleSheets/Contact.css";
import ContactForm from "./Contactform";


const Contact = () => {
  return (
    <>
      <section>
        <div className="contact-bkg">
          <div className="head3">
            <h1>Contact</h1>
          </div>
        </div>
        <iframe
          id="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.795097190197!2d77.16904337356078!3d11.349671848361554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8e13e99efa4df%3A0x1388d6d970ff0868!2sPraveenkumar%20Home!5e0!3m2!1sen!2sin!4v1734948679825!5m2!1sen!2sin"
          width="600"
          height="450"
          allowfullscreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <ContactForm/>
        <Footer/>

       
      </section>
    </>
  );
};

export default Contact;
