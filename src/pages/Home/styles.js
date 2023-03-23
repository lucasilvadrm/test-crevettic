import { styled as StyledMUI } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export const StyledPaper = StyledMUI(Paper)(({ theme }) => ({
  ...theme.typography.fontSize,
  width: '100%',
  maxWidth: 1355,
  minHeight: 385,
  padding: '32px 57px',
  borderRadius: 20,
  margin: '0 auto',
}));
