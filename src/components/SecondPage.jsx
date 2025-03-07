import React from 'react';
import MeetingHeader from './MeetingHeader';
import RelatedControls from './RelatedControls';
import RelatedMeetings from './RelatedMeetings';
import { LatestNews } from './LatestNews';
import MeetingSummaries from './MeetingSummaries';
import MostActivePuctFilings from './MostActivePUCTfilings';
import KeywordTags from './KeywordTags';
import MeetingVideo from './MeetingVideo';
import MeetingInfo from './MeetingInfo';
import MeetingAgendaItems from './MeetingAgendaItems';
import GridMonitorAISummary from './GridMonitorAISummary';

const SecondPage = () => (
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

export default SecondPage;
