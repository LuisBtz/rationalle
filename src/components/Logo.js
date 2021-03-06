import React from 'react';
import styled from 'styled-components';
import logo from '../images/rationalleLogo.svg';

export default function Logo() {
  return (
    <LogoWrapper>
      <img src={logo} alt='rationalle' />
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div`
  padding: 30px;
  margin: 0 auto;
`;
