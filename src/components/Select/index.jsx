import { FormControl, InputLabel, Select as SelectMui } from '@mui/material';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import { Error, Loading } from './styles';

function Select({
  children,
  label,
  messageError,
  isLoading,
  ...rest
}) {
  return (
    <FormControl fullWidth>
      <InputLabel color={messageError ? 'error' : 'primary'}>
        {label}
      </InputLabel>
      <SelectMui
        sx={{ position: 'relative' }}
        label={label}
        {...rest}
      >
        {children}
      </SelectMui>
      {messageError && <Error>{messageError}</Error>}
      {isLoading && <Loading><Spinner size={15} /></Loading>}
    </FormControl>
  );
}

Select.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  messageError: PropTypes.string,
  isLoading: PropTypes.bool,
};

Select.defaultProps = {
  messageError: null,
  isLoading: false,
};

export default Select;
