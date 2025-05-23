import { useRef } from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import "../css/component/Email.scss";

export const Email = () => {
  const form = useRef();



  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    setName(''); // Clear the input field
    setEmail(''); // Clear the input field
    setMessage('');
  };

  const handleChange = (event) => {
    let val = event.target.value;
    event.preventDefault();
    switch (event.target.placeholder) {
      case "Name":
        setName(val);
        break;
      case "Email":
        setEmail(val);
        break;
      case "Message":
        setMessage(val);
        break;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8im9bgi', 'template_1br69cf', form.current, {
        publicKey: '4BEcWHQn9mDB1KYUf',

      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    handleSubmit();

  };
  return (

    <form id="form" ref={form} onSubmit={sendEmail} >
      <input className="form_input"
        placeholder='Name'
        type="text"
        value={name}
        onChange={handleChange}
        name="name" required />
      <br />
      <br />
      <input
        className="form_input"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        placeholder='Email'
        required />
      <br />
      <br />

      <textarea
        id="data"
        name="message"
        value={message}
        onChange={handleChange}
        placeholder='Message' required />
      <br />
      <br />

      <input className="form_input" type="submit" value="Send" />
    </form >
  );
};

export default Email;