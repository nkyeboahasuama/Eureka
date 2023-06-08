import React from "react";
import { Container } from "../../atoms/Container";
import { Button } from "../../atoms/Button";
import {
  EmailContainer,
  FormButton,
  FormContainer,
  InputContainer,
  InputField,
} from "./FormPage.styles";

const FormPage = () => {
  return (
    <FormContainer>
      <EmailContainer>Fill email... blah blah blah</EmailContainer>
      <InputContainer>
        What is your worry?
        <InputField></InputField>
        <FormButton>Submit</FormButton>
      </InputContainer>
    </FormContainer>
  );
};

export default FormPage;
