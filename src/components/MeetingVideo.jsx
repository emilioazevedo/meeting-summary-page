// MeetingVideo.jsx
import React, { useRef } from 'react';

const MeetingVideo = () => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error('Error playing video:', error);
      });
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleStop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div id="meetingVideo" className="position-relative mb-4" style={{ marginBottom: '50px' }}>
      <div className="ratio ratio-16x9">
        <video ref={videoRef} className="img-fluid border rounded" style={{ objectFit: 'cover' }}>
          <source src="/puct-open-meeting.mov" type="video/mp4" /> {/* Ensure correct video path */}
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-3">
        <button onClick={handlePlay} className="btn btn-light btn-lg rounded-circle me-2">
          <i className="bi bi-play-fill fs-4"></i>
        </button>
        <button onClick={handlePause} className="btn btn-light btn-lg rounded-circle me-2">
          <i className="bi bi-pause-fill fs-4"></i>
        </button>
        <button onClick={handleStop} className="btn btn-light btn-lg rounded-circle">
          <i className="bi bi-stop-fill fs-4"></i>
        </button>
      </div>
    </div>
  );
};

export default MeetingVideo;