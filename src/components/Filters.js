import React from 'react';
import styles from '../styles/Filters.module.css';

const Filters = ({ filters, setFilters, sources }) => {
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.filterBar}>
      <input
        type="text"
        name="keyword"
        value={filters.keyword}
        onChange={handleChange}
        placeholder="Search by keyword"
      />
      <select name="source" value={filters.source} onChange={handleChange}>
        {sources.map((source) => (
            <option value={source.id}>{source.name}</option>
        ))}
      </select>
      <input
        type="date"
        name="date"
        value={filters.date}
        onChange={handleChange}
      />
    </div>
  );
};

export default Filters;
