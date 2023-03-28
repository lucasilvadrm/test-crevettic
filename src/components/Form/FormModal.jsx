import React from 'react';
import PropTypes from 'prop-types';

import {
  Grid, MenuItem, TextField,
} from '@mui/material';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Select from '../Select';

import formatPhone from '../../utils/formatPhone';
import { useFormModal } from '../../hooks/useFormModal';

function FormModal({ onCloseModal }) {
  const {
    states,
    cities,
    isLoading,
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useFormModal({ onCloseModal });

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Grid container spacing={2}>
        <Grid xs={12} item>
          <TextField
            label="Nome"
            type="text"
            id="name"
            name="name"
            value={values.name}
            helperText={touched.name && errors.name}
            error={touched.name && Boolean(errors.name)}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
          />
        </Grid>
        <Grid xs={9} item>
          <TextField
            label="Rua"
            type="text"
            id="street"
            name="street"
            value={values.street}
            helperText={touched.street && errors.street}
            error={touched.street && Boolean(errors.street)}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
          />
        </Grid>
        <Grid xs={3} item>
          <TextField
            label="Número"
            type="number"
            id="number"
            name="number"
            value={values.number}
            helperText={touched.number && errors.number}
            error={touched.number && Boolean(errors.number)}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
          />
        </Grid>
        <Grid xs={3} item>
          <Select
            value={values.state}
            label="Estado"
            id="state"
            name="state"
            messageError={touched.state && errors.state}
            error={touched.state && Boolean(errors.state)}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isLoading}
            isLoading={isLoading}
          >
            {states?.map((state) => (
              <MenuItem
                key={state.id}
                value={state.sigla}
              >
                {state.nome}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid xs={4} item>
          <Select
            value={values.city}
            label="Cidade"
            id="city"
            name="city"
            messageError={touched.city && errors.city}
            error={touched.city && Boolean(errors.city)}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={!values.state}
            isLoading={!values.state && isLoading}
          >
            {cities?.map((city) => (
              <MenuItem
                key={city.id}
                value={city.id}
              >
                {city.nome}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid xs={5} item>
          <TextField
            label="Telefone"
            type="text"
            id="phone"
            name="phone"
            value={values.phone}
            helperText={touched.phone && errors.phone}
            error={touched.phone && Boolean(errors.phone)}
            onChange={(event) => {
              setFieldValue('phone', formatPhone(event.target.value));
            }}
            onBlur={handleBlur}
            inputProps={{
              maxLength: 15,
            }}
            fullWidth
          />
        </Grid>
      </Grid>
      <ButtonGroup justify="flex-end">
        <Button
          width={171}
          variant="outlined"
          onClick={onCloseModal}
        >
          Cancelar
        </Button>
        <Button
          disabled={isSubmitting}
          width={171}
          type="submit"
          isSubmitting={isSubmitting}
        >
          Adicionar
        </Button>
      </ButtonGroup>
    </form>
  );
}

FormModal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};

export default FormModal;
