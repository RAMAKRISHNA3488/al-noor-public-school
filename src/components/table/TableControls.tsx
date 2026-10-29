import React from 'react';

interface TableControlsProps {
  entriesPerPage: number;
  onEntriesChange: (entries: number) => void;
  searchTerm: string;
  onSearchChange: (search: string) => void;
}

export const TableControls: React.FC<TableControlsProps> = ({
  entriesPerPage,
  onEntriesChange,
  searchTerm,
  onSearchChange
}) => {
  return (
    <div className="table-controls-wrapper">
      <div className="entries-control">
        <span>Show</span>
        <select
          value={entriesPerPage}
          onChange={e => onEntriesChange(Number(e.target.value))}
          className="entries-select"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <span>entries</span>
      </div>

      <div className="search-control">
        <label htmlFor="table-search">Search:</label>
        <input
          id="table-search"
          type="text"
          value={searchTerm}
          onChange={e => onSearchChange(e.target.value)}
          placeholder="Filter records..."
          className="search-input"
        />
      </div>
    </div>
  );
};
