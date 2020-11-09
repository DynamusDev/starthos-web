import styled from "styled-components";

export const Container = styled.aside`
  width: 25%;
  min-width: 350px;
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
      font-size: 15px;
    }
`;

export const Bar = styled.header`
  background-color: #fff;
  width: 90%;
  height: 10px;
  margin: 20px 0px;
`;

export const SignIn = styled.button `
  width: 85%;
  height: 45px;
  background: transparent;
  border-color: transparent;
  border-radius: 8px;
  box-shadow: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 25px;
  margin-bottom: 10px;

  p {
    font-size: 15px;
    width: 80%;
    text-align: left;
    margin-left: 30px;
  }

`;

export const Logout = styled.button `
  width: 85%;
  height: 45px;
  background: transparent;
  border-color: transparent;
  border-radius: 8px;
  box-shadow: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 25px;
  margin-bottom: 10px;

  p {
    font-size: 15px;
    width: 80%;
    text-align: left;
    margin-left: 30px;
    color: #FFF;
    font-weight: 600;
  }
`;

export const Emergência = styled.button`
  width: 85%;
  height: 45px;
  background: #C40000;
  border-radius: 8px;
  box-shadow: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 25px;
  margin-bottom: 10px;
  img {
    height: 30px;
    height: 30px;
  }

  p {
    color: #FFF;
    font-size: 15px;
    width: 80%;
    text-align: left;
    margin-left: 30px;
  }
`;

export const Manutenção = styled.button`
  width: 85%;
  height: 45px;
  background: #FF8A00;
  border-radius: 8px;
  box-shadow: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 25px;
  margin-bottom: 10px;
  img {
    height: 30px;
    height: 30px;
  }

  p {
    color: #FFF;
    font-size: 15px;
    width: 80%;
    text-align: left;
    margin-left: 30px;
  }
`;

export const Estoque = styled.button`
  width: 85%;
  height: 45px;
  background: #0057A7;
  border-radius: 8px;
  box-shadow: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 25px;
  margin-bottom: 10px;
  img {
    height: 30px;
    height: 30px;
  }

  p {
    color: #FFF;
    font-size: 15px;
    width: 80%;
    text-align: left;
    margin-left: 30px;
  }
`;

export const Pista = styled.button`
  width: 85%;
  height: 45px;
  background-color: #002A4E;
  border-radius: 8px;
  box-shadow: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 25px;
  margin-bottom: 10px;
  img {
    height: 30px;
    height: 30px;
  }

  p {
    color: #FFF;
    font-size: 15px;
    width: 80%;
    text-align: left;
    margin-left: 30px;
  }
`;