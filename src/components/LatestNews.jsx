import React from 'react';
import { Link } from 'react-router-dom';
import calendarIcon from '../assets/calendar.png';
import news1 from '../assets/news 1.png'; // Ensure the file name and path are correct
import news2 from '../assets/news 2.png'; // Ensure the file name and path are correct
import news3 from '../assets/news 3.png'; // Ensure the file name and path are correct
import news4 from '../assets/news 4.png'; // Ensure the file name and path are correct
import news5 from '../assets/news 5.png'; // Ensure the file name and path are correct

const LatestNews = () => {
  return (
    <div className="p-3 border rounded" style={{ backgroundColor: '#ffffff' }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center">
          <img src={calendarIcon} alt="Calendar Icon" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
          <h6 className="mb-0" style={{ color:'#093677'}}>Latest Industry News</h6>
        </div>
        <Link to="/article" className="text-decoration-none small" style={{ fontSize: '12px' }}>READ MORE</Link>
      </div>
      <hr style={{ borderColor: '#194F90', borderWidth: '2px' }} /> {/* Updated blue color */}
      <div className="d-flex flex-column gap-3">
        <div className="news-item card shadow-sm" style={{ borderLeft: '2.5px solid #d8aa0b', borderRadius: '0', borderWidth: '1px' }}>
          <div className="mb-0" style={{ marginLeft: '18px', marginTop: '4px', color: '#455a64', fontSize: '14px', fontWeight: '600' }}>ERCOT</div> {/* Add margin-left, margin-top, color, font size, and semi-bold */}
          <div className="d-flex gap-2 card-body align-items-start" style={{ paddingTop:'4px'}}>
            <img src={news1} alt="news" style={{ width: '100px', height: '60px', border: '1px solid #455a64' }} /> {/* Add border */}
            <div>
              <Link to="/article"><p className="mb-0 small">ERCOT News impacts to shared KPI metrics in latest market</p></Link>
              <small className="text-decoration-none small" style={{ fontSize: '10px' }}>02/25/2024</small>
            </div>
          </div>
        </div>
        <div className="news-item card shadow-sm" style={{ borderLeft: '3px solid #194F90', borderRadius: '0', borderWidth: '1px' }}>
        <div className="mb-0" style={{ marginLeft: '18px', marginTop: '4px', color: '#455a64', fontSize: '14px', fontWeight: '600' }}>Texas</div> {/* Add margin-left, margin-top, color, font size, and semi-bold */}
        <div className="d-flex gap-2 card-body align-items-start" style={{ paddingTop:'4px'}}>
        <img src={news2} alt="news" style={{ width: '100px', height: '60px', border: '1px solid #455a64' }} /> {/* Add border */}
            <div>
              <Link to="/article"><p className="mb-0 small">Texas Commission sets generation requirements for latest cycles</p></Link>
              <small className="text-decoration-none small" style={{ fontSize: '10px' }}>02/23/2024</small>
            </div>
          </div>
        </div>
        <div className="news-item card shadow-sm" style={{ borderLeft: '2.5px solid #86c1a3', borderRadius: '0', borderWidth: '1px' }}>
        <div className="mb-0" style={{ marginLeft: '18px', marginTop: '4px', color: '#455a64', fontSize: '14px', fontWeight: '600' }}>NERC</div> {/* Add margin-left, margin-top, color, font size, and semi-bold */}
        <div className="d-flex gap-2 card-body align-items-start" style={{ paddingTop:'4px'}}>
        <img src={news3} alt="news" style={{ width: '100px', height: '60px', border: '1px solid #455a64' }} /> {/* Add border */}
            <div>
              <Link to="/article"><p className="mb-0 small">New regulations introduced for renewable energy projects</p></Link>
              <small className="text-decoration-none small" style={{ fontSize: '10px' }}>02/20/2024</small>
            </div>
          </div>
        </div>
        <div className="news-item card shadow-sm" style={{ borderLeft: '2.5px solid #194e30', borderRadius: '0', borderWidth: '1px' }}>
        <div className="mb-0" style={{ marginLeft: '18px', marginTop: '4px', color: '#455a64', fontSize: '14px', fontWeight: '600' }}>U.S.</div> {/* Add margin-left, margin-top, color, font size, and semi-bold */}
        <div className="d-flex gap-2 card-body align-items-start" style={{ paddingTop:'4px'}}>
        <img src={news4} alt="news" style={{ width: '100px', height: '60px', border: '1px solid #455a64' }} /> {/* Add border */}
            <div>
              <Link to="/article"><p className="mb-0 small">Impact of recent weather events on energy grid stability</p></Link>
              <small className="text-decoration-none small" style={{ fontSize: '10px' }}>02/18/2024</small>
            </div>
          </div>
        </div>
        <div className="news-item card shadow-sm" style={{ borderLeft: '2.5px solid #ad48b1', borderRadius: '0', borderWidth: '1px' }}>
        <div className="mb-0" style={{ marginLeft: '18px', marginTop: '4px', color: '#455a64', fontSize: '14px', fontWeight: '600' }}>Technology</div> {/* Add margin-left, margin-top, color, font size, and semi-bold */}
        <div className="d-flex gap-2 card-body align-items-start" style={{ paddingTop:'4px'}}>
        <img src={news5} alt="news" style={{ width: '100px', height: '60px', border: '1px solid #455a64' }} /> {/* Add border */}
            <div>
              <Link to="/article"><p className="mb-0 small">Upcoming changes in energy market regulations</p></Link>
              <small className="text-decoration-none small" style={{ fontSize: '10px' }}>02/15/2024</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LatestNews };