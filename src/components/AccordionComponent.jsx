import React, { useState } from 'react';

const AccordionComponent = () => {
  // Track which panels are open (initially only the first one)
  const [openPanels, setOpenPanels] = useState([0]);
  
  const togglePanel = (index) => {
    setOpenPanels(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        // If we want accordion behavior (only one open at a time):
        // return [index];
        
        // If we want multiple panels to be open:
        return [...prev, index];
      }
    });
  };
  
  const toggleAll = () => {
    if (openPanels.length === 3) {
      // If all are open, close all
      setOpenPanels([]);
    } else {
      // Otherwise, open all
      setOpenPanels([0, 1, 2]);
    }
  };
  
  const items = [
    {
      title: "Accordion Item #1",
      content: (
        <div>
          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      )
    },
    {
      title: "Accordion Item #2",
      content: (
        <div>
          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      )
    },
    {
      title: "Accordion Item #3",
      content: (
        <div>
          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      )
    }
  ];

  return (
    <div className="accordion-component" style={{ margin: '20px 0' }}>
      <button className="btn btn-secondary mb-3" onClick={toggleAll}>
        {openPanels.length === 3 ? 'Collapse All' : 'Expand All'}
      </button>
      <div className="accordion" id="accordionExample">
        {items.map((item, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className={`accordion-button ${!openPanels.includes(index) ? 'collapsed' : ''}`}
                type="button"
                onClick={() => togglePanel(index)}
                aria-expanded={openPanels.includes(index)}
                aria-controls={`collapse${index}`}
              >
                {item.title}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${openPanels.includes(index) ? 'show' : ''}`}
              aria-labelledby={`heading${index}`}
            >
              <div className="accordion-body">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccordionComponent;