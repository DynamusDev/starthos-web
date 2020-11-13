import styled from "styled-components";
import { color } from '../../theme'

export const Flag = styled.button`
  width: 35px;
  height: 35px;

  border-radius: 17.5px;
  border-width: 0;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent;
`;

export const Container = styled.button`
  width: 100%;
  height: 35px;
  background: ${color.white};
  border-radius: 8px;
  box-shadow: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
  margin-bottom: 10px;
`;