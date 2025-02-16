import React from 'react';

const MeetingSummaries = () => {
  return (
    <div className="p-3 border rounded mt-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center">
          <img src="src/assets/calendar.png" alt="Calendar Icon" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
          <h6 className="mb-0">Meeting Summaries</h6>
        </div>
        <a href="#" className="text-decoration-none small" style={{ fontSize: '12px' }}>READ MORE</a>
      </div>
      <hr style={{ borderColor: '#194F90', borderWidth: '3px' }} /> {/* Updated blue color */}
      <div className="d-flex flex-column gap-2">
        <div className="meeting-item card shadow-sm" style={{ borderLeft: '2px solid orange', borderRadius: '0', borderWidth: '1px' }}>
          <div className="d-flex align-items-center gap-2 card-body">
            <img src="src/assets/ercot-icon-16.png" alt="Ercot" style={{ width: '30px', height: '30px' }} />
            <div>
              <p className="mb-0 small">ERCOT CMRS Meeting - WebEx Only</p>
              <small className="text-muted">02/25/2024</small>
            </div>
          </div>
        </div>
        <div className="meeting-item card shadow-sm" style={{ borderLeft: '2px solid orange', borderRadius: '0', borderWidth: '1px' }}>
          <div className="d-flex align-items-center gap-2 card-body">
            <img src="src/assets/puct-seal-logo.svg" alt="PUCT" style={{ width: '30px', height: '30px' }} />
            <div>
              <p className="mb-0 small">PUCT Open Meeting - WebEx Only</p>
              <small className="text-muted">02/25/2024</small>
            </div>
          </div>
        </div>
        <div className="meeting-item card shadow-sm" style={{ borderLeft: '2px solid orange', borderRadius: '0', borderWidth: '1px' }}>
          <div className="d-flex align-items-center gap-2 card-body">
            <img src="src/assets/ercot-icon-16.png" alt="ERCOT" style={{ width: '30px', height: '30px' }} />
            <div>
              <p className="mb-0 small">ERCOT CMRS Meeting - WebEx Only</p>
              <small className="text-muted">02/25/2024</small>
            </div>
          </div>
        </div>
        <div className="meeting-item card shadow-sm" style={{ borderLeft: '2px solid orange', borderRadius: '0', borderWidth: '1px' }}>
          <div className="d-flex align-items-center gap-2 card-body">
            <img src="src/assets/puct-seal-logo.svg" alt="PUC Seal Logo" style={{ width: '30px', height: '30px' }} />
            <div>
              <p className="mb-0 small">PUCT Open Meeting - WebEx Only</p>
              <small className="text-muted">02/25/2024</small>
            </div>
          </div>
        </div>
        <div className="meeting-item card shadow-sm" style={{ borderLeft: '2px solid orange', borderRadius: '0', borderWidth: '1px' }}>
          <div className="d-flex align-items-center gap-2 card-body">
            <img src="src/assets/ercot-icon-16.png" alt="ERCOT" style={{ width: '30px', height: '30px' }} />
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
