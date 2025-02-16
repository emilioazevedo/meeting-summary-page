import React from 'react';

const MeetingHeader = () => {
  return (
    <div className="mb-4">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img src="src/assets/calendar.png" alt="Calendar Icon" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
          <p className="text-muted mb-0">Meeting Summaries</p>
        </div>
        <p className="text-muted mb-0" style={{ fontSize: '14px' }}>Posted 02/05/2025</p>
      </div>
      <hr style={{ borderColor: 'grey' }} />
    </div>
  );
};

export default MeetingHeader;