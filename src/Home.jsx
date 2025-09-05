import React from 'react';
import Button from './Button.jsx';
import zawanetLogo from './images/zawanet.png';

function Home() {
  return (
    <div className="app-container">
      <div className="logo-container">
        <img
          src={zawanetLogo}
          alt="Zawanet Logo"
          style={{ width: '120px', height: 'auto', borderRadius: '28px' }}
        />
      </div>
      <p>
        Welcome to Zawanet, your go-to Internet Service Provider for the best internet and Performance In All Of Iraq.
      </p>
      <Button text="Learn More →" to="/learnmore" />
      <Button text="Support →" to="/support" />
    </div>
  );
}

export default Home;
