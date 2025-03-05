import React, { useRef, useState } from 'react';

const MeetingVideo = () => {
  const videoRef = useRef(null);
  const [showControls, setShowControls] = useState(false);

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
    <div
      id="meetingVideo"
      className="position-relative mb-4"
      style={{ marginBottom: '50px' }}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <div className="ratio ratio-16x9">
        <video ref={videoRef} className="img-fluid border rounded" style={{ objectFit: 'cover' }}>
          <source src="/puct-open-meeting.mov" type="video/mp4" /> {/* Ensure correct video path */}
          Your browser does not support the video tag.
        </video>
      </div>
      {showControls && (
        <div className="d-flex justify-content-center align-items-center mt-3 position-absolute bottom-0 start-50 translate-middle-x mb-2">
          <button onClick={handlePlay} className="btn btn-sm me-2" style={{ color: 'white' }}>
            <i className="bi bi-play-fill fs-5"></i>
          </button>
          <button onClick={handlePause} className="btn btn-sm me-2" style={{ color: 'white' }}>
            <i className="bi bi-pause-fill fs-5"></i>
          </button>
          <button onClick={handleStop} className="btn btn-sm" style={{ color: 'white' }}>
            <i className="bi bi-stop-fill fs-5"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default MeetingVideo;