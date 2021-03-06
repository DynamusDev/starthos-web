import styled from "styled-components";
import { FiPlus, FiX } from 'react-icons/fi';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
`;

export const Add = styled(FiPlus)`
  position: absolute;
  top: 30px;
  right: 40px;
`

export const Close = styled(FiX)`
  position: absolute;
  top: 30px;
  right: 40px;
`