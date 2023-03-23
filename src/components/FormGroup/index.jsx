import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

function FormGroup({ children, title }) {
  return (
    <>
      <Typography
        variant="h1"
        component="h1"
        marginBottom={5}
      >
        {title}
      </Typography>
      {children}
    </>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default FormGroup;
