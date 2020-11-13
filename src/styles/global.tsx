import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  };

  /* div, header {
    min-width: 336px;
  } */

  body, form {
    font-family: 'Ubuntu', sans-serif;
    font-size: 14px;
    background-color: #FFF;
    text-rendering: optimizeLegibility;
  };

  html, body, #root {
    height: 100vh;
  };

  input, button, textarea {
    font-family: 400 18px 'Ubuntu', sans-serif;
    width: 100%;
    height: 60px;
    resize: vertical;
    color: #333;
    background-color: #E5E5E5;
    border: 0.3px solid #E5E5E5;
    border-radius: 8px;
    padding: 0 24px;
    margin-bottom: 15px;
    text-align: center;
    font-family: 'Ubuntu', sans-serif;
  };

  button {
    cursor: pointer;
  }

  .empty {
    width: 80vw;
    text-align: center;
    font-family: 'Ubuntu', sans-serif;
  }

  .button{
    font-family: 400 18px 'Ubuntu', sans-serif;
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-weight: 700;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    justify-content: space-around;
    line-height: 60px;
    transition: filter .2s;

    p {
      font-family: 400 20px 'Ubuntu', sans-serif;
      color: #FFF;
    }
  }
  .button:hover{
    filter: brightness(90%);
  }
`;