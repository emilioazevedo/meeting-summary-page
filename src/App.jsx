import React from 'react';
// Import existing components
import MeetingHeader from './components/MeetingHeader';
import RelatedControls from './components/RelatedControls';
import RelatedMeetings from './components/RelatedMeetings';
import { LatestNews } from './components/LatestNews'; // Use named import
import MeetingSummaries from './components/MeetingSummaries';
import MostActivePuctFilings from './components/MostActivePuctFilings'; // Ensure the file name matches
import KeywordTags from './components/KeywordTags';
import MeetingVideo from './components/MeetingVideo';
import MeetingInfo from './components/MeetingInfo';
import MeetingAgendaItems from './components/MeetingAgendaItems';

const App = () => {
  return (
    <div className="container-fluid p-0" style={{ backgroundColor: '#EEF2F3' }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#27508d' }}>
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/">GRIDMONITOR</a>
          <div className="d-flex w-100">
            <div className="mx-auto d-flex" style={{ width: '33%' }}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                style={{ width: '100%' }}
              />
              <button className="btn btn-success" type="button">
                <i className="bi bi-search"></i>
              </button>
            </div>
            <div className="ms-auto">
              <span className="text-white">Emilio Azevedo</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
          {/* Left Sidebar */}
          <div className="col-md-2 bg-light min-vh-100 border-end">
            <div className="list-group list-group-flush">
              <a href="/" className="list-group-item list-group-item-action">Dashboard</a>
              <a href="/meetings" className="list-group-item list-group-item-action">Meetings</a>
              <a href="/following" className="list-group-item list-group-item-action">Following</a>
              <a href="/notes" className="list-group-item list-group-item-action">Meeting Notes</a>
              <a href="/news" className="list-group-item list-group-item-action">News</a>
              <a href="/filings" className="list-group-item list-group-item-action">Filing Browser</a>
              <a href="/legislature" className="list-group-item list-group-item-action">Legislature</a>
              <a href="/monitoring" className="list-group-item list-group-item-action">Filing Monitoring</a>
              <a href="/clips" className="list-group-item list-group-item-action">My Clips</a>
              <a href="/history" className="list-group-item list-group-item-action">My History</a>
              <a href="/help" className="list-group-item list-group-item-action">Feedback/Help</a>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-md-7 py-3" style={{ paddingRight: '15px', backgroundColor: 'white' }}>
            <MeetingHeader />
            <MeetingVideo />
            <MeetingInfo />
            <MeetingAgendaItems />
            <RelatedControls />
            <RelatedMeetings />
          </div>

          {/* Right Sidebar */}
          <div className="col-md-3 py-3" style={{ paddingLeft: '15px' }}>
            <LatestNews />
            <MeetingSummaries />
            <MostActivePuctFilings />
            <KeywordTags />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;