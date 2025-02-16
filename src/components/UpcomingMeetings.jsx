import React from 'react';

const UpcomingMeetings = () => {
  return (
    <div className="card mb-4">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Upcoming Meetings</h5>
        <button className="btn btn-sm btn-outline-primary">SEE ALL</button>
      </div>
      <div className="list-group list-group-flush">
        <a href="#" className="list-group-item list-group-item-action">
          <div className="fw-bold">LEGE - Senate Finance</div>
          <small>02/11 - 9:00 AM</small>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <div className="fw-bold">ERCOT - RMS Meeting</div>
          <small>02/11 - 9:30 AM</small>
        </a>
      </div>
    </div>
  );
};

export default UpcomingMeetings;
