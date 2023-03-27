import styled from 'styled-components';

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
