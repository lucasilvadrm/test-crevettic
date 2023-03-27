import { useContext } from 'react';
import { StyledPaper } from './styles';
import FormContainer from '../../components/Form/FormContainer';
import BasicModal from '../../components/Modal';
import FormSale from '../../components/Form/FormSale';
import { ModalContext } from '../../contexts/ModalContext';

function Home() {
  const { openModal, handleCloseModal } = useContext(ModalContext);

  return (
    <StyledPaper
      elevation={3}
    >
      <FormContainer title="Dados da Venda">
        <BasicModal
          openModal={openModal}
          onCloseModal={handleCloseModal}
        />
        <FormSale />
      </FormContainer>
    </StyledPaper>
  );
}

export default Home;
