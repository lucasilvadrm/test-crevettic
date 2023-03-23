import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.header};
  position: relative;
  margin-bottom: 67px;

  img {
    width: 70px;
    height: 45px;
    position: absolute;
    left: 1.33%;
    right: 94.62%;
    top: 20%;
    bottom: 14.12%;
  }
`;
