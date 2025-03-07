import React from 'react';

const MeetingInfo = () => {
  return (
    <div className="mt-2 mb-4 d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center mb-2">
        <div className="d-flex flex-column align-items-center me-2">
          <h4 className="mb-0" style={{ fontSize: '14px', color: '#194f90' }}></h4>
        </div>
        <div className="ms-3">
          <div className="d-flex flex-column">
            <p className="text-muted mb-0" style={{ fontSize: '16px' }}>Following more than a year of discussions and pushback over the Electric Reliability Council of Texas’ (ERCOT) desire to implement ride-through ability for inverter-based resources, the Texas grid operator and renewable energy developers have reached a compromise.</p>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default MeetingInfo;