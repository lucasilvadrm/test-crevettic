import {
  Box, FormControl, Grid, InputLabel, MenuItem, Modal, Select, TextField,
} from '@mui/material';
import PropTypes from 'prop-types';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import { styledBox } from './styles';

import FormGroup from '../FormGroup';

export default function BasicModal({ openModal, onCloseModal }) {
  return (
    <div>
      <Modal
        open={openModal}
        onClose={onCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styledBox}>
          <FormGroup title="Adicionar novo cliente">
            <Grid container spacing={2}>
              <Grid xs={12} item>
                <TextField label="Nome" name="name" type="text" fullWidth />
              </Grid>
              <Grid xs={9} item>
                <TextField label="Rua" type="text" fullWidth />
              </Grid>
              <Grid xs={3} item>
                <TextField label="Número" type="number" fullWidth />
              </Grid>
              <Grid xs={3} item>
                <FormControl fullWidth>
                  <InputLabel id="select-label-estado">Estado</InputLabel>
                  <Select
                    labelId="select-label-estado"
                    id="select-estado"
                    label="Estado"
                    onChange={() => {}}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid xs={4} item>
                <FormControl fullWidth>
                  <InputLabel id="select-label-cidade">Cidade</InputLabel>
                  <Select
                    labelId="select-label-cidade"
                    id="select-cidade"
                    label="cidade"
                    onChange={() => {}}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid xs={5} item>
                <FormControl fullWidth>
                  <TextField label="Telefone" type="tel" fullWidth />
                </FormControl>
              </Grid>
            </Grid>
          </FormGroup>
          <ButtonGroup justify="flex-end">
            <Button
              width={171}
              variant="outlined"
              onClick={onCloseModal}
            >
              Cancelar
            </Button>
            <Button
              width={171}
              type="submit"
              onClick={() => {}}
            >
              Adicionar
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </div>
  );
}

BasicModal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
