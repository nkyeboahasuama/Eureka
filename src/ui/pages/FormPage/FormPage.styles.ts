import styled from "styled-components";
import { Button } from "../../atoms/Button";
import { Container } from "../../atoms/Container";

export const FormContainer = styled.div`
  width: 390px;
  height: 644px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ;
`;

export const InputContainer = styled(FormContainer)`
  height: 60%;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  color: white;
`;

export const InputField = styled.input`
  height: 60%;
  width: 340px;
  border: white solid;
  background: transparent;
  color: white;
`;

export const EmailContainer = styled(FormContainer)`
  height: 35%;
  background-color: white;
  color: black;
`;

export const FormButton = styled(Button)`
  background-color: white;
  color: black;
`;
