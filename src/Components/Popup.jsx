import React from 'react';
import './Popup.module.css'; 

const Popup = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Pop-up Title</h2>
        <p>This is the content of the pop-up.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;