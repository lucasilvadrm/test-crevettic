import { Grid, MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react';
import ComboBox from '../ComboBox';
import CustomDatePicker from '../CustomDatePicker';
import Select from '../Select';

function FormSale() {
  const [status, setStatus] = useState(0);
  const [client, setClient] = useState(null);
  const [clientName, setClientName] = useState('');
  const [description, setDescription] = useState('');

  console.log('renderizou Form');

  return (
    <Grid container spacing={2}>
      <Grid xs={12} item>
        <TextField
          label="Descrição"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid xs={4} item>
        <Select
          value={status || ''}
          label="Status"
          onChange={(e) => setStatus(e.target.value)}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </Grid>
      <Grid xs={8} item>
        <ComboBox
          label="Cliente"
          value={client}
          onChange={(event, newValue) => {
            setClient(newValue);
          }}
          inputValue={clientName}
          onInputChange={(event, newInputValue) => {
            setClientName(newInputValue);
          }}
        />
        {/* <FormControl fullWidth>
            <InputLabel id="select-label-cliente">Cliente</InputLabel>
            <Select
              labelId="select-label-cliente"
              id="select-cliente"
              label="Cliente"
              onChange={() => {}}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
              <Option>
                <span>Deseja cadastrar um novo cliente?</span>
                <small onClick={handleOpenModal}>Cadastrar cliente+</small>
              </Option>
            </Select>
          </FormControl> */}
      </Grid>
      <Grid xs={4} item>
        <CustomDatePicker labelText="Data da venda" />
      </Grid>
      <Grid xs={4} item>
        <TextField label="Quantidade (em kg)" type="number" fullWidth />
      </Grid>
      <Grid xs={4} item>
        <TextField label="Preço de venda" type="number" fullWidth />
      </Grid>
    </Grid>
  );
}

export default FormSale;
