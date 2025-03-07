import React from 'react';

const mockDocuments = [
  {
    id: 1,
    title: 'TXSET Agenda Table',
    date: 'Oct 19, 2022',
    type: 'docx',
    size: '19 KB',
  },
  {
    id: 2,
    title: 'Flight Testing Update to TXSET20221020',
    date: 'Oct 19, 2022',
    type: 'pptx',
    size: '81.4 KB',
  },
];

const SupportingDocs = ({ onClose }) => {
  return (
    <div className="card mb-4 mt-3">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="card-title mb-0">Supporting Documents</h5>
          <button onClick={onClose} className="btn btn-link p-0">
            Close
          </button>
        </div>
        <ul className="list-unstyled">
          {mockDocuments.map((doc) => (
            <li key={doc.id} className="mb-3 pb-3 border-bottom">
              <div className="row">
                <div className="col-md-8">
                  <a href="#" className="text-primary fw-medium text-decoration-none">
                    {doc.title}
                  </a>
                  <p className="text-muted small mt-1 mb-0">
                    {doc.date} - {doc.type} - {doc.size}
                  </p>
                </div>
                <div className="col-md-4 d-flex justify-content-md-end gap-2 mt-2 mt-md-0">
                  <button className="btn btn-sm btn-outline-secondary">
                    Preview
                  </button>
                  <button className="btn btn-sm btn-outline-primary">
                    Download
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SupportingDocs;