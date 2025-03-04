import React from 'react';
import gmAiIcon from '../assets/GM AI.svg';

const GridMonitorAISummary = () => {
  return (
    <div className="d-flex align-items-center">
      <img 
        src={gmAiIcon} 
        alt="Grid Monitor AI" 
        className="me-2" 
        style={{ width: '50px', height: '50px' }} 
      />
      <div>
        <h4 className="mb-0" style={{ color: '#194f90', fontSize: '20px'}}>Grid Monitor AI Summary</h4>
        <span className="text-muted" style={{fontSize: '12px'}}>Posted 02/05/2024</span>
      </div>
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
  );
};

export default GridMonitorAISummary;
