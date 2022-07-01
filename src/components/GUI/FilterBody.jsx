import React from 'react';
import styled from 'styled-components';

function FilterBody({showFilterBody}) {
    const StyledFilterBody = styled.div`
        width: 100%;
        height: max-content;
        min-height: 10rem;
        display: ${({showFilterBody})=> showFilterBody ? "" : "none"};
    `;
  return (
    <StyledFilterBody showFilterBody ={showFilterBody}>FilterBody</StyledFilterBody>
  )
}

export default FilterBody