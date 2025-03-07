import React from 'react';

const MeetingInfo = () => {
  return (
    <div className="mt-2 mb-4 d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center mb-2">
        <div className="d-flex flex-column align-items-center me-2">
          <h4 className="mb-0" style={{ fontSize: '14px', color: '#194f90' }}></h4>
        </div>
        <div className="ms-3">
          <div className="d-flex flex-column">
            <p className="text-muted mb-0" style={{ fontSize: '16px' }}>After extended deliberations, ERCOT has come to an agreement with renewable energy developers regarding the implementation of ride-through ability for inverter-based resources in Texas. While ERCOT remains firm on the necessity of this capability to prevent grid failures, a compromise involving a software-based solution has been reached to address stakeholder concerns. The Public Utility Commission of Texas has approved the rule, requiring developers to comply through software upgrades or seek exemptions by April 2025 if unable to meet the new requirements.

Despite these developments, concerns linger over whether non-compliant resources will need to invest in costly hardware solutions. Inverter-based resources have been flagged for instability issues, prompting warnings from NERC about their impact on the power system. Recent incidents like the Odessa disturbances in Texas have heightened awareness of the risks associated with these resources, emphasizing the need for proactive measures to safeguard grid reliability and stability.</p>
          </div>
        </div>
      </div>
     
    </div>
  );
};

const ArticleGMSummary = () => {
  return (
    <div className="article-gm-summary">
      <p>After extended deliberations, ERCOT has come to an agreement with renewable energy developers regarding the implementation of ride-through ability for inverter-based resources in Texas. While ERCOT remains firm on the necessity of this capability to prevent grid failures, a compromise involving a software-based solution has been reached to address stakeholder concerns. The Public Utility Commission of Texas has approved the rule, requiring developers to comply through software upgrades or seek exemptions by April 2025 if unable to meet the new requirements.</p>

<p>Despite these developments, concerns linger over whether non-compliant resources will need to invest in costly hardware solutions. Inverter-based resources have been flagged for instability issues, prompting warnings from NERC about their impact on the power system. Recent incidents like the Odessa disturbances in Texas have heightened awareness of the risks associated with these resources, emphasizing the need for proactive measures to safeguard grid reliability and stability.</p>
    </div>
  );
};

export default MeetingInfo;
export { ArticleGMSummary };