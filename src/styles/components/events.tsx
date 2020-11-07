import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 85%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: auto;
`;

export const Select = styled.select`
  font-family: 400 18px 'Ubuntu', sans-serif;
  width: 130px;
  height: 50px;
  text-align: center;
  background-color: transparent;
  color: #333;
  font-size: 25px;
  border: 0;
  border-radius: 8px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-align: center;
  font-size: 20px;
  line-height: 60px;
  transition: filter .2s;
`;

export const Event = styled.div`
  height: 95%;
  width: 100%;
  padding: 20px;
  overflow: auto;
  justify-content: center;
  align-items: center;
`;

export const EventList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  list-style: none;
`;

export const Button = styled.button`
  font-family: 400 18px 'Ubuntu', sans-serif;
  width: 200px;
  height: 200px;
  text-align: center;
  background-color: red;
  color: #333;
  font-size: 20px;
  border: 0;
  border-radius: 10px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-decoration: none;
  font-size: 20px;
  line-height: 60px;
  border-color: rgba(255,255,255, 0.5);
  padding: 5px;
  margin-right: 30px;
`;

export const DataHora = styled.div`
  display: flex;
  height: 20px;
  width: 100%;
  color: #FFF;
  align-items: center;
  justify-content: space-between;
`;

export const DataText = styled.p`
  font-size: 20px;
  color: #FFF;
  font-family: 'Ubuntu';
  text-align: center;
  font-weight: 300;
`;

export const Id = styled.p`
  font-size: 25px;
  color: #FFF;
  text-align: center;
  font-family: 'Ubuntu';
  text-align: center;
`;

export const Details = styled.button`
  background-color: #fff;
  border-radius: 20px;
  border-width: 1px;
  border-color: #444;
  height: 90%;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Timming = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Time = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Body = styled.div`
  display: flex;
  border-color: #58595B;
  border-width: 1;
  overflow: auto;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 20px;
  height: 60%;
  width: 100%;
`;

export const ContentTitle = styled.p`
  font-size: 15pt;
  font-family: 'Ubuntu';
  font-weight: 500;
  color: #58595B;
`;

export const Content = styled.p`
  font-size: 15pt;
  font-family: 'Ubuntu';
  color: #58595B;
`;

export const Separate = styled.div`
  height: 35px;
  width: 35px;
`;

export const Footer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const FooterButton = styled.button`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
`;

export const ContentButton = styled.text`
  font-size: 15pt;
  color: #FFF;
  font-family: "Ubuntu";
  font-weight: 300;
  text-align: center;
  justify-content: center;
`;
