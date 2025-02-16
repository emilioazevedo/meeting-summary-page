// MeetingVideo.jsx
import React from 'react';
import videoPlayer from '../assets/VideoPlayer.png';

const MeetingVideo = () => {
  return (
    <div className="position-relative mb-2"> {/* Reduced bottom margin */}
      <div className="ratio ratio-16x9">
        <img 
          src={videoPlayer} 
          alt="PUCT Meeting" 
          className="img-fluid border rounded"
          style={{ objectFit: 'cover' }}
        />
        <div className="d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle">
          <button className="btn btn-light btn-lg rounded-circle">
            <i className="bi bi-play-fill fs-4"></i>
          </button>
        </div>
        <div className="position-absolute bottom-0 end-0 p-2">
        
        </div>
      </div>
    </div>
  );
};

export default MeetingVideo;