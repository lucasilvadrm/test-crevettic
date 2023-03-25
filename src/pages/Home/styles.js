import { styled as StyledMUI } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import styled from 'styled-components';

export const StyledPaper = StyledMUI(Paper)(({ theme }) => ({
  ...theme.typography.fontSize,
  width: '100%',
  maxWidth: 1355,
  minHeight: 385,
  padding: '32px 57px',
  borderRadius: 20,
  margin: '0 auto',
}));

export const Option = styled.div`
  border-top: 1px solid #ddd;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  font-size: 13px;

  span {
    margin-right: 8px;
  }

  small {
    font-size: inherit;
    cursor: pointer;
    color: #0076C6;
  }
`;
