import styled from "styled-components";
import { color } from '../theme';

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
  background-color: #fcfcff;
`;

export const Inline = styled.div`
  height: 110px;
  width: 80%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  font-size: 20px;
  color: ${color.grey};
  margin-bottom: 16px;
`;

export const SelectButton = styled.button`
  border-width: 0;
  border-radius: 8px;
  height: 30px;
  width: 70px;
  margin-left: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${color.grey};
  color: ${color.white};
`;

export const Submit = styled.button`
  border-width: 0;
  border-radius: 8px;
  height: 50px;
  width: 200px;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${color.emergência};
  color: ${color.white};
  margin-top: 50px;
`;

export const TextButton = styled.p`
  font-size: 15px;
  color: ${color.white};
`;

export const DateInput = styled.input.attrs({
  type: 'date'
})`
  height: 50px;
  width: 180px;
  max-height: 50px;
  max-width: 180px;
  min-height: 50px;
  min-width: 180px;
  border-radius: 15px;
  margin-left: 20px;
`;

export const TimeInput = styled.input.attrs({
  type: 'time'
})`
  height: 50px;
  width: 180px;
  max-height: 50px;
  max-width: 180px;
  min-height: 50px;
  min-width: 180px;
  border-radius: 15px;
  margin-left: 20px;
`;

export const Select = styled.select`
  font-family: 400 22px 'Ubuntu', sans-serif;
  color: ${color.white};
  width: auto;
  height: 40px;
  text-align: center;
  background-color: transparent;
  border: 0;
  border-radius: 8px;
  background: ${color.grey};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-align: center;
  line-height: 60px;
  transition: filter .2s;
  margin-bottom: 8px;
  margin-left: 20px;
`;

export const Description = styled.textarea`
  height: 60px;
  max-height: 200px;
  min-height: 60px;
  width: 300px;
  min-width: 300px;
  max-width: 300px;
  border-radius: 8px;
  text-align: left;
  margin-left: 20px;
  padding: 5px;
`;

export const Input = styled.input`
  height: 60px;
  width: 200px;
  border-radius: 8px;
  text-align: center;
  margin-left: 20px;
`;