import React from 'react';
import '../styles/Contact.scss';

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <h2 className="section__title">Get In Touch</h2>
      <div className="contact__content">
        <p>
          My inbox is always open. Whether you have a question, a potential opportunity, or just want to say hi, I'll do my best to get back to you!
        </p>
        <a href="mailto:shreyasomdale.sknscoe.comp@gmail.com" className="cta-button primary">
          Say Hello
        </a>
      </div>
    </section>
  );
};
export default Contact;