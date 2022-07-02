import React from "react";
import styled from "styled-components";
import { FaPlusCircle, FaCheckCircle, FaCalendar } from "react-icons/fa";
import {GiGears} from "react-icons/gi"
function FooterSearch() {
  const StyledFooter = styled.div`
    position: fixed;
    bottom: 0;
    width: 520px;    
    height: 5rem;
    background-color: white;
    z-index:100;
    border-top: 1px solid gray;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;

    .search{
    }
    
    .options {
        border-top: 1px solid gray;
      display: flex;
      justify-content: space-evenly;
      height: 50%;
      width: 100%;
    }

    .search {
      display: flex;
      height: 50%;
      width: 100%;
      border-top: 2px rgb(241, 242, 247);
      align-items: center;
      input {
        flex: 7;
        margin-left: 10px;
        height: 85%;
        padding-left: 20px;
        border-radius: 30px;
        border: 1px solid gray;
        outline: none;
        background-color: ;
    }
    span {
        flex: 1.3;
        & > * {
            color: blue;
            font-size: 2rem;
            margin-left: 5px;
        }
    }

    
  }
  .options div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &>*{
      cursor: pointer;
    }
  }
`;
return (
    <StyledFooter>
      <div className="search">
        <input type="text" placeholder="I want to ..." />
        <span>
          <FaPlusCircle />
        </span>
      </div>
      <div className="options">
        <div>
          <FaCheckCircle />
          Tasks
          </div>
        <div>
          <FaCalendar />
          Calender</div>
        <div>
          <GiGears />
          Setting</div>
      </div>
    </StyledFooter>
  );
}

export default FooterSearch;
