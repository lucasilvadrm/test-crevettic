import PropTypes from 'prop-types';
import { StyledButtonGroup } from './styles';

function ButtonGroup({ children, wrap }) {
  return (
    <StyledButtonGroup $wrap={wrap}>
      {children}
    </StyledButtonGroup>
  );
}

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  wrap: PropTypes.bool,
};

ButtonGroup.defaultProps = {
  wrap: false,
};

export default ButtonGroup;
