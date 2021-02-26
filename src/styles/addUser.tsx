import styled from "styled-components";
import { color } from '../theme'

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

export const Select = styled.select`
  font-family: 400 20px 'Ubuntu', sans-serif;
  width: auto;
  height: 30px;
  text-align: center;
  border: 0;
  color: ${color.grey};
  border-width: 1px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-align: center;
  line-height: 60px;
  transition: filter .2s;
  margin-bottom: 18px;
`;

export const Form = styled.form`
    width: 100%;
    max-width: 400px;

    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    padding-top: 20px;
`;

export const Input = styled.input`
  font-size: 1em;
  height: 50px;
  border-width: 1px;
  border-color: ${props => props.theme.colors.text};
  background: #FFF;
`;

export const Title = styled.h1`
  font-size: 1.2em;
  margin-bottom: 5px;
`;

export const Text = styled.p`
  font-size: 14px;
  margin-left: 10px;
  text-align: center;
  width: 90%;
  margin-bottom: 10px;
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
  width: 70%;

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