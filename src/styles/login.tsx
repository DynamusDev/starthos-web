import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
  position: relative;

  img{
    width: 300px;
    margin-bottom: 60px;
  };

  form{
    width: 100%;
    max-width: 350px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:#FFF;

    p {
      text-align: center;
      color: #25282a;
      font-size: 15px;
    };

    input {
      font-size: 1em;
      background: #FFF;
      color: #000
    };

    button {
      color: #FFF;
      width: 70%;
      height: 50px;
      justify-content: center;
      align-items: center;
      background: #000;
    };

    p {
      font-size: 1.5em;
      margin-bottom: 32px;
      align-items: center;
      text-align: center;
    }

    #forgot {
      background-color: transparent;
      color: #333;
      cursor: pointer;
      text-decoration: underline;
      font-size: 1em;
    }
  }
`;

export const Powered = styled.h1`
  position: absolute;
  right: 20px;
  bottom: 20px;
  font-size: 15px;
  color: #333;
`;