import { FormControl, InputLabel, Select as SelectMui } from '@mui/material';
import PropTypes from 'prop-types';
import { Error } from './styles';

function Select({
  children, label, messageError, ...rest
}) {
  return (
    <FormControl fullWidth>
      <InputLabel color={messageError ? 'error' : 'primary'}>
        {label}
      </InputLabel>
      <SelectMui
        label={label}
        // color={messageError ? 'error' : 'primary'}
        {...rest}
      >
        {children}
      </SelectMui>
      {messageError && <Error>{messageError}</Error>}
    </FormControl>
  );
}

Select.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  messageError: PropTypes.string,
};

Select.defaultProps = {
  messageError: null,
};

export default Select;
