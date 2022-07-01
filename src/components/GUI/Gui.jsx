import React from 'react';
import styled from 'styled-components';
import FooterSearch from './FooterSearch';
import Nav from './Nav';
import Todos from './Todos';

function Gui() {
  const StyledGUI = styled.div`
    max-width: 520px;
    height: 90vh;
    background-color: white;
    overflow-y: scroll;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;

    @media screen and (max-width: 520px){
      margin-top: 0
    }
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