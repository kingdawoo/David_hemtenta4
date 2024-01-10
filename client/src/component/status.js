import React from 'react';
import StatusButton from './statusbutton';

const Status = () => {
  const handleStatusChange = (newStatus) => {
    console.log('Status förändrad:', newStatus);
  };

  return (
    <div>
      <StatusButton onStatusChange={handleStatusChange} />
    </div>
  );
};

export default Status;
