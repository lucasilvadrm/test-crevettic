import { useState } from 'react';
import { StyledPaper } from './styles';
import FormContainer from '../../components/Form/FormContainer';
import BasicModal from '../../components/Modal';
import FormSale from '../../components/Form/FormSale';

function Home() {
  const [openModal, setOpenModal] = useState(false);

  // const handleOpenModal = () => {
  //   setOpenModal(true);
  // };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <StyledPaper
      elevation={3}
    >
      <FormContainer title="Dados da Venda">
        {/* <button type="button" onClick={handleOpenModal}>
          CHAMA MODAL
        </button> */}
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
