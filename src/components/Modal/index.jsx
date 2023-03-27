import {
  Box, Modal,
} from '@mui/material';
import PropTypes from 'prop-types';
import { styledBox } from './styles';

import FormContainer from '../Form/FormContainer';
import FormModal from '../Form/FormModal';

export default function BasicModal({ openModal, onCloseModal }) {
  return (
    <div>
      <Modal
        open={openModal}
        onClose={onCloseModal}
      >
        <Box sx={styledBox}>
          <FormContainer title="Adicionar novo cliente">
            <FormModal onCloseModal={onCloseModal} />
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
