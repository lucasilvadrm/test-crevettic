/* eslint-disable react/jsx-props-no-spreading */
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import PropTypes from 'prop-types';
import 'dayjs/locale/pt-br';
import dayjs from 'dayjs';
import { Stack } from '@mui/system';
import { useState } from 'react';

function CustomDatePicker({ labelText }) {
  const [selectedDate, setSelectedDate] = useState(dayjs(new Date()));

  const handleChangeDate = (newValue) => {
    setSelectedDate(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <Stack>
        <DatePicker
          label={labelText}
          value={selectedDate}
          onChange={handleChangeDate}
        />
      </Stack>
    </LocalizationProvider>
  );
}

CustomDatePicker.propTypes = {
  labelText: PropTypes.string.isRequired,
};

export default CustomDatePicker;
