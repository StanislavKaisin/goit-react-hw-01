import React from 'react';
import PropTypes from 'prop-types';
import PricingItem from '../PricingItem/PricingItem';

const PricingPlan = ({ items } = []) => {
  return (
    <ul className="pricing-plan">
      {items.map(item => (
        <li key={item.label} className="item">
          <PricingItem {...item}> </PricingItem>
        </li>
      ))}
    </ul>
  );
};

PricingPlan.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string.isRequired }),
  ).isRequired,
};

export default PricingPlan;
