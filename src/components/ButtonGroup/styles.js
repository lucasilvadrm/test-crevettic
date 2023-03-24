import styled, { css } from 'styled-components';

export const StyledButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0;
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};

  ${({ justify }) => justify && css`
    justify-content: ${justify}
  `}
`;
