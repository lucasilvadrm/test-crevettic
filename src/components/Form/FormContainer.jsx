import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

function FormContainer({ children, title }) {
  return (
    <>
      <Typography
        variant="h1"
        component="h1"
        marginBottom={5}
        fontSize={20}
      >
        {title}
      </Typography>
      {children}
    </>
  );
}

FormContainer.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default FormContainer;
