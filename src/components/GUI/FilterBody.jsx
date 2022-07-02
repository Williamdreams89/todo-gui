import styled from "styled-components";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomForm from "./CustomForm";

function FilterBody({ showFilterBody, filterTag }) {
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
  const StyledFilterBody = styled.div`
    width: 100%;
    height: max-content;
    display: ${({ showFilterBody }) => (showFilterBody ? "" : "none")};

    .todo__item{
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 10px;     
    }

    .checkbox{
      margin-right: 10px;
    }

      input[type: "checkbox"]::before{
        position: relative;
        border-radius: 50%;
        content: "";
        width: 11px;
        height: 11px;
      }
  `;
  return (
    <StyledFilterBody showFilterBody={showFilterBody} filterTag={filterTag}>
      {filterTag === "all" ? (
        <div className="todo__item">
          {data.map((todoItem) => (
            <div>
              <input
                type="checkbox"
                name="done"
                checked={todoItem.done}
                className="checkbox"
              />
              {todoItem.done === true ? (
                <del>
                  <a href="#">{todoItem.title}</a>
                </del>
              ) : (
                <a href="#">{todoItem.title}</a>
              )}
              
            </div>
            
            ))}
            <CustomForm />
        </div>
      ) : null}
    </StyledFilterBody>
  );
}

export default FilterBody;
