import styled from "styled-components";

import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 60px 0;
    width: 350px;

    display: flex;
    flex-direction: column;
    text-align: center;

  }

  input{
    background-color: #F3F3F3;
    border: none;
    height: 60px;
    padding: 10px;

    color: #9E9E9E;

    border-radius: 7px;

    & + input{
      margin-top: 10px;
    }

    &::placeholder{
    color: #9E9E9E;
    }
  }

  button{
    margin-top:20px;
    height: 50px;

    background-color: #FAA146;
    color: #fff;
    font-weight: bold;
    font-size: 20px;

    border-radius: 7px;

    border: none;

    transition: background-color 0.2s;

    &:hover{
      background-color: ${shade(0.2, '#FAA146')}
    }

  }

  a{
    color: #FAA146;
    margin-top: 10px;
    text-decoration: none;
    transition: color 0.2s;


    &:hover{
      color: ${shade(0.2, '#FAA146')}
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  img{
    margin-top: 50px;
  }
`;
