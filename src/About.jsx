import React from 'react';
import Button from './Button.jsx';
import zawanetLogo from './images/zawanet.png';
function About() {
  return (
    <div className="app-container">
      <div className="logo-container">
        <img
          src={zawanetLogo}
          alt="Zawanet Logo"
          style={{ width: '120px', height: 'auto', borderRadius: '28px' }}
        />
      </div>
      <h1>About Zawanet</h1>
      <p>
        Zawanet is your go-to Internet Service Provider in Iraq. We deliver the best
        internet performance, reliable connections, and top-notch customer service.
        Our mission is to keep you connected with speed, security, and consistency.
      </p>
      <Button text="Go Back ←" to="/" />
    </div>
  );
}

export default About;
