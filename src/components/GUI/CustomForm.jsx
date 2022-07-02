import React from "react";
import styled from "styled-components";

function CustomForm() {
  const StyledForm = styled.div`

      .form{
        width: 100%;
        display: flex;
        gap: .5rem;
        justify-content: center;
        align-items: center;
        input{
          flex: 7;
          outline: none;
          border-radius: 10px;
          border: 1px solid gray;
          font-weight: 600;
          padding: 6px;

          &:focus{
            color: #333;
            box-shadow: 2px 2px 2px rgba(22, 169, 236, 0.7),
            4px -3px 2px rgba(22, 169, 236, 0.7),
            -4px 0 2px rgba(22, 169, 236, 0.7);
            ;
            border: none;
          }
        }

        button{
          flex: 2;
          background-color: blue;
          outline: none;
          border: none;
          color: white;
          padding: 7px 10px;
          border-radius: 10px;
        }
    }
  `;

  return (
    <StyledForm>
      <form className="form">
        <input type="text" className="form-input" placeholder="I want to ..." />
        <small><button type="submit">+ New Task</button></small>
      </form>
    </StyledForm>
  );
}

export default CustomForm;
