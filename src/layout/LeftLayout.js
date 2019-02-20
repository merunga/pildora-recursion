import React from 'react';
import PropTypes from 'prop-types';

const LeftLayout = ({ children }) => (
  <div
    style={{
      height: '100vw',
      textAlign: 'left',
    }}
  >
    {children}
  </div>
);

LeftLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LeftLayout;
