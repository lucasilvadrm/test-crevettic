import React from 'react';
import PropTypes from 'prop-types';
import { StyledContentForm } from './styles';

function ContentForm({ children, title }) {
  return (
    <StyledContentForm>
      <h1>{title}</h1>
      {children}
    </StyledContentForm>
  );
}

ContentForm.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default ContentForm;
