import React from 'react';
import filingIcon from '../assets/filing.png';
import tag1Icon from '../assets/tag1.png';   
import tag2Icon from '../assets/tag2.png';
import tag3Icon from '../assets/tag3.png'; 
import tag4Icon from '../assets/tag4.png';

const MostActivePuctFilings = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="p-3 border rounded mt-3" style={{ backgroundColor: 'white' }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <img src={filingIcon} alt="Filing Icon" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
        <h6 className="mb-0" style={{ color:'#093677' }}>Most Active PUCT Filings</h6>
        <a href="#" className="text-decoration-none small" style={{ fontSize: '12px' }}>SEE ALL</a>
      </div>
      <hr style={{ borderColor: '#194F90', borderWidth: '3px' }} /> {/* Updated blue color */}
      
      {/* Removed Play clip button */}

      <div className="d-flex flex-column gap-3">
        <div className="filing-item">
          <div className="d-flex align-items-center gap-2 mb-1">
            <img src={tag1Icon} alt="Filing Icon" style={{ width: '126px', height: '24px', marginRight: '8px' }} />
          </div>
          <p className="mb-0 small">Performance measure report pursuant to 16 TAC § 25.88 (167.9KB)</p>
        </div>
        <div className="filing-item">
          <div className="d-flex align-items-center gap-2 mb-1">
            <img src={tag2Icon} alt="Filing Icon" style={{ width: '126px', height: '24px', marginRight: '8px' }} />
          </div>
          <p className="mb-0 small">Performance measure report pursuant to 16 TAC § 25.88 (167.9KB)</p>
        </div>
        <div className="filing-item">
          <div className="d-flex align-items-center gap-2 mb-1">
            <img src={tag3Icon} alt="Filing Icon" style={{ width: '126px', height: '24px', marginRight: '8px' }} />
          </div>
          <p className="mb-0 small">Performance measure report pursuant to 16 TAC § 25.88 (167.9KB)</p>
        </div>
        <div className="filing-item">
          <div className="d-flex align-items-center gap-2 mb-1">
            <img src={tag4Icon} alt="Filing Icon" style={{ width: '126px', height: '24px', marginRight: '8px' }} />
          </div>
          <p className="mb-0 small">Emergency operations plans and critical resources under 16 TAC § 25.53 (143.6KB)</p>
        </div>
      </div>
    </div>
  );
};

export default MostActivePuctFilings;
