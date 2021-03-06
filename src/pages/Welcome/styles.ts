import styled from "styled-components";

import { shade } from "polished";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 0 0 0 90px;

  width: 100%;
  max-width: 700px;

  img{
    margin: 30px 0;
  }

  p{
    margin: 30px 0;

    color:#FAA146;
    font-weight: bold;
    font-size: 45px;

    line-height: 55px;
  }

  button{
    margin-top:30px;
    width: 300px;
    height: 60px;

    background-color: #FAA146;
    color: #fff;
    font-weight: bold;
    font-size: 20px;

    border-radius: 7px;
    border: none;

    transition: background-color 0.2s;

    &:hover{
      background-color: ${shade(0.2, "#FAA146")}
    }

    svg{
      margin-left: 16px;
    }

  }
`;

export const Background = styled.div`
  flex: 1;
  img {
    margin-top: 50px;
  }
`;
