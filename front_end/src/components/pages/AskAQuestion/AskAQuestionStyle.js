import styled from "styled-components";

export const AskAQuestionStyle = styled.div`
  h1 {
    line-height: 2;
    display: flex;
    margin-bottom: 10%;
    margin-top: 5%;
    color: #000000;
    font-size: 30px;
    font-weight: 200;
    margin-left: -10%;
  }

  h3 {
    font-size: 20px;
  }

  p {
    font-size: 15px;
  }

`

export const Input = styled . input `  
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgb(121, 63, 212);
  padding: 0px 10px;
  //border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  margin-bottom: 7%;
  margin-left: -15%;
  

  &::placeholder {
    color: rgb(0, 0, 0);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgb(121, 63, 212);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(95, 91, 91);
  }
   `;