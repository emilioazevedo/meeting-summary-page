import React from 'react';

const LatestIndustryNews = () => {
  return (
    <div className="p-3 border rounded">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center">
          <img src="src/assets/calendar.png" alt="Calendar Icon" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
          <h6 className="mb-0">Latest Industry News</h6>
        </div>
        <a href="#" className="text-decoration-none small" style={{ fontSize: '12px' }}>READ MORE</a>
      </div>
      <hr style={{ borderColor: '#194F90', borderWidth: '3px' }} /> {/* Updated blue color */}
      <div className="d-flex flex-column gap-3">
        <div className="news-item card shadow-sm" style={{ borderLeft: '2px solid #d8aa0b', borderRadius: '0', borderWidth: '1px' }}>
          <div className="d-flex gap-2 card-body align-items-start">
            <img src="src/assets/news 1.png" alt="news" style={{ width: '100px', height: '60px' }} />
            <div>
              <a href="#"><p className="mb-0 small">ERCOT News impacts to shared KPI metrics in latest market</p></a>
              <small className="text-decoration-none small" style={{ fontSize: '10px' }}>02/25/2024</small>
            </div>
          </div>
        </div>
        <div className="news-item card shadow-sm" style={{ borderLeft: '2px solid #194F90', borderRadius: '0', borderWidth: '1px' }}>
          <div className="d-flex gap-2 card-body align-items-start">
            <img src="src/assets/news 2.png" alt="news" style={{ width: '100px', height: '60px' }} />
            <div>
              <a href="#"><p className="mb-0 small">Texas Commission sets generation requirements for latest cycles</p></a>
              <small className="text-decoration-none small" style={{ fontSize: '10px' }}>02/23/2024</small>
            </div>
          </div>
        </div>
        <div className="news-item card shadow-sm" style={{ borderLeft: '2px solid #86c1a3', borderRadius: '0', borderWidth: '1px' }}>
          <div className="d-flex gap-2 card-body align-items-start">
            <img src="src/assets/news 3.png" alt="news" style={{ width: '100px', height: '60px' }} />
            <div>
              <a href="#"><p className="mb-0 small">New regulations introduced for renewable energy projects</p></a>
              <small className="text-decoration-none small" style={{ fontSize: '10px' }}>02/20/2024</small>
            </div>
          </div>
        </div>
        <div className="news-item card shadow-sm" style={{ borderLeft: '2px solid #194e30', borderRadius: '0', borderWidth: '1px' }}>
          <div className="d-flex gap-2 card-body align-items-start">
            <img src="src/assets/news 4.png" alt="news" style={{ width: '100px', height: '60px' }} />
            <div>
              <a href="#"><p className="mb-0 small">Impact of recent weather events on energy grid stability</p></a>
              <small className="text-decoration-none small" style={{ fontSize: '10px' }}>02/18/2024</small>
            </div>
          </div>
        </div>
        <div className="news-item card shadow-sm" style={{ borderLeft: '2px solid #ad48b1', borderRadius: '0', borderWidth: '1px' }}>
          <div className="d-flex gap-2 card-body align-items-start">
            <img src="src/assets/news 5.png" alt="news" style={{ width: '100px', height: '60px' }} />
            <div>
              <a href="#"><p className="mb-0 small">Upcoming changes in energy market regulations</p></a>
              <small className="text-decoration-none small" style={{ fontSize: '10px' }}>02/15/2024</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LatestIndustryNews };