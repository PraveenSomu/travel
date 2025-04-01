import React, { useState } from "react";
import axios from "axios";
import "../StyleSheets/Contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend endpoint
      const response = await axios.post(
        "http://localhost:5000/contact",
        formData
      );
      console.log(response.data); // Log the response data
      // Handle success, maybe show a success message to the user
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error, maybe show an error message to the user
    }
  };

  return (
    <>
    
      <div className="contact-form-container row">
        <div className="col-lg-6 form-box">
          <form onSubmit={handleSubmit}>
            <div className="">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="subject">Subject:</label>
              <input
                type="subject"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <label htmlFor="message">Message:</label>
            <input
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="message-box" // Assign the class name here
              required
            />

            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div className="col-lg-6 form-box1">

          <div className="adress-box d-flex">
           <i class="bi bi-house-heart-fill"></i>
            <div>
              <h4>Punjai puliampatti</h4>
              <p>Erode - 638 459</p>
            </div>
          </div>
          <div className="adress-box d-flex">
          <i class="bi bi-phone-fill"></i>
            <div>
              <h4>+91 9345751657</h4>
              <p>Mon To Sat (9am to 7 pm)</p>
            </div>
          </div>
          <div className="adress-box d-flex">
          <i class="bi bi-envelope-paper-heart-fill"></i>
            <div>
              <h4>spaceworks567@gmail.com</h4>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        

        </div>
      </div>
    </>
  );
};

export default ContactForm;
