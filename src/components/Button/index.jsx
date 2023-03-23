import { Button as ButtonMui } from '@mui/material';
import PropTypes from 'prop-types';

export default function Button({
  children, variant, color, type, onClick,
}) {
  return (
    <ButtonMui
      fullWidth
      variant={variant}
      color={color}
      size="large"
      type={type}
      onClick={onClick}
      sx={{
        borderRadius: '10px',
      }}
    >
      {children}

    </ButtonMui>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  color: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  type: 'button',
  variant: 'contained',
};
