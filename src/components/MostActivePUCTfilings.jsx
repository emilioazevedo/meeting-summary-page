import React from 'react';

const MostActivePUCTFilings = () => {
  return (
    <div className="p-3 border rounded mt-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
      <img src="src/assets/filing.png" alt="Calendar Icon" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
        <h6 className="mb-0">Most Active PUCT Filings</h6>
        <a href="#" className="text-decoration-none small" style={{ fontSize: '12px' }}>SEE ALL</a>
      </div>
      <hr style={{ borderColor: '#194F90', borderWidth: '3px' }} /> {/* Updated blue color */}

      <div className="d-flex flex-column gap-3">
        <div className="filing-item">
          <div className="d-flex align-items-center gap-2 mb-1">
            <span className="badge bg-primary">Docket</span>
            <span className="small">54321</span>
          </div>
          <p className="mb-0 small">Performance measure report pursuant to 16 TAC § 25.88 (167.9KB)</p>
        </div>
        <div className="filing-item">
          <div className="d-flex align-items-center gap-2 mb-1">
            <span className="badge bg-info">Rule</span>
            <span className="small">25.245</span>
          </div>
          <p className="mb-0 small">Emergency operations plans and critical resources under 16 TAC § 25.53 (143.6KB)</p>
        </div>
      </div>
    </div>
  );
};

export default MostActivePUCTFilings;
