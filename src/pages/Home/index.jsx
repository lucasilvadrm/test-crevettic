import { StyledPaper } from './styles';
import Sales from '../../components/Sales';

function Home() {
  return (
    <StyledPaper
      elevation={3}
    >
      <Sales />
    </StyledPaper>
  );
}

export default Home;
