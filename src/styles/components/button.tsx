import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  width: 85%;
  height: 35px;
  border-radius: 8px;
  box-shadow: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
  margin-bottom: 10px;

  p {
    font-size: 15px;
    width: 80%;
    text-align: left;
    margin-left: 10px;
  }
`;