// src/components/Toast.js
import React, { useEffect } from 'react';
import './Toast.css';

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    // Auto-hide after 3 seconds
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="toast-notification">
      <span className="toast-icon">✅</span>
      {message}
    </div>
  );
};

export default Toast;