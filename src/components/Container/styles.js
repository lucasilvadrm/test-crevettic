import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1355px;
  min-height: 385px;
  margin: 0 auto;
  margin-top: 30px;
  padding: 32px 57px;
  border-radius: ${({ theme }) => theme.borderRadius.component};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
