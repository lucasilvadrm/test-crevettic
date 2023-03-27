import { Button as ButtonMui } from '@mui/material';
import PropTypes from 'prop-types';

export default function Button({
  children,
  variant,
  color,
  type,
  onClick,
  width,
  ...rest
}) {
  const isManualWidth = width ? {
    maxWidth: width,
  } : {};

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
        fontSize: 13,
        height: '39px',
        ...isManualWidth,
      }}
      {...rest}
    >
      {children}

    </ButtonMui>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  width: PropTypes.number,
};

Button.defaultProps = {
  type: 'button',
  variant: 'contained',
  color: 'primary',
  width: undefined,
  onClick: undefined,
};
