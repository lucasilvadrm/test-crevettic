/* eslint-disable no-console */
import React, { useContext } from 'react';
import { Grid, MenuItem, TextField } from '@mui/material';
import { useFormik } from 'formik';
import dayjs from 'dayjs';

import { DatePicker } from '@mui/x-date-pickers';

import { saleSchema } from '../../../schemas';
import Button from '../../Button';
import ButtonGroup from '../../ButtonGroup';
import Select from '../../Select';

import CustomDatePicker from '../../CustomDatePicker';
import { initialValues, onSubmit } from './helpers';
import { ClientContext } from '../../../contexts/ClientContext';

function FormSale() {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: saleSchema,
    validateOnChange: false,
    onSubmit,
  });

  const [clients] = useContext(ClientContext);

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Grid container spacing={2}>
        <Grid xs={12} item>
          <TextField
            label="Descrição"
            type="text"
            id="description"
            name="description"
            value={values.description}
            helperText={touched.description && errors.description}
            error={touched.description && Boolean(errors.description)}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
          />
        </Grid>
        <Grid xs={4} item>
          <Select
            value={values.status}
            label="Status"
            id="status"
            name="status"
            messageError={touched.status && errors.status}
            error={touched.status && Boolean(errors.status)}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <MenuItem value="concluded">Concluído</MenuItem>
            <MenuItem value="pending">Pendente</MenuItem>
          </Select>
        </Grid>
        <Grid
          xs={8}
          item
        >
          {/* <Autocomplete
            options={clients}
            getOptionLabel={(option) => option.name}
            onChange={(event, value) => {
              setFieldValue('client', value?.name);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                label="Cliente"
                id="client"
                name="client"
                error={Boolean(
                  touched.client && errors.client,
                )}
                helperText={touched.client && errors.client}
                onBlur={handleBlur}
              />
            )}
          /> */}
          <Select
            value={values.client}
            label="Cliente"
            id="client"
            name="client"
            messageError={touched.client && errors.client}
            error={touched.client && Boolean(errors.client)}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            {clients?.map((client) => (
              <MenuItem
                key={client.id}
                value={client.name}
              >
                {client.name}
              </MenuItem>
            ))}
            <MenuItem value="concluded">Concluído</MenuItem>
            <MenuItem value="pending">Pendente</MenuItem>
          </Select>
        </Grid>
        <Grid xs={4} item>
          <CustomDatePicker>
            <DatePicker
              label="Data da venda"
              value={values.dateOfSale}
              onChange={(value) => {
                setFieldValue('dateOfSale', value);
              }}
              maxDate={dayjs(new Date())}
              slotProps={errors.dateOfSale && {
                textField: {
                  helperText: errors.dateOfSale,
                },
              }}
            />
          </CustomDatePicker>
        </Grid>
        <Grid xs={4} item>
          <TextField
            label="Quantidade (em kg)"
            type="number"
            id="quantity"
            name="quantity"
            value={values.quantity}
            helperText={touched.quantity && errors.quantity}
            error={touched.quantity && Boolean(errors.quantity)}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
          />
        </Grid>
        <Grid xs={4} item>
          <TextField
            label="Preço de venda"
            type="text"
            id="price"
            name="price"
            value={values.price}
            helperText={touched.price && errors.price}
            error={touched.price && Boolean(errors.price)}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
          />
        </Grid>
      </Grid>
      <ButtonGroup>
        <Button
          color="secondary"
        >
          Voltar
        </Button>
        <Button
          disabled={isSubmitting}
          color="primary"
          type="submit"
        >
          Salvar
        </Button>
      </ButtonGroup>
    </form>
  );
}

export default FormSale;
