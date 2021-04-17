import styled from "styled-components";

import { shade } from "polished";

import { device } from '../../Utils/devicesWidth';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: stretch;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
  }

  @media ${device.mobileS} {
    flex-direction: column;
    align-items: center;
  }

  @media ${device.mobileM} {
    flex-direction: column;
    align-items: center;
  }

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 0 0 0 90px;

  width: 100%;
  max-width: 600px;

  @media ${device.mobileM} {
    align-items: center;
    padding: 0;
    max-width: 200px;

  }

  @media ${device.mobileS} {
    align-items: center;
    padding: 0;
    max-width: 200px;

  }

  @media ${device.tablet} {
    align-items: center;
    padding: 0;
    margin-top: 40px;

    p{
      text-align: center;
    }


  }

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

  @media ${device.mobileS} {
    img{
      margin-top: 30px;
      width: 400px;
    }
  }
  @media ${device.mobileM} {
    img{
      margin-top: 30px;
      width: 400px;
    }
  }
  img {
    margin-top: 50px;
  }
`;

