/* eslint-disable react/jsx-props-no-spreading */
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import PropTypes from 'prop-types';
import 'dayjs/locale/pt-br';
import { Stack } from '@mui/system';

function CustomDatePicker({
  children,
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <Stack>
        {children}
      </Stack>
    </LocalizationProvider>
  );
}

CustomDatePicker.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomDatePicker;
