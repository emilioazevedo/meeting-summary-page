import React from 'react';

const MeetingInfo = () => {
  return (
    <div className="mt-2 mb-4">
      <div className="d-flex flex-column align-items-center mb-2">
        <img 
          src="src/assets/puc-seal-logo 1.png" 
          alt="PUC Seal Logo" 
          className="mb-2" 
          style={{ width: '48px', height: '48px' }} 
        />
        <h4 className="mb-0" style={{ fontSize: '20px' }}>PUCT - Open Meeting</h4>
        <p className="text-muted mb-0" style={{ fontSize: '16px' }}>October 24, 2024</p>
      </div>
      <div className="d-flex align-items-center">
        <img 
          src="src/assets/GM AI.svg" 
          alt="Grid Monitor AI" 
          className="me-2" 
          style={{ width: '40px', height: '40px' }} 
        />
        <span className="text-muted">Grid Monitor AI Summary | Posted 10/25/2024</span>
        <div className="ms-auto">
          <button className="btn btn-link btn-sm me-2">
            <i className="bi bi-cloud-download"></i>
          </button>
          <button className="btn btn-link btn-sm me-2">
            <i className="bi bi-share"></i>
          </button>
          <button className="btn btn-link btn-sm">
            <i className="bi bi-three-dots-vertical"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetingInfo;