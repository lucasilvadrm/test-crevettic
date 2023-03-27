/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import {
  Grid, MenuItem, TextField,
} from '@mui/material';
import { useFormik } from 'formik';
import dayjs from 'dayjs';

import { DatePicker } from '@mui/x-date-pickers';

import { saleSchema } from '../../../schemas';
import Button from '../../Button';
import ButtonGroup from '../../ButtonGroup';
import Select from '../../Select';

import CustomDatePicker from '../../CustomDatePicker';
import { initialValues } from './helpers';
import { ClientContext } from '../../../contexts/ClientContext';
import { Option } from './styles';
import { ModalContext } from '../../../contexts/ModalContext';
import { delay } from '../../../utils/delay';
import { onlynumber } from '../../../utils/onlyNumber';
import { formatPrice } from '../../../utils/formatPrice';

function FormSale() {
  const { clients } = useContext(ClientContext);
  const { handleOpenModal } = useContext(ModalContext);

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
    validateOnChange: true,
    onSubmit: async (fields, { resetForm }) => {
      console.log('Submitted', fields);
      console.log({
        ...fields,
        price: Number(fields.price),
        quantity: Number(fields.quantity),
        dateOfSale: dayjs(fields.dateOfSale).format('DD/MM/YYYY'),
      });
      await delay(1000);
      resetForm();
    },
  });

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
        <Grid xs={8} item>
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
            <Option>
              <span>Deseja cadastrar outro fornecedor?</span>
              <small onClick={handleOpenModal}>Cadastrar Fornecedor+</small>
            </Option>
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
              disableFuture
              // slotProps={{
              //   textField: {
              //     helperText: errors.dateOfSale,
              //   },
              // }}
            />
          </CustomDatePicker>
        </Grid>
        <Grid xs={4} item>
          <TextField
            label="Quantidade (em kg)"
            type="text"
            id="quantity"
            name="quantity"
            value={onlynumber(values.quantity)}
            helperText={touched.quantity && errors.quantity}
            error={touched.quantity && Boolean(errors.quantity)}
            onChange={handleChange}
            onBlur={handleBlur}
            inputProps={{
              min: 0,
            }}
            fullWidth
          />
        </Grid>
        <Grid xs={4} item>
          <TextField
            label="Preço de venda"
            type="text"
            id="price"
            name="price"
            value={formatPrice(values.price)}
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
          isSubmitting={isSubmitting}
        >
          Salvar
        </Button>
      </ButtonGroup>
    </form>
  );
}

export default FormSale;
