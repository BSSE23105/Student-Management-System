import React from 'react';

export default function Card({ title, children }) {
  let header = null;
  if (title) header = <div className="card-header bg-primary text-white">{title}</div>;
  return (
    <div className="card mb-3 shadow-sm"> {/* Bootstrap card */}
      {header}
      <div className="card-body">{children}</div>
    </div>
  );
}
