import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { firstName, lastName, email, message });
    // Reset form fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2>Connect with me!</h2>
        <p>
          If you have any questions or want to collaborate with me for any work or just want to talk to me, fill out this form and I will get back to you as soon as possible.
        </p>
      </div>
      <div className="contact-right">
        <form onSubmit={handleFormSubmit} className='form'>
          <p>Email</p>
          <label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <p>Message</p>
          <label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
