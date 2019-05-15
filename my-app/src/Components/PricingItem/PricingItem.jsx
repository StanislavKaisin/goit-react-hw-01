import React from 'react';
import PropTypes from 'prop-types';

const PricingItem = ({ capacity, description, icon, label, price }) => {
  return (
    <div className="pricing-item">
      <i className="icon" />
      <h2 className="label">{label}</h2>
      <p className="capacity">{capacity} Storage</p>
      <p className="description">{description}</p>
      <p className="price">${price}/MO</p>
      <button className="button" type="button">
        Get Started
      </button>
    </div>
  );
};

PricingItem.propTypes = {
  capacity: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default PricingItem;
