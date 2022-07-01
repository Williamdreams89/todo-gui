import React from 'react';
import {FaToolbox, FaParachuteBox, FaCircleNotch} from "react-icons/fa"
import styled from 'styled-components';


function Nav() {
    const StyledNav = styled.div`
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 3rem;
        color: #333;
        font-weight: 100;
        margin-bottom: 2rem;
        
        
        .icon_1, .icon_2, .icon_3{
            flex: 2;
            font-size: 26px;
        }
        b{
            flex:7;
            justify-content: center;
            display: flex;
            align-items: center;
        }

        // @media screen and (min-width: 551px){
        //     display: none;
        // }
    `;
  return (
    <StyledNav>
        <FaToolbox className='icon_1' />

        <b>All Tasks  </b>
        <FaParachuteBox className='icon_2' />
        <FaCircleNotch className='icon_3' />
    </StyledNav>
  )
}

export default Nav