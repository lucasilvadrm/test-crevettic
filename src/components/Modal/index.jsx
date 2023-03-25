import {
  Box, Modal,
} from '@mui/material';
import PropTypes from 'prop-types';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import { styledBox } from './styles';

import FormContainer from '../Form/FormContainer';
import FormModal from '../Form/FormModal';

export default function BasicModal({ openModal = false, onCloseModal }) {
  console.log('Basic Modal renderizou');
  return (
    <div>
      <Modal
        open={openModal}
        onClose={onCloseModal}
      >
        <Box sx={styledBox}>
          <FormContainer title="Adicionar novo cliente">
            <FormModal />
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
          </FormContainer>
        </Box>
      </Modal>
    </div>
  );
}

BasicModal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
