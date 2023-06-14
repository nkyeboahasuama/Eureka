import React from "react";
import {
  EmailContainer,
  FormButton,
  FormContainer,
  InputContainer,
  InputField,
} from "./FormPage.styles";
import { questionService } from "../../../services";

const FormPage = () => {
  const onClickSubmit = async () => {
    try {
      await questionService.validateQuestion(
        "Ab0fZiGHESoIYdRhCmLE",
        "h4FaMascJsOwGzK3YSOB",
        "reject"
      );
      alert("Question Validated");
    } catch (error: any) {
      console.log("There was an error");
      console.log(error);
    }
  };

  return (
    <FormContainer>
      <EmailContainer>Fill email... blah blah blah</EmailContainer>
      <InputContainer>
        What is your worry?
        <InputField></InputField>
        <FormButton onClick={onClickSubmit}>Submit</FormButton>
      </InputContainer>
    </FormContainer>
  );
};

export default FormPage;
