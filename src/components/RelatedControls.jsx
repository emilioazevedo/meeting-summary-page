import React from 'react';
import tag1Icon from '../assets/tag1.png';   
import tag2Icon from '../assets/tag2.png';
import tag3Icon from '../assets/tag3.png'; 
import tag4Icon from '../assets/tag4.png';

const RelatedControls = () => {
  return (
    <div className="mb-3">
      <span className="me-2">Related controls:</span>
          <img src={tag1Icon} alt="Filing Icon" style={{ width: '126px', height: '24px', marginRight: '8px' }} />
          <img src={tag2Icon} alt="Filing Icon" style={{ width: '126px', height: '24px', marginRight: '8px' }} />
          <img src={tag3Icon} alt="Filing Icon" style={{ width: '126px', height: '24px', marginRight: '8px' }} />
          <img src={tag4Icon} alt="Filing Icon" style={{ width: '126px', height: '24px', marginRight: '8px' }} />
    </div>
  );
};

export default RelatedControls;
