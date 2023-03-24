/* eslint-disable react/prop-types */
import { FormControl, InputLabel, Select as SelectMui } from '@mui/material';
import PropTypes from 'prop-types';

function Select({ children, label, ...rest }) {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <SelectMui
        label={label}
        {...rest}
      >
        {children}
      </SelectMui>
    </FormControl>
  );
}

Select.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

export default Select;
