import React from 'react';
import Button from './Button.jsx';
import LinkButton from './LinkButton.jsx';
import zawanetLogo from './images/zawanet.png';
import './index.css';

function SupportIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1C5.925 1 1 5.925 1 12c0 5.25 3.375 9.675 8 11.25V17.5H6v-3h3v-2.5H6V8h3V5.75c0-1.25 1-2.25 2.25-2.25h1.5C13.25 3.5 14.25 4.5 14.25 5.75V8h3v3h-3v2.5h3V17.5h-3v5.75c4.625-1.575 8-6 8-11.25 0-6.075-4.925-11-11-11z"/>
    </svg>
  );
}

function Support() {
  return (
    <div className="app-container">
      <div className="logo-container">
        <img
          src={zawanetLogo}
          alt="Zawanet Logo"
          style={{ width: '120px', height: 'auto', borderRadius: '28px' }}
        />
      </div>
      <h1>Support</h1>
      <p>
        Need help with your Zawanet service? Our support team is here for you 24/7.
        You can reach us via phone, email, or live chat for any questions about your
        internet connection, billing, or technical issues.
      </p>
      <LinkButton to="mailto:info@zawanet.net" icon={<SupportIcon />}>
        Email Support
      </LinkButton>
      <Button text="Go Back ←" to="/" />
    </div>
  );
}

export default Support;
