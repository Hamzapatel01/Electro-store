// src/Contact.js

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css"; // Import custom CSS for additional styling

const Contact = () => {
  // State for handling form inputs
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    // Add form submission logic here, like sending the data to a server
    console.log("Form submitted:", { name, lastName, email, message });
    setSubmitted(true); // Set submitted state to true after submission
  };

  return (
    <div className="contact-container d-flex align-items-center justify-content-center">
      {submitted ? (
        <div className="alert alert-success text-center" role="alert">
          Thank you for your message! We will get back to you shortly.
        </div>
      ) : (
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2>Contact us</h2>
            <p>
              Need to get in touch with us? Either fill out the form with your
              inquiry or find the department email you'd like to contact below.
            </p>
            <a href="mailto:electrostore@example.com">Electrostore email</a>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="row mb-3">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name*"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name*"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="What can we help you with?"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Contact;
