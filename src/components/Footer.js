import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterTextWrapper>
      <p>Stay in Touch</p>
      <span>NEWS / INSPO / MOOD</span>
      <Link to='https://www.instagram.com/rationalleworld/' target='_blank'>
        @rationalleworld
      </Link>
    </FooterTextWrapper>
  );
}

const FooterTextWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  text-align: center;
  span {
    padding: 10px 0 0px 0;
    font-family: var(--helvetica);
  }
`;
