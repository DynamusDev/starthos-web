import styled from "styled-components";

export const Container = styled.aside`
  width: 25vw;
  height: 100vh;
  padding: 10px;

  display: flex;
  align-items: center;
  flex-direction: column;
  background: #58595B;
  overflow: auto;

  @media (max-width: 390px){
    button {
      font-size: 1.5em;
    }
  }
  @media (max-width: 200px){
    button {
      font-size: 1em;
    }
  }

  #forgot {
      background-color: transparent;
      color: #FFF;
      cursor: pointer;
      text-decoration: none;
    }
`;

export const Bar = styled.header`
  background-color: #fff;
  width: 90%;
  height: 10px;
  margin: 20px 0px;
`;

export const SignIn = styled.button `
  width: 80%;
  height: 55px;
  background: transparent;
  border-color: transparent;
  border-radius: 8px;
  box-shadow: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;

`;

export const Logout = styled.button `
  width: 80%;
  height: 55px;
  background: transparent;
  border-color: transparent;
  border-radius: 8px;
  box-shadow: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;

  p {
    color: #FFF;
    font-size: 20px;
  }
`;

export const Emergência = styled.button`
  width: 80%;
  height: 55px;
  background: #C40000;
  border-radius: 8px;
  box-shadow: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const Manutenção = styled.button`
  width: 80%;
  height: 55px;
  background: #FF8A00;
  border-radius: 8px;
  box-shadow: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const Estoque = styled.button`
  width: 80%;
  height: 55px;
  background: #0056A7;
  border-radius: 8px;
  box-shadow: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const Pista = styled.button`
  width: 80%;
  height: 55px;
  background-color: #002A4E;
  border-radius: 8px;
  box-shadow: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
`;