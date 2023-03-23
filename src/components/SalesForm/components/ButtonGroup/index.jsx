import PropTypes from 'prop-types';
import { StyledButtonGroup } from './styles';

function ButtonGroup({ children }) {
  return (
    <StyledButtonGroup>
      {children}
    </StyledButtonGroup>
  );
}

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonGroup;
