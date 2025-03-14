import React, { useEffect } from 'react';

const MeetingAgendaItems = () => {
  const agendaItems = [
    { number: 0, title: "Chairman Gleason calls meeting to order", content: "The meeting of the Public Utility Commission of Texas was called to order for October 24, 2024. Commissioner Cobos is absent due to her mother's passing on October 19. Motion made to excuse Commissioner Cobos from the meeting was approved unanimously. Plan to follow the agenda order with a few exceptions for efficiency. Public Comment will be taken first, followed by oral arguments for CenterPoint CCN case and then Windermere. Anticipation of lengthy discussions for Windermere and other contested cases. No Closed Session for the meeting." },
    { number: 1, title: "Commission Counsel Shelah Cisneros lays", content: "Commissioners' recusal memos filed in Project No. 52761. Chairman Gleeson recused from Items 16 and 18. Commissioner Hjaltman recused from Items 6, 15 through 18, 21, 23, 24, and 27. Items placed on the consent agenda: 2-12, 16, 21, 22, 24, 26, 28, 31-32, 34-36 and 58 were also added to the consent agenda by Commissioners' vote. Chairman Gleeson entertained a motion to approve the consent items was passed without opposition. No public comments were made on the consent agenda items." },
    { number: 2, title: "Member of Winder mere Oaks WSC", content: "Shelah confirmed there were 3 individuals signed up for Public Comment with 3 minute time limit. Individuals called up for comment: Alan Hicks, Scott Miller, and Deborah Fato. Speakers instructed to state their name for the court record." },
    { number: 3, title: "Member of Windermere Oaks WSC", content: "Scott Miller is a board member of Windermere Oaks Water Supply Corporation, member since 2016. Discussed concerns about financial challenges due to PUC's mandated rates. No chance for a rate increase for twelve months, leading towards potential insolvency in two months. PUC's ordered rates result in a minimum loss of $10,000 per month. Expenses increased due to aging infrastructure, reaching an additional $20,000 to $45,000 monthly. Board prioritized maintaining water service over compliance docket due to resource constraints. Lack of funding provided to meet compliance requirements imposed by PUC. Communicated financial incapacity to PUC since May without receiving a response." },
    { number: 4, title: "A Temporary Manager to Windermere", content: "Deborah Fato is a ratepayer representative for Bear Creek Special Utility District (SUD) and is expressing dissatisfaction with previous resolutions regarding service fees and rates. She highlights a failure to enforce an order to lower service rates from $35 to $30.81, leading to continued overcharging and legal fees being imposed on ratepayers. Attempts to communicate grievances with authorities were unsuccessful, prompting advice to address the issue with the legislature. Since initiating rate concerns in 2017, Bear Creek SUD's rates have increased multiple times, currently at $40.25 for the minimum monthly bill. She raises concerns about financial mismanagement and lack of accountability within Bear Creek SUD, including salary increases for the general manager and compensation for board meetings. Deborah intends to pursue legislative action to change state laws regarding automatic payment of attorney fees by ratepayers. She criticizes the PUC and ERCOT for inadequate governance of small rural water companies and emphasizes her commitment to advocating for ratepayer protection." },
    { number: 5, title: "Application of Syntho, LLC for a Certificate", content: "The hearing was convened to determine whether a temporary manager should be appointed for Windermere Oaks Water Supply Corporation. Commission Staff presented a petition for the appointment of a temporary manager. Merritt Lander represented Commission Staff, while Jeff Walker represented Windermere Oaks. Each party was agreed to a 1-hour limit for presenting their case. Some exhibits were admitted by both parties; prehearing conference notes were discussed. Miss Lander's exclusion as a witness and the exclusion of Windermere's exhibit two were addressed as evidence rulings. The potential replacement of witness Tammy Hargett by Hal Landon was discussed but initially opposed by Commission Staff. Windermere confronted financial issues, attributing difficulties to previous legal expenses and current operating costs. There were discussions around TCEQ violations and system capacity concerns that required improvement. Miss Lander called for a temporary manager due to Windermere's repeated failures and alleged abandonment of responsibilities. Mr. Walker stated he is not opposed to appointing a temporary manager but desires protection for the corporation's assets. Financial difficulties were highlighted, with discrepancies noted between reported revenue figures and Windermere's financial statements. Windermere's ability to comply with commission orders and provide documentation was questioned. The Commission asked multiple questions relating to financial management, asset management, and clarification of operational " },
    { number: 6, title: "Commission Counsel's memos", content: "The Commission held a hearing and subsequently reconvened the regular open meeting to discuss the petition. Evidence and testimony were reviewed regarding the appointment of a temporary manager. Mr. Walker does not object to appointing a temporary manager. Considerations are necessary to ensure the order for appointing a temporary manager is accurate. Recommendation made to have OPDM provide briefing with bullet points before the November 14 open meeting. Plan to move forward based on the briefing in the November 14 open meeting. Confirmation of agreement from participants and no additional issues raised." },
    { number: 7, title: "Application of Southwestern to Amend", content: "Deborah Fato is a ratepayer representative for Bear Creek Special Utility District (SUD) and is expressing dissatisfaction with previous resolutions regarding service fees and rates. She highlights a failure to enforce an order to lower service rates from $35 to $30.81, leading to continued overcharging and legal fees being imposed on ratepayers. Attempts to communicate grievances with authorities were unsuccessful, prompting advice to address the issue with the legislature. Since initiating rate concerns in 2017, Bear Creek SUD's rates have increased multiple times, currently at $40.25 for the minimum monthly bill. She raises concerns about financial mismanagement and lack of accountability within Bear Creek SUD, including salary increases for the general manager and compensation for board meetings. Deborah intends to pursue legislative action to change state laws regarding automatic payment of attorney fees by ratepayers. She criticizes the PUC and ERCOT for inadequate governance of small rural water companies and emphasizes her commitment to advocating for ratepayer protection." },
    { number: 8, title: "Motion to extend time to act on motions", content: "Scott Miller is a board member of Windermere Oaks Water Supply Corporation, member since 2016. Discussed concerns about financial challenges due to PUC's mandated rates. No chance for a rate increase for twelve months, leading towards potential insolvency in two months. PUC's ordered rates result in a minimum loss of $10,000 per month. Expenses increased due to aging infrastructure, reaching an additional $20,000 to $45,000 monthly. Board prioritized maintaining water service over compliance docket due to resource constraints. Lack of funding provided to meet compliance requirements imposed by PUC. Communicated financial incapacity to PUC since May without receiving a response." },
    { number: 9, title: "Resolve Issues in Docket No. 53719", content: "The meeting of the Public Utility Commission of Texas was called to order for October 24, 2024. Commissioner Cobos is absent due to her mother's passing on October 19. Motion made to excuse Commissioner Cobos from the meeting was approved unanimously. Plan to follow the agenda order with a few exceptions for efficiency. Public Comment will be taken first, followed by oral arguments for CenterPoint CCN case and then Windermere. Anticipation of lengthy discussions for Windermere and other contested cases. No Closed Session for the meeting." },
    { number: 10, title: "Glotfelty Lays Out His Memo, 55338", content: "Deborah Fato is a ratepayer representative for Bear Creek Special Utility District (SUD) and is expressing dissatisfaction with previous resolutions regarding service fees and rates. She highlights a failure to enforce an order to lower service rates from $35 to $30.81, leading to continued overcharging and legal fees being imposed on ratepayers. Attempts to communicate grievances with authorities were unsuccessful, prompting advice to address the issue with the legislature. Since initiating rate concerns in 2017, Bear Creek SUD's rates have increased multiple times, currently at $40.25 for the minimum monthly bill. She raises concerns about financial mismanagement and lack of accountability within Bear Creek SUD, including salary increases for the general manager and compensation for board meetings. Deborah intends to pursue legislative action to change state laws regarding automatic payment of attorney fees by ratepayers. She criticizes the PUC and ERCOT for inadequate governance of small rural water companies and emphasizes her commitment to advocating for ratepayer protection." },
    { number: 11, title: "Motion to adopt PFD with modifications", content: "The Commission held a hearing and subsequently reconvened the regular open meeting to discuss the petition. Evidence and testimony were reviewed regarding the appointment of a temporary manager. Mr. Walker does not object to appointing a temporary manager. Considerations are necessary to ensure the order for appointing a temporary manager is accurate. Recommendation made to have OPDM provide briefing with bullet points before the November 14 open meeting. Plan to move forward based on the briefing in the November 14 open meeting. Confirmation of agreement from participants and no additional issues raised." },
    { number: 12, title: "App CenterPoint Energy Houston Electric", content: "Scott Miller is a board member of Windermere Oaks Water Supply Corporation, member since 2016. Discussed concerns about financial challenges due to PUC's mandated rates. No chance for a rate increase for twelve months, leading towards potential insolvency in two months. PUC's ordered rates result in a minimum loss of $10,000 per month. Expenses increased due to aging infrastructure, reaching an additional $20,000 to $45,000 monthly. Board prioritized maintaining water service over compliance docket due to resource constraints. Lack of funding provided to meet compliance requirements imposed by PUC. Communicated financial incapacity to PUC since May without receiving a response." },
    { number: 13, title: "Thoughts on the Chairman's memo,55361", content:  "Deborah Fato is a ratepayer representative for Bear Creek Special Utility District (SUD) and is expressing dissatisfaction with previous resolutions regarding service fees and rates. She highlights a failure to enforce an order to lower service rates from $35 to $30.81, leading to continued overcharging and legal fees being imposed on ratepayers. Attempts to communicate grievances with authorities were unsuccessful, prompting advice to address the issue with the legislature. Since initiating rate concerns in 2017, Bear Creek SUD's rates have increased multiple times, currently at $40.25 for the minimum monthly bill. She raises concerns about financial mismanagement and lack of accountability within Bear Creek SUD, including salary increases for the general manager and compensation for board meetings. Deborah intends to pursue legislative action to change state laws regarding automatic payment of attorney fees by ratepayers. She criticizes the PUC and ERCOT for inadequate governance of small rural water companies and emphasizes her commitment to advocating for ratepayer protection." },
    { number: 14, title: "Motion to deny CenterPoint's application,", content: "The meeting of the Public Utility Commission of Texas was called to order for October 24, 2024. Commissioner Cobos is absent due to her mother's passing on October 19. Motion made to excuse Commissioner Cobos from the meeting was approved unanimously. Plan to follow the agenda order with a few exceptions for efficiency. Public Comment will be taken first, followed by oral arguments for CenterPoint CCN case and then Windermere. Anticipation of lengthy discussions for Windermere and other contested cases. No Closed Session for the meeting." },
    { number: 15, title: "Certificate of Convenience and Necessity", content: "Deborah Fato is a ratepayer representative for Bear Creek Special Utility District (SUD) and is expressing dissatisfaction with previous resolutions regarding service fees and rates. She highlights a failure to enforce an order to lower service rates from $35 to $30.81, leading to continued overcharging and legal fees being imposed on ratepayers. Attempts to communicate grievances with authorities were unsuccessful, prompting advice to address the issue with the legislature. Since initiating rate concerns in 2017, Bear Creek SUD's rates have increased multiple times, currently at $40.25 for the minimum monthly bill. She raises concerns about financial mismanagement and lack of accountability within Bear Creek SUD, including salary increases for the general manager and compensation for board meetings. Deborah intends to pursue legislative action to change state laws regarding automatic payment of attorney fees by ratepayers. She criticizes the PUC and ERCOT for inadequate governance of small rural water companies and emphasizes her commitment to advocating for ratepayer protection." },
    { number: 16, title: "Montgomery County resident", content:  "Scott Miller is a board member of Windermere Oaks Water Supply Corporation, member since 2016. Discussed concerns about financial challenges due to PUC's mandated rates. No chance for a rate increase for twelve months, leading towards potential insolvency in two months. PUC's ordered rates result in a minimum loss of $10,000 per month. Expenses increased due to aging infrastructure, reaching an additional $20,000 to $45,000 monthly. Board prioritized maintaining water service over compliance docket due to resource constraints. Lack of funding provided to meet compliance requirements imposed by PUC. Communicated financial incapacity to PUC since May without receiving a response." },
    { number: 17, title: "Montgomery County Resident", content:  "Deborah Fato is a ratepayer representative for Bear Creek Special Utility District (SUD) and is expressing dissatisfaction with previous resolutions regarding service fees and rates. She highlights a failure to enforce an order to lower service rates from $35 to $30.81, leading to continued overcharging and legal fees being imposed on ratepayers. Attempts to communicate grievances with authorities were unsuccessful, prompting advice to address the issue with the legislature. Since initiating rate concerns in 2017, Bear Creek SUD's rates have increased multiple times, currently at $40.25 for the minimum monthly bill. She raises concerns about financial mismanagement and lack of accountability within Bear Creek SUD, including salary increases for the general manager and compensation for board meetings. Deborah intends to pursue legislative action to change state laws regarding automatic payment of attorney fees by ratepayers. She criticizes the PUC and ERCOT for inadequate governance of small rural water companies and emphasizes her commitment to advocating for ratepayer protection." },
    { number: 18, title: "Commission Staff - Online Outage Map, 56897", content:  "Scott Miller is a board member of Windermere Oaks Water Supply Corporation, member since 2016. Discussed concerns about financial challenges due to PUC's mandated rates. No chance for a rate increase for twelve months, leading towards potential insolvency in two months. PUC's ordered rates result in a minimum loss of $10,000 per month. Expenses increased due to aging infrastructure, reaching an additional $20,000 to $45,000 monthly. Board prioritized maintaining water service over compliance docket due to resource constraints. Lack of funding provided to meet compliance requirements imposed by PUC. Communicated financial incapacity to PUC since May without receiving a response." }
  ];

  const scrollToVideo = () => {
    const videoElement = document.getElementById('meetingVideo');
    if (videoElement) {
      videoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // This effect ensures the first item is expanded when the component mounts
  useEffect(() => {
    // Find the first accordion item and ensure it's expanded
    const firstCollapseElement = document.getElementById('collapse0');
    const firstButtonElement = document.querySelector('button[data-bs-target="#collapse0"]');
    
    if (firstCollapseElement && firstButtonElement) {
      // Add the show class to expand it
      firstCollapseElement.classList.add('show');
      
      // Update the button to reflect the expanded state
      firstButtonElement.classList.remove('collapsed');
      firstButtonElement.setAttribute('aria-expanded', 'true');
    }
  }, []);

  return (
    <div className="accordion mb-5 mt-4" id="agendaAccordion" style={{ maxHeight: '500px', overflowY: 'auto' }}>
      {agendaItems.map((item, index) => (
        <div key={item.number} className="accordion-item">
          <h2 className="accordion-header" id={`heading${item.number}`}>
            <button 
              className={`accordion-button ${index === 0 ? '' : 'collapsed'}`}
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target={`#collapse${item.number}`} 
              aria-expanded={index === 0 ? "true" : "false"}
              aria-controls={`collapse${item.number}`}
            >
              Item {item.number}: {item.title}
            </button>
          </h2>
          <div 
            id={`collapse${item.number}`} 
            className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
            aria-labelledby={`heading${item.number}`} 
            data-bs-parent="#agendaAccordion"
          >
            <div className="accordion-body">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div className="d-flex align-items-center">
                  <button className="btn btn-outline-secondary btn-sm me-2" onClick={scrollToVideo}>
                    <i className="bi bi-play-fill"></i> Play Clip
                  </button>
                  <button className="btn btn-link btn-sm me-2">
                    <i className="bi bi-cloud-download"></i>
                  </button>
                  <button className="btn btn-link btn-sm me-2">
                    <i className="bi bi-share"></i>
                  </button>
                </div>
                <div className="d-flex align-items-center">
                  <button className="btn btn-link btn-sm me-2">
                    <i className="bi bi-image"></i>
                  </button>
                  <div className="dropdown">
                    <button className="btn btn-link dropdown-toggle" type="button" id={`dropdownMenuButton${item.number}`} data-bs-toggle="dropdown" aria-expanded="false">
                      Insert
                    </button>
                    <ul className="dropdown-menu" aria-labelledby={`dropdownMenuButton${item.number}`}>
                      <li><a className="dropdown-item" href="#">TXSET Agenda Table.pdf</a></li>
                      <li><a className="dropdown-item" href="#">Flight Testing Update to TXSET20221020.pdf</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MeetingAgendaItems;