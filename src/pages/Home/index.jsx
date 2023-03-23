import { StyledPaper } from './styles';
import SalesForm from '../../components/SalesForm';

function Home() {
  return (
    <StyledPaper
      elevation={3}
    >
      <SalesForm />
    </StyledPaper>
  );
}

export default Home;
