import React from 'react';
import { HeaderContainer } from './styles';

import logo from '../../assets/images/logo.svg';

function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo-crevettic" />
    </HeaderContainer>
  );
}

export default Header;
