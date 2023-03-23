import {
  FormControl, Grid, InputLabel, MenuItem, Select, TextField,
} from '@mui/material';
import CustomDatePicker from '../CustomDatePicker';
import FormGroup from '../FormGroup';
import ButtonGroup from './components/ButtonGroup';
import Button from '../Button';

function SalesForm() {
  return (
    <FormGroup title="Dados de venda">
      <Grid container spacing={2}>
        <Grid xs={12} item>
          <FormControl fullWidth>
            <TextField label="Descrição" type="text" fullWidth />
          </FormControl>
        </Grid>
        <Grid xs={4} item>
          <FormControl fullWidth>
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
          </FormControl>
        </Grid>
        <Grid xs={8} item>
          <FormControl fullWidth>
            <InputLabel id="select-label-status">Cliente</InputLabel>
            <Select
              labelId="select-label-cliente"
              id="select-cliente"
              label="Cliente"
              onChange={() => {}}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
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
      <ButtonGroup>
        <Button onClick={() => {}}>
          Voltar
        </Button>
        <Button
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
