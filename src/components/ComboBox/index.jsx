import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import PropTypes from 'prop-types';

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  }];

export default function ComboBox({ label, ...rest }) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box"
      options={top100Films}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => <TextField {...params} label={label} />}
      {...rest}
    />
  );
}

ComboBox.propTypes = {
  label: PropTypes.string.isRequired,
};
