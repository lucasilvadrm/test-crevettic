import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { StyledContentForm } from './styles';

function ContentForm({ children, title }) {
  return (
    <StyledContentForm>
      <Typography
        variant="h5"
        marginBottom={5}
      >
        {title}
      </Typography>
      {children}
    </StyledContentForm>
  );
}

ContentForm.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default ContentForm;
