/* eslint-disable max-len */
import {
  Button, Grid, TextField,
} from '@mui/material';
import React from 'react';
import ContentForm from '../ContentForm';
import { StyledContainer } from './styles';

function Container() {
  return (
    <StyledContainer>
      <ContentForm title="Dados da Venda">
        <Grid container>
          <Grid xs={12}>
            <TextField id="outlined-search" label="Descrição" type="search" fullWidth />
          </Grid>
          <Grid xs={4}>
            <TextField id="outlined-search" label="Status" type="search" fullWidth />
          </Grid>
          <Grid xs={8}>
            <TextField id="outlined-search" label="Cliente" type="search" fullWidth />
          </Grid>
          <Grid xs={4}>
            <TextField id="outlined-search" label="Data de Venda" type="search" fullWidth />
          </Grid>
          <Grid xs={4}>
            <TextField id="outlined-search" label="Quantidade" type="search" fullWidth />
          </Grid>
          <Grid xs={4}>
            <TextField size={5} id="outlined-search" label="Preço de venda" type="search" fullWidth />
          </Grid>
        </Grid>
        <div className="button__group">
          <Button variant="contained" color="secondary">Voltar</Button>
          <Button variant="contained">Salvar</Button>
        </div>
      </ContentForm>
    </StyledContainer>
  );
}

export default Container;
