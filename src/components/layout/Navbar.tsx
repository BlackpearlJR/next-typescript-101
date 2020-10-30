import { gutter } from '@/styles/variables';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: ${gutter.default};
  background: ${({ theme }) => theme.navbar.background};
  color: ${({ theme }) => theme.navbar.contrasText};
`;

function Navbar() {
  return (
    <Wrapper>
      Navbar
    </Wrapper>
  )
}

export default Navbar
