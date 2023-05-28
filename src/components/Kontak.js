import React from "react";
import "./Kontak.css";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Kontak = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lc8gaul",
        "template_hdcc9jk",
        form.current,
        "dvOwnaw4VsspEZ6S7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="kontak-container">
      <video src="../videos/video-1.mp4" autoPlay loop muted />
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="user_name"
          required
          placeholder="Enter your name"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="user_email"
          required
          placeholder="Enter your email"
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Enter your message"
        ></textarea>

        <button type="submit">Submit</button>
      </form>

      <div className="social">
        <h1>Socials</h1>

        <ul className="social-icons">
          <li className="icon youtube">
            <a
              href="https://youtube.com/@3AMTRIMAMU"
              target="_blank"
              rel="noreferrer"
            >
              <span className="tooltip">Youtube</span>
              <span>
                <i className="fab fa-youtube"></i>
              </span>
            </a>
          </li>

          <li className="icon facebook">
            <a
              href="https://www.facebook.com/profile.php?id=100081443119310"
              target="_blank"
              rel="noreferrer"
            >
              <span className="tooltip">Facebook</span>
              <span>
                <i className="fab fa-facebook-f"></i>
              </span>
            </a>
          </li>

          <li className="icon twitter">
            <a
              href="https://twitter.com/VaLine3AM?t=kWNAXqfaGRN3z4N9jmkHqw&s=09"
              target="_blank"
              rel="noreferrer"
            >
              <span className="tooltip">Twitter</span>
              <span>
                <i className="fab fa-twitter"></i>
              </span>
            </a>
          </li>

          <li className="icon instagram">
            <a
              href="https://instagram.com/valine3am?igshid=MzNlNGNkZWQ4Mg=="
              target="_blank"
              rel="noreferrer"
            >
              <span className="tooltip">Instagram</span>
              <span>
                <i className="fab fa-instagram"></i>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Kontak;
