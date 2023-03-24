import {
  Box, FormControl, Grid, InputLabel, MenuItem, Modal, Select, TextField,
} from '@mui/material';
import { useState } from 'react';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';

import FormGroup from '../FormGroup';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 679,
  height: 435,
  bgcolor: 'background.paper',
  padding: '32px 57px',
  borderRadius: '10px',
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>Deseja cadastrar outro cliente?</span>
        <MenuItem onClick={handleOpen}>Cadastrar cliente+</MenuItem>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormGroup title="Adicionar novo cliente">
            <Grid container spacing={2}>
              <Grid xs={12} item>
                <TextField label="Nome" name="name" type="text" fullWidth />
              </Grid>
              <Grid xs={9} item>
                <FormControl fullWidth>
                  <TextField label="Rua" type="text" fullWidth />
                </FormControl>
              </Grid>
              <Grid xs={3} item>
                <FormControl fullWidth>
                  <TextField label="Número" type="number" fullWidth />
                </FormControl>
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
            <Button width={171} variant="outlined">Cancelar</Button>
            <Button width={171} type="submit">Adicionar</Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </div>
  );
}
