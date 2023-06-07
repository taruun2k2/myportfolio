import React, { useState, useEffect } from 'react';
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();

  useEffect(() => {
  return() => {
    setLetterClass('text-animate-hover')
  }
})

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_98ay8lp', 'template_7veehx9', form.current, 'y_uD9SUv3_TXLx3EI')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          I am passionate about taking on challenges that push the boundaries of my skills and expertise. If you have any other requests or questions, I am more than happy to assist you. Feel free to reach out, and let's discuss how we can collaborate to achieve remarkable results together.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="from_name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="from_email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
         Taruun,
          <br />
          Chennai,
          <br />
          603202 <br />
          India <br />
          <br />
          <span>taruun2k2@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[13.0827, 80.2707]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[13.0827, 80.2707]}>
              <Popup>Taruun lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
// 12.840814976027263, 80.06405008898466