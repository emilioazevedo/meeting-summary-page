import React from 'react';
import calendarIcon from '../assets/calendar.png';
import ercotIcon from '../assets/ercot-icon-16.png';
import puctSealLogo from '../assets/puct-seal-logo.svg';

const MeetingSummaries = () => {
  return (
    <div className="p-3 border rounded mt-3" style={{ backgroundColor: 'white' }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center">
          <img src={calendarIcon} alt="Calendar Icon" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
          <h6 className="mb-0">Meeting Summaries</h6>
        </div>
        <a href="#" className="text-decoration-none small" style={{ fontSize: '12px' }}>READ MORE</a>
      </div>
      <hr style={{ borderColor: '#194F90', borderWidth: '3px' }} /> {/* Updated blue color */}
      <div className="d-flex flex-column gap-2">
        <div className="meeting-item card shadow-sm" style={{ borderLeft: '2px solid orange', borderRadius: '0', borderWidth: '1px' }}>
          <div className="d-flex align-items-center gap-2 card-body">
            <img src={ercotIcon} alt="Ercot" style={{ width: '30px', height: '30px' }} />
            <div>
              <p className="mb-0 small">ERCOT CMRS Meeting - WebEx Only</p>
              <small className="text-muted">02/25/2024</small>
            </div>
          </div>
        </div>
        <div className="meeting-item card shadow-sm" style={{ borderLeft: '2px solid orange', borderRadius: '0', borderWidth: '1px' }}>
          <div className="d-flex align-items-center gap-2 card-body">
            <img src={puctSealLogo} alt="PUCT" style={{ width: '30px', height: '30px' }} />
            <div>
              <p className="mb-0 small">PUCT Open Meeting - WebEx Only</p>
              <small className="text-muted">02/25/2024</small>
            </div>
          </div>
        </div>
        <div className="meeting-item card shadow-sm" style={{ borderLeft: '2px solid orange', borderRadius: '0', borderWidth: '1px' }}>
          <div className="d-flex align-items-center gap-2 card-body">
            <img src={ercotIcon} alt="ERCOT" style={{ width: '30px', height: '30px' }} />
            <div>
              <p className="mb-0 small">ERCOT CMRS Meeting - WebEx Only</p>
              <small className="text-muted">02/25/2024</small>
            </div>
          </div>
        </div>
        <div className="meeting-item card shadow-sm" style={{ borderLeft: '2px solid orange', borderRadius: '0', borderWidth: '1px' }}>
          <div className="d-flex align-items-center gap-2 card-body">
            <img src={puctSealLogo} alt="PUC Seal Logo" style={{ width: '30px', height: '30px' }} />
            <div>
              <p className="mb-0 small">PUCT Open Meeting - WebEx Only</p>
              <small className="text-muted">02/25/2024</small>
            </div>
          </div>
        </div>
        <div className="meeting-item card shadow-sm" style={{ borderLeft: '2px solid orange', borderRadius: '0', borderWidth: '1px' }}>
          <div className="d-flex align-items-center gap-2 card-body">
            <img src={ercotIcon} alt="ERCOT" style={{ width: '30px', height: '30px' }} />
            <div>
              <p className="mb-0 small">ERCOT QMWG Meeting - WebEx Only</p>
              <small className="text-muted">02/25/2024</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingSummaries;
