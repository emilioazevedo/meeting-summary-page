import React from 'react';
import ercotImage from '../assets/ercot.png';

const ArticleImage = () => {
  return (
    <div className="article-image" style={{ display: 'flex', justifyContent: 'center' }}>
      <img 
        src={ercotImage} 
        alt="ERCOT" 
        style={{ width: '96%', height: 'auto' }} // Make the image responsive
      />
    </div>
  );
};

export default ArticleImage;
