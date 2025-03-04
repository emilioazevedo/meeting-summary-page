import React from 'react';
import pucSealLogo from '../assets/puc-seal-logo 1.png';

const MeetingInfo = () => {
  return (
    <div className="mt-2 mb-4">
      <div className="d-flex align-items-center mb-2">
        <div className="d-flex flex-column align-items-center me-2">
          <img 
            src={pucSealLogo} 
            alt="PUC Seal Logo" 
            style={{ width: '38px', height: '38px' }} 
          />
          <h4 className="mb-0" style={{ fontSize: '14px', color: '#194f90' }}></h4>
        </div>
        <div className="ms-3">
          <div className="d-flex flex-column">
            <h4 className="mb-0" style={{ fontSize: '20px' }}>Open Meeting</h4>
            <p className="text-muted mb-0" style={{ fontSize: '16px' }}>October 24, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingInfo;