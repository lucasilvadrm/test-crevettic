/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  FormControl, Grid, InputLabel, MenuItem, Select, TextField, useMediaQuery,
} from '@mui/material';
import { useState } from 'react';
import CustomDatePicker from '../CustomDatePicker';
import FormGroup from '../FormGroup';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import BasicModal from '../Modal';
import { Option } from './styles';

function SalesForm() {
  const smDown = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <FormGroup title="Dados de Venda">
      <BasicModal
        openModal={openModal}
        onCloseModal={handleCloseModal}
      />
      <Grid container spacing={2}>
        <Grid xs={12} item>
          <TextField label="Descrição" type="text" fullWidth />
        </Grid>
        <Grid xs={4} item>
          {/* <FormControl fullWidth>
            <InputLabel id="select-label-status">Status</InputLabel>
            <Select
              labelId="select-label-status"
              id="select-status"
              label="Status"
              onChange={() => {}}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl> */}
        </Grid>
        <Grid xs={8} item>
          <FormControl fullWidth>
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
          </FormControl>
        </Grid>
        <Grid xs={4} item>
          <CustomDatePicker labelText="Data da venda" />
        </Grid>
        <Grid xs={4} item>
          <TextField label="Quantidade (em kg)" type="number" fullWidth />
        </Grid>
        <Grid xs={4} item>
          <TextField label="Preço de venda" type="text" fullWidth />
        </Grid>
      </Grid>
      <ButtonGroup wrap={smDown}>
        <Button
          color="secondary"
          onClick={() => {}}
        >
          Voltar
        </Button>
        <Button
          color="primary"
          type="submit"
          onClick={() => {}}
        >
          Salvar
        </Button>
      </ButtonGroup>
    </FormGroup>
  );
}

export default SalesForm;
