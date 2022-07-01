import React, { useState } from "react";
import styled from "styled-components";
import { Md2KPlus } from "react-icons/md";
import FilterBody from "./FilterBody";

function Todos({ name }) {
  const StyledTodoss = styled.div``;
  return (
    <StyledTodoss>
      <Filter name="Today" />
      <Filter name="Tomorrow" />
      <Filter name="Upcoming" />
      <Filter name="Someday" />
    </StyledTodoss>
  );
}

function Filter({ name }) {
  const StyledFilters = styled.div`
    color: blue;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &>*{
        cursor: pointer;
    }
    
    

    span {
      font-size: 25px;
    }

    h5 {
      font-size: 18px;
    }
  `;
  const Container = styled.div`
    width: 90vw;
    margin: auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    
  `;

  const NumberTag = () => {
    return (
      <small
        style={{
          border: "1px solid blue",
          borderRadius: "50%",
          width: "20px",
          height: "20px",
          textAlign: "center",
        }}
      >
        4
      </small>
    );
  };

  const [showFilterBody, setShowFilterBody] = useState(false);
  return (
    <Container>
      <StyledFilters
        showFilterBody={showFilterBody}
        onClick={() => setShowFilterBody(!showFilterBody)}
      >
        <h5>{name}</h5>
        {showFilterBody === false ? <NumberTag /> : <span>+</span>}
      </StyledFilters>
      <FilterBody showFilterBody ={showFilterBody} />
    </Container>
  );
}

export default Todos;
