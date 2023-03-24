import PropTypes from 'prop-types';
import { StyledButtonGroup } from './styles';

function ButtonGroup({ children, wrap, justify }) {
  return (
    <StyledButtonGroup $wrap={wrap} justify={justify}>
      {children}
    </StyledButtonGroup>
  );
}

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  wrap: PropTypes.bool,
  justify: PropTypes.string,
};

ButtonGroup.defaultProps = {
  wrap: false,
  justify: null,
};

export default ButtonGroup;
