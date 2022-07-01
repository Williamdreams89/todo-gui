import React from 'react';
import styled from 'styled-components';
import FooterSearch from './FooterSearch';
import Nav from './Nav';
import Todos from './Todos';

function Gui() {
  const StyledGUI = styled.div`
    width: 100vw;
    height: 90vh;
    background-color: white;
    overflow-y: scroll;
  `;

  return (
    <StyledGUI>
        <Nav />
        <Todos />
        <FooterSearch />
    </StyledGUI>
  )
}

export default Gui