import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/util.css';
import '../../assets/css/main.css';

const Base = ({ children }) => (
  <div className="limiter">
    <div className="container-login100">
      <div className="wrap-login100">{children}</div>
    </div>
  </div>
);

Base.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Base;
