import styled from "styled-components";
import { color } from '../theme'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  background-color: #fcfcff;
`

export const Content = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  background-color: #E6E7E8;
`;

export const Form = styled.form`
    width: 100%;
    max-width: 600px;

    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #E6E7E8;
    overflow: auto;
`;

export const Input = styled.input`
  font-size: 1em;
  background: #FFF;
  height: 100px;
`;

export const Title = styled.h1`
  font-size: 1.2em;
  color: ${color.grey};
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 14px;
  color: ${color.grey};
  margin-left: 10px;
  text-align: center;
  width: 90%;
`;

export const Ponto = styled.div`
  height: 8px;
  width: 8px;

  border-radius: 5px;
  background-color: ${color.pista};
`;

export const Checkbox = styled.input.attrs({
  type: 'checkbox'
})`
  height: 15px;
  width: 15px;

  border-radius: 5px;
`;

export const AirportContainer = styled.button`
  height: 15px;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const AirportsContainer = styled.div`
  height: 150px;
  width: 100%;
  padding-top: 20px;
  margin-bottom: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;

export const Submit = styled.button`
  height: 70px;
  width: 70%;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${color.pista};
  border-radius: 12px
`;