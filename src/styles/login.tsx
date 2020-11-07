import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFF;

  img{
    width: 450px;
    margin-bottom: 60px;
  };

  form{
    width: 100%;
    max-width: 450px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:#FFF;

    p {
      text-align: center;
      color: #25282a;
      font-size: 20pt;
    };

    input {
      font-size: 24px;
      background: #FFF
    };

    button {
      color: #FFF;
      justify-content: center;
      align-items: center;
      background: #000;
    };

    p {
      font-size: 32px;
      margin-bottom: 32px;
      align-items: center;
      text-align: center;
    }

    #forgot {
      background-color: transparent;
      color: #333;
      cursor: pointer;
      text-decoration: underline;
    }
  }

  h1 {
    position: absolute;
    right: 20px;
    bottom: 20px;
    font-size: 15px;
  }
`;