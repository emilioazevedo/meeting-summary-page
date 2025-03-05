import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import MeetingHeader from './components/MeetingHeader';
import RelatedControls from './components/RelatedControls';
import RelatedMeetings from './components/RelatedMeetings';
import { LatestNews } from './components/LatestNews';
import MeetingSummaries from './components/MeetingSummaries';
import MostActivePuctFilings from './components/MostActivePUCTfilings';
import KeywordTags from './components/KeywordTags';
import MeetingVideo from './components/MeetingVideo';
import MeetingInfo from './components/MeetingInfo';
import MeetingAgendaItems from './components/MeetingAgendaItems';
import GridMonitorAISummary from './components/GridMonitorAISummary';

const HomePage = () => (
  <>
    <MeetingHeader />
    <MeetingInfo />
    <MeetingVideo />
    <GridMonitorAISummary />
    <MeetingAgendaItems />
    <RelatedControls />
    <RelatedMeetings />
  </>
);

const App = () => {
  console.log('App component rendered'); // Debugging log

  return (
    <Router>
      <div style={{ width: '100vw', minHeight: '100vh' }}>
        {/* Navbar */}
        <nav style={{ backgroundColor: '#27508d', width: '100%' }}>
          <div style={{ padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <a className="text-white text-decoration-none" href="/">GRIDMONITOR</a>
            <div style={{ display: 'flex', alignItems: 'center', width: '33%', margin: '0 auto' }}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                style={{ width: '100%' }}
              />
              <button className="btn btn-success">
                <i className="bi bi-search"></i>
              </button>
            </div>
            <span className="text-white">Emilio Azevedo</span>
          </div>
        </nav>

        <div style={{ display: 'flex', width: '100%', backgroundColor: '#EEF2F3' }}>
          {/* Left Sidebar */}
          <div style={{ width: '16.66%', backgroundColor: '#f8f9fa', borderRight: '1px solid #dee2e6', paddingRight: '1rem' }}>
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
              <a href="/help" className="list-group-item list-group-item-action">Feedback-Help</a>
            </div>
          </div>

          {/* Main Content */}
          <div style={{ width: '58.33%', backgroundColor: 'white', padding: '1rem', marginLeft: '1rem', marginTop: '1rem' }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/latest-news" element={<LatestNews />} />
              <Route path="/meeting-agenda" element={<MeetingAgendaItems />} />
              <Route path="/most-active-puct-filings" element={<MostActivePuctFilings />} />
            </Routes>
          </div>

          {/* Right Sidebar */}
          <div style={{ width: '25%', padding: '1rem', backgroundColor: '#EEF2F3' }}>
            <LatestNews />
            <MeetingSummaries />
            <MostActivePuctFilings />
            <KeywordTags />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;