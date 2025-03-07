import React, { useState } from 'react';
import MeetingHeader from './MeetingHeader';
import RelatedControls from './RelatedControls';
import RelatedMeetings from './RelatedMeetings';
import { LatestNews } from './LatestNews';
import MeetingSummaries from './MeetingSummaries';
import MostActivePuctFilings from './MostActivePUCTfilings';
import KeywordTags from './KeywordTags';
import ArticleSummary from './ArticleSummary'; // Ensure import
import { ArticleGMSummary } from './ArticleGMSummary'; // Correct import
import ArticleTitle from './ArticleTitle';
import ArticleImage from './ArticleImage';
import ArticleGMSummaryHeader from './ArticleGMSummaryHeader'; // Add import
import ButtonComponent from './ButtonComponent'; // Add import
import GridMonitorAISummary from './GridMonitorAISummary'; // Add import
import MeetingAgendaItems from './MeetingAgendaItems'; // Add import
import SupportingDocs from './SupportingDocs'; // Add import

const MeetingSummaryPage = () => {
  const [showSupportingDocs, setShowSupportingDocs] = useState(false);
  const [showNews, setShowNews] = useState(false);

  const handleShowSupportingDocs = () => {
    console.log('Showing Supporting Docs');
    setShowSupportingDocs(true);
    setShowNews(false);
  };

  const handleShowNews = () => {
    console.log('Showing News');
    setShowSupportingDocs(false);
    setShowNews(true);
  };

  const handleClose = () => {
    console.log('Closing Supporting Docs or News');
    setShowSupportingDocs(false);
    setShowNews(false);
  };

  return (
    <>
      <MeetingHeader />
      <ArticleTitle />
      <ArticleImage />
      <ArticleSummary /> {/* Add usage */}
      <hr style={{ borderColor: 'grey' }} /> {/* Add horizontal line with grey color */}
      <ArticleGMSummaryHeader /> {/* Add usage */}
      <ArticleGMSummary /> {/* Correct usage */}
      <GridMonitorAISummary 
        onShowSupportingDocs={handleShowSupportingDocs} 
        onShowNews={handleShowNews} 
      />
      {showSupportingDocs && (
        <SupportingDocs onClose={handleClose} />
      )}
      {showNews && (
        <div className="news">
          <h5>News</h5>
          <button className="btn btn-link btn-sm" onClick={handleClose}>Close</button>
          {/* Add your news content here */}
        </div>
      )}
      <MeetingAgendaItems /> {/* Always render MeetingAgendaItems */}
      <ButtonComponent /> {/* Add usage */}
      <RelatedControls />
      <RelatedMeetings />
    </>
  );
};

export default MeetingSummaryPage;
