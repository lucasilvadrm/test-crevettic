/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  useMediaQuery,
} from '@mui/material';
import { useState } from 'react';
import FormContainer from '../Form/FormContainer';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import BasicModal from '../Modal';
// import { Option } from './styles';
import FormSale from '../Form/FormSale';

function Sales() {
  const smDown = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <FormContainer title="Dados de Venda">
      <button type="button" onClick={handleOpenModal}>
        CHAMA MODAL
      </button>
      <BasicModal
        openModal={openModal}
        onCloseModal={handleCloseModal}
      />
      <FormSale />
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
    </FormContainer>
  );
}

export default Sales;
