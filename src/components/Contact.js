// Contact.js
import React from 'react';
import '../styles/Contact.scss';

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <h2 className="section__title">Get In Touch</h2>
      <p className="contact__text">
        I'm currently seeking new opportunities and would love to hear from you. Whether you have a question or just want to say hi, feel free to reach out!
      </p>
      <a href="mailto:shreyasomdale.sknscoe.comp@gmail.com" className="contact__email-button">Say Hello</a>
    </section>
  );
};
export default Contact;