import React from 'react';

export default function SearchBar({ search, setSearch }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Search by name or roll..."
        className="form-control"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
