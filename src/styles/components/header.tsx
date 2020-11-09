import styled from "styled-components";
import { FiArrowLeft, FiArrowRight, FiFile, FiX } from 'react-icons/fi';

export const Head = styled.header`
  width: 100%;
  height: 80px;
  padding: 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  overflow: auto;
`;

export const Text = styled.h1`
  font-size: 1.5em;
`;

export const Back = styled(FiArrowLeft).attrs({
  size: 25,
  color: '#FFF'
})`
  
`;

export const Next = styled(FiArrowRight).attrs({
  size: 25,
  color: '#FFF'
})`
  
`;

export const File = styled(FiFile).attrs({
  size: 25,
  color: '#333'
})`
  
`;

export const Close = styled(FiX).attrs({
  size: 25,
  color: '#333'
})`
  
`;

export const Space = styled.div`
  width: 25px;
  height: 25px;
`;