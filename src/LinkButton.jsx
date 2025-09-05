import React from 'react';

export default function LinkButton({ to, children, icon }) {
  return (
    <a href={to} className="a-button">
      {icon && <span className="icon">{icon}</span>}
      <span className="text">{children}</span>
    </a>
  );
}
