import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Md2KPlus } from "react-icons/md";
import FilterBody from "./FilterBody";
import axios from "axios";
import {Form} from "react-bootstrap"

function Todos({ filterTag }) {
  const StyledTodoss = styled.div`
    max-width: 520px;
  `;
 
  return (
    <StyledTodoss>
      <Filter name="All" />
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

    & > * {
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
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  `;

  const NumberTag = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
  
    let componentMounted = true;
  
    useEffect(() => {
      const fetch__data = async () => {
        const result = await axios.get("http://127.0.0.1:8000/api/");
        console.log(result.data);
        if (componentMounted) {
          setLoading(true);
          setData(result.data);
          setLoading(false);
        }
      };
      fetch__data();
    }, []);
    return (
      <>
        {filterTag === "all" ? (
          <small
            style={{
              border: "1px solid blue",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              textAlign: "center",
            }}
          >
            {data.length}
          </small>
        ) : (
          <small
            style={{
              border: "1px solid blue",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              textAlign: "center",
            }}
          >
            0
          </small>
        )}
      </>
    );
  };

  const [showFilterBody, setShowFilterBody] = useState(false);
  const [filterTag, setfilterTag] = useState("all");
  return (
    <Container>
      <StyledFilters
        showFilterBody={showFilterBody}
        onClick={() => {
          setShowFilterBody(!showFilterBody);
          setfilterTag(name.toLowerCase());
          // alert(`Tag is currently set to ${name.toUpperCase()}`);
        }}
      >
        <h5>{name}</h5>
        {showFilterBody === false ? <NumberTag /> : <span>+</span>}
      </StyledFilters>
      <FilterBody showFilterBody={showFilterBody} filterTag={filterTag} />
    </Container>
  );
}

export default Todos;
