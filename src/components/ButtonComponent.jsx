import React from 'react';

const ButtonComponent = () => {
  return (
    <div className="button-component" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '50px 0' }}>
      <button className="btn btn-primary" style={{ backgroundColor: '#194f90', color: 'white' }}>
        Link to Original Article
      </button>
      <p style={{ fontSize: '12px', textAlign: 'center', marginTop: '10px' }}>
        Please note that content provider might require a paid subscription.
      </p>
    </div>
  );
};

export default ButtonComponent;
