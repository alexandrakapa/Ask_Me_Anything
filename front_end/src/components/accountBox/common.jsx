import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: rgb(90, 87, 87);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color: rgb(121, 63, 212);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgb(121, 63, 212);
  padding: 0px 10px;
  //border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  margin-bottom: 5%;
  margin-left: 3%;

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

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  margin-left: 10%;
  transition: all, 240ms ease-in-out;
  background: rgb(121, 63, 212);

  &:hover {
    filter: brightness(1);
    background: rgb(140, 91, 255);
  }
`;

