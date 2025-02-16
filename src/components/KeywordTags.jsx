import React from 'react';

const KeywordTags = () => {
  const keywords = ['Texas', 'ERCOT', 'Energy', 'Renewable', 'Grid'];
  
  return (
    <div className="p-3 border rounded mt-3" style={{ backgroundColor: 'white' }}>
      <h6 className="mb-3">Keywords Tags:</h6>
      <div className="d-flex flex-wrap gap-2">
        {keywords.map((keyword, index) => (
          <span key={index} className="badge bg-secondary">{keyword}</span>
        ))}
      </div>
    </div>
  );
};

export default KeywordTags;
