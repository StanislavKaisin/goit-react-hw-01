import React from 'react';
import PropTypes from 'prop-types';

const Stats = ({ stats = [] }) => {
  return (
    <section className="stats-section">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id} className="item">
              <span className="label">{label}</span>
              <span className="percentage">{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Stats.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Stats;
