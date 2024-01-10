import React, { useState } from 'react';

const StatusButton = ({ onStatusChange }) => {
  const [status, setStatus] = useState('tillgänglig');

  const handleClick = () => {
    const newStatus = status === 'tillgänglig' ? 'otillgänglig' : 'tillgänglig';
    setStatus(newStatus);
    onStatusChange(newStatus);
  };

  return (
    <button onClick={handleClick}>
      Byt Status ({status})
    </button>
  );
};

export default StatusButton;
