import styled from "styled-components";

import { shade } from 'polished';

export const Container = styled.button`
  margin-top: 20px;
  height: 50px;

  background-color: #faa146;
  color: #fff;
  font-weight: bold;
  font-size: 20px;

  border-radius: 7px;

  border: none;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, "#FAA146")};
  }
`;
