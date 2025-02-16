// MeetingAgendaItems.jsx
import React from 'react';

const MeetingAgendaItems = () => {
  const agendaItems = [
    { number: 0, title: "Chairman Gleason calls meeting to order" },
    { number: 1, title: "Commission Counsel Shelah Cisneros lays" },
    { number: 2, title: "Member of Winder mere Oaks WSC" },
    { number: 3, title: "Member of Windermere Oaks WSC" },
    { number: 4, title: "A Temporary Manager to Windermere" },
    { number: 5, title: "Application of Syntho, LLC for a Certificate" },
    { number: 6, title: "Commission Counsel's memos" },
    { number: 7, title: "Application of Southwestern to Amend" },
    { number: 8, title: "Motion to extend time to act on motions" },
    { number: 9, title: "Resolve Issues in Docket No. 53719" },
    { number: 10, title: "Glotfelty Lays Out His Memo, 55338" },
    { number: 11, title: "Motion to adopt PFD with modifications" },
    { number: 12, title: "App CenterPoint Energy Houston Electric" },
    { number: 13, title: "Thoughts on the Chairman's memo,55361" },
    { number: 14, title: "Motion to deny CenterPoint's application," },
    { number: 15, title: "Certificate of Convenience and Necessity" },
    { number: 16, title: "Montgomery County resident" },
    { number: 17, title: "Montgomery County Resident" },
    { number: 18, title: "Commission Staff - Online Outage Map, 56897" }
  ];

  return (
    <div className="mb-4">
      {agendaItems.map((item) => (
        <div key={item.number} className="d-flex align-items-center py-2 border-bottom">
          <div className="me-3" style={{ minWidth: '60px' }}>
            Item {item.number}:
          </div>
          <div className="text-primary flex-grow-1">{item.title}</div>
          <div className="d-flex align-items-center gap-2">
            <button className="btn btn-outline-secondary btn-sm">
              <i className="bi bi-play-fill"></i> Play Clip
            </button>
            <button className="btn btn-link btn-sm text-muted">
              <i className="bi bi-chevron-down"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MeetingAgendaItems;