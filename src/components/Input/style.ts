import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #f3f3f3;

  height: 60px;
  padding: 10px;

  border-radius: 7px;

  & + div {
    margin-top: 10px;
  }

  input {
    flex: 1;
    border: none;
    background: transparent;

    color: #9e9e9e;

    &::placeholder {
      color: #9e9e9e;
    }
  }
  svg {
    margin-right: 10px;
    color: #9e9e9e;
  }
`;
